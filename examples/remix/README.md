# Remix Example for Gurubase Widget

This is a simple Remix example.

## Gurubase Widget Integration

1. Create a new file `app/components/GurubaseWidget.tsx` (or `.jsx` if you're not using TypeScript):

```tsx
import { useEffect } from 'react';

declare global {
  interface Window {
    chatWidget?: any;
  }
}

interface GurubaseWidgetProps {
  widgetId: string;
  text?: string;
  margins?: { bottom: string; right: string };
  bgColor?: string;
  iconUrl?: string;
  name?: string;
  lightMode?: string;
  overlapContent?: string;
}

export function GurubaseWidget({
  widgetId,
  text = "Ask AI",
  margins = { bottom: "20px", right: "20px" },
  bgColor = null,
  iconUrl = null,
  name = null,
  lightMode = "auto",
  overlapContent = "false"
}: GurubaseWidgetProps) {
  useEffect(() => {
    if (window.chatWidget) return;

    const script = document.createElement('script');
    script.src = "https://widget.gurubase.io/widget.latest.min.js";
    script.async = true;
    script.id = "guru-widget-id";
    script.setAttribute('data-widget-id', widgetId);
    script.setAttribute('data-text', text);
    script.setAttribute('data-margins', JSON.stringify(margins));
    if (bgColor) script.setAttribute('data-bg-color', bgColor);
    if (iconUrl) script.setAttribute('data-icon-url', iconUrl);
    if (name) script.setAttribute('data-name', name);
    if (overlapContent) script.setAttribute('data-overlap-content', overlapContent)
    script.setAttribute('data-light-mode', String(lightMode));

    document.body.appendChild(script);

    return () => {
      const widgetScript = document.getElementById('guru-widget-id');
      if (widgetScript) document.body.removeChild(widgetScript);
      const widgetContainer = document.querySelector('.chat-widget');
      if (widgetContainer) widgetContainer.remove();
    };
  }, [widgetId, text, margins, bgColor, iconUrl, name, lightMode, overlapContent]);

  return null;
}
```

2. Add the widget to your root layout file (`app/root.tsx` or the layout where you want the widget to appear):

```tsx
import { GurubaseWidget } from '~/components/GurubaseWidget';

export default function App() {
  return (
    <html lang="en">
      <head>
        {/* ... existing head content ... */}
      </head>
      <body>
        {/* ... existing body content ... */}
        <GurubaseWidget 
          widgetId="YOUR_WIDGET_ID" // Replace with your actual widget ID
          // Optional props:
          // text="Ask AI"
          // margins={{ bottom: "20px", right: "20px" }}
          // lightMode="auto"
          // bgColor="YOUR_BG_COLOR"
          // iconUrl="YOUR_ICON_URL"
          // name="YOUR_NAME"
          // overlapContent="false"
        />
        <Scripts />
      </body>
    </html>
  );
}
```

## Usage

```bash
npm install
npm run dev
```
