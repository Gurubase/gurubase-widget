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
  lightMode?: boolean;
  tooltip?: string;
  tooltipWidth?: number;
}

export function GurubaseWidget({
  widgetId,
  text = "Ask AI",
  margins = { bottom: "20px", right: "20px" },
  bgColor,
  iconUrl,
  name,
  lightMode = false,
  tooltip,
  tooltipWidth
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
    script.setAttribute('data-light-mode', String(lightMode));
    if (tooltip) script.setAttribute('data-tooltip', tooltip);
    if (tooltipWidth) script.setAttribute('data-tooltip-width', tooltipWidth);

    document.body.appendChild(script);

    return () => {
      const widgetScript = document.getElementById('guru-widget-id');
      if (widgetScript) document.body.removeChild(widgetScript);
      const widgetContainer = document.querySelector('.chat-widget');
      if (widgetContainer) widgetContainer.remove();
    };
  }, [widgetId, text, margins, bgColor, iconUrl, name, lightMode, tooltip, tooltipWidth]);

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
          // lightMode={false}
          // bgColor="YOUR_BG_COLOR"
          // iconUrl="YOUR_ICON_URL"
          // name="YOUR_NAME"
          // tooltip="This is a tooltip."
          // tooltipWidth="300"
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
