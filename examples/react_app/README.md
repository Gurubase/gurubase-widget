# React Example for Gurubase Widget

This is a simple React example.

## Gurubase Widget Integration

1. Create a new file named `GurubaseWidget.jsx` in your `src/components` directory:

```jsx
"use client";

import { useEffect } from 'react';

function GurubaseWidget({
  widgetId,
  text = "Ask AI",
  margins = { bottom: "20px", right: "20px" },
  bgColor = null,
  iconUrl = null,
  name = null,
  lightMode = "auto",
  baseUrl = null,
}) {
  useEffect(() => {
    // Check if widget is already initialized
    if (window.chatWidget) {
      return;
    }

    // Load marked.js first
    // const markedScript = document.createElement('script');
    // markedScript.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
    // markedScript.async = true;

    // Load widget script after marked.js
    // markedScript.onload = () => {
      const script = document.createElement('script');
      script.src = 'https://widget.gurubase.io/widget.latest.min.js';
      script.async = true;

      // Set data attributes
      script.setAttribute('data-widget-id', widgetId);
      if (text) {
        script.setAttribute('data-text', text);
      }
      if (margins) {
        script.setAttribute('data-margins', JSON.stringify(margins));
      }
      if (bgColor) {
        script.setAttribute('data-bg-color', bgColor);
      }
      if (iconUrl) {
        script.setAttribute('data-icon-url', iconUrl);
      }
      if (name) {
        script.setAttribute('data-name', name);
      }
      if (lightMode) {
        script.setAttribute('data-light-mode', lightMode);
      }
      if (baseUrl) {
        script.setAttribute('data-baseUrl', baseUrl);
      }

      script.setAttribute('id', 'guru-widget-id');

      document.body.appendChild(script);
    // };

    // document.body.appendChild(markedScript);

    // Cleanup when component unmounts
    return () => {
    //   document.body.removeChild(markedScript);
      const widgetScript = document.getElementById('guru-widget-id');
      if (widgetScript) {
        document.body.removeChild(widgetScript);
      }
      const widgetContainer = document.querySelector('.chat-widget');
      if (widgetContainer) {
        widgetContainer.remove();
      }
    };
  }, [widgetId, text, margins, bgColor, iconUrl, name]);

  return null;
}

export default GurubaseWidget;
```

2. Add the widget to your root layout file (`src/App.jsx` or the layout where you want the widget to appear):

```jsx
import GurubaseWidget from './components/GurubaseWidget';

function App() {
  return (
    <div>
        <GurubaseWidget 
          widgetId="YOUR_WIDGET_ID"
          text="Ask AI"
          margins={{ bottom: "20px", right: "20px" }} // Optional
          lightMode="auto" // Optional
          bgColor="YOUR_BG_COLOR" // Optional
          iconUrl="YOUR_ICON_URL" // Optional
          name="YOUR_NAME" // Optional
        />
      {/* ... existing app content ... */}
    </div>
  );
}

export default App;
```

## Usage

```bash
npm install
npm run dev
```

