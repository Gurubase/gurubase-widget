# Integrations

## Docusaurus

1. Add this to `plugins` array in your `docusaurus.config.ts` file:


```ts
const config: Config = {

  // ...
  plugins: [
    require.resolve("./plugins/gurubase-widget.js"), // Add this line
  ],
  // ...
}
```

2. Create a file named `gurubase-widget.js` in your `plugins` directory and add the following code:

```js
module.exports = function (context) {
  return {
    name: "docusaurus-plugin-gurubase-widget", // Feel free to change this name
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: "script",
            attributes: {
              src: "https://widget.gurubase.io/widget.latest.min.js",
              "data-widget-id": "YOUR_WIDGET_ID", // Replace with your widget ID
              "data-text": "Ask AI", // Optional
              "data-margins": '{"bottom": "20px", "right": "20px"}', // Optional
              "data-light-mode": "false", // Optional
              "data-name": "YOUR_NAME", // Optional
              "data-icon-url": "YOUR_ICON_URL", // Optional
              "data-bg-color": "YOUR_BG_COLOR", // Optional
              "data-baseUrl": "YOUR_BASE_URL", // Optional, only needed for self-hosted widgets
              defer: true,
              id: "guru-widget-id", // Do not change this
            },
          },
        ],
      };
    },
  };
};
```

> See the [Docusaurus example](https://github.com/Gurubase/gurubase-widget/tree/master/examples/docusaurus).

## Mintlify

1. Create a `gurubase.js` file at the root of your documentation GitHub repo with the following code:

```js
// Customize widget settings
const widgetSettings = {
  widgetId: "YOUR_WIDGET_ID", // Replace with your widget ID
  text: "Ask AI", // Optional - Button text
  margins: { bottom: "20px", right: "20px" }, // Optional - Widget positioning
  lightMode: false, // Optional - Force light mode
  name: "YOUR_NAME", // Optional - Widget name
  iconUrl: "YOUR_ICON_URL", // Optional - Widget icon URL
  bgColor: "YOUR_BG_COLOR", // Optional - Widget background color
  baseUrl: "YOUR_BASE_URL", // Optional, only needed for self-hosted widgets
};

// Load the GuruBase widget
const guruScript = document.createElement("script");
guruScript.src = "https://widget.gurubase.io/widget.latest.min.js";
guruScript.defer = true;
guruScript.id = "guru-widget-id";

// Add widget settings as data attributes
Object.entries({
  "data-widget-id": widgetSettings.widgetId,
  "data-text": widgetSettings.text,
  "data-margins": JSON.stringify(widgetSettings.margins),
  "data-light-mode": widgetSettings.lightMode,
  "data-name": widgetSettings.name,
  "data-icon-url": widgetSettings.iconUrl,
  "data-bg-color": widgetSettings.bgColor,
  "data-baseUrl": widgetSettings.baseUrl
}).forEach(([key, value]) => {
  guruScript.setAttribute(key, value);
});

// Append the script to the document
document.body.appendChild(guruScript);
```

2. Add the script to your Mintlify configuration by updating your `mint.json` file:

```json
{
  "scripts": [
    {
      "src": "/gurubase.js"
    }
  ]
}
```

> See the [Mintlify example](https://github.com/Gurubase/gurubase-widget/tree/master/examples/mintlify).

## MkDocs

1. Create a file named `gurubase-widget.js` in your docs directory and add the following code:

```js
document.addEventListener("DOMContentLoaded", () => {
  // Load the GuruBase widget
  const guruScript = document.createElement("script");
  guruScript.src = "https://widget.gurubase.io/widget.latest.min.js";
  guruScript.defer = true;
  guruScript.id = "guru-widget-id";

  // Configure widget settings
  const widgetSettings = {
    "data-widget-id": "YOUR_WIDGET_ID", // Replace with your widget ID
    "data-text": "Ask AI", // Optional - Button text
    "data-margins": JSON.stringify({ bottom: "20px", right: "20px" }), // Optional
    "data-light-mode": "false", // Optional - Force light mode
    "data-name": "YOUR_NAME", // Optional - Widget name
    "data-icon-url": "YOUR_ICON_URL", // Optional - Widget icon URL
    "data-bg-color": "YOUR_BG_COLOR", // Optional - Widget background color
    "data-baseUrl": "YOUR_BASE_URL" // Optional, only needed for self-hosted widgets
  };

  // Add widget settings as data attributes
  Object.entries(widgetSettings).forEach(([key, value]) => {
    guruScript.setAttribute(key, value);
  });

  document.body.appendChild(guruScript);
});
```

2. Add the script to your MkDocs configuration by updating your `mkdocs.yml` file:

```yaml
extra_javascript:
  - gurubase-widget.js
```

> See the [MkDocs example](https://github.com/GuruBase/examples/tree/main/mkdocs).

## Sphinx

1. Create a file named `gurubase-widget.js` in your `_static` directory and add the following code:

```js
document.addEventListener('DOMContentLoaded', function() {
    // Customize widget settings
    const widgetSettings = {
        widgetId: "YOUR_WIDGET_ID", // Replace with your widget ID
        text: "Ask AI", // Optional - Button text
        margins: { bottom: "20px", right: "20px" }, // Optional
        lightMode: false, // Optional - Force light mode
        bgColor: "YOUR_BG_COLOR", // Optional - Widget background color
        iconUrl: "YOUR_ICON_URL", // Optional - Widget icon URL
        name: "YOUR_NAME", // Optional - Widget name
        baseUrl: "YOUR_BASE_URL" // Optional, only needed for self-hosted widgets
    };

    // Load the GuruBase widget
    const guruScript = document.createElement("script");
    guruScript.src = "https://widget.gurubase.io/widget.latest.min.js";
    guruScript.defer = true;
    guruScript.id = "guru-widget-id";

    // Add widget settings as data attributes
    Object.entries({
        "data-widget-id": widgetSettings.widgetId,
        "data-text": widgetSettings.text,
        "data-margins": JSON.stringify(widgetSettings.margins),
        "data-light-mode": widgetSettings.lightMode,
        "data-bg-color": widgetSettings.bgColor,
        "data-icon-url": widgetSettings.iconUrl,
        "data-name": widgetSettings.name,
        "data-baseUrl": widgetSettings.baseUrl
    }).forEach(([key, value]) => {
        guruScript.setAttribute(key, value);
    });

    // Append the script to the document
    document.body.appendChild(guruScript);
});
```

2. Add the script to your Sphinx configuration by updating your `conf.py` file:

```python
html_static_path = ['_static']
html_js_files = ['gurubase-widget.js']
```

> See the [Sphinx example](https://github.com/GuruBase/examples/tree/main/sphinx).

## ReadTheDocs

The installation depends on what you use to build your docs.

If you use `sphinx`, see the [Sphinx example](https://github.com/GuruBase/examples/tree/main/sphinx).

If you use `mkdocs`, see the [MkDocs example](https://github.com/GuruBase/examples/tree/main/mkdocs).

If you use `docusaurus`, see the [Docusaurus example](https://github.com/GuruBase/examples/tree/main/docusaurus).

If you use `mintlify`, see the [Mintlify example](https://github.com/GuruBase/examples/tree/main/mintlify).

## Remix

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
  baseUrl?: string;
}

export function GurubaseWidget({
  widgetId,
  text = "Ask AI",
  margins = { bottom: "20px", right: "20px" },
  bgColor,
  iconUrl,
  name,
  lightMode = false,
  baseUrl
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
    if (baseUrl) script.setAttribute('data-baseUrl', baseUrl);
    script.setAttribute('data-light-mode', String(lightMode));

    document.body.appendChild(script);

    return () => {
      const widgetScript = document.getElementById('guru-widget-id');
      if (widgetScript) document.body.removeChild(widgetScript);
      const widgetContainer = document.querySelector('.chat-widget');
      if (widgetContainer) widgetContainer.remove();
    };
  }, [widgetId, text, margins, bgColor, iconUrl, name, lightMode, baseUrl]);

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
          // baseUrl="YOUR_BASE_URL"
        />
        <Scripts />
      </body>
    </html>
  );
}
```

The widget will now be available across all pages in your Remix documentation app. Make sure to replace `YOUR_WIDGET_ID` with your actual GuruBase widget ID.

> See the [Remix example](https://github.com/GuruBase/examples/tree/main/remix).

## Astro - Starlight

1. Add this to your `astro.config.mjs` file:

```js
// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({

      // ...

			head: [ // Add this to the head section
				{
					tag: 'script',
					attrs: {
						id: 'guru-widget-id',
						src: 'https://widget.gurubase.io/widget.latest.min.js',
						'data-widget-id': 'YOUR_WIDGET_ID', // Replace with your actual widget ID
						'data-margins': JSON.stringify({ bottom: "20px", right: "20px" }), // Optional
						'data-text': 'Ask AI', // Optional
						'data-name': 'YOUR_NAME', // Optional
						'data-icon-url': 'YOUR_ICON_URL', // Optional
						'data-light-mode': 'true', // Optional
						'data-bg-color': 'YOUR_BG_COLOR', // Optional
						'data-baseUrl': 'YOUR_BASE_URL', // Optional, only needed for self-hosted widgets
						defer: true,
					},
				},
			],

      // ...
		}),
	],
});
```

> See the [Astro - Starlight example](https://github.com/GuruBase/examples/tree/main/astro-starlight).

## React

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
  lightMode = true,
  baseUrl = null
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
  }, [widgetId, text, margins, bgColor, iconUrl, name, baseUrl]);

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
          lightMode={false} // Optional
          bgColor="YOUR_BG_COLOR" // Optional
          iconUrl="YOUR_ICON_URL" // Optional
          name="YOUR_NAME" // Optional
          baseUrl="YOUR_BASE_URL" // Optional
        />
      {/* ... existing app content ... */}
    </div>
  );
}

export default App;
```

> See the [React example](https://github.com/GuruBase/examples/tree/main/react).

## Next.js

1. Create a new file named `GurubaseWidget.js` in your `components` directory:

```jsx
'use client'

import Script from 'next/script'

export default function GurubaseWidget({
  widgetId,
  text = "Ask AI",
  margins = { bottom: "20px", right: "20px" },
  lightMode = false,
  bgColor,
  iconUrl,
  name,
  baseUrl
}) {
  return (
    <Script
      src="https://widget.gurubase.io/widget.latest.min.js"
      strategy="lazyOnload"
      async
      id="guru-widget-id"
      data-widget-id={widgetId}
      data-text={text}
      data-margins={JSON.stringify(margins)}
      data-light-mode={String(lightMode)}
      {...(name && { "data-name": name })}
      {...(iconUrl && { "data-icon-url": iconUrl })}
      {...(bgColor && { "data-bg-color": bgColor })}
      {...(baseUrl && { "data-baseUrl": baseUrl })}
    />
  )
}
```

2. Use the component in your page, layout, however you want. One way is to create a new file named `_app.js` in your `pages` directory:

```js
import '../styles/global.css'
import GurubaseWidget from '../components/GurubaseWidget'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GurubaseWidget 
        widgetId="YOUR_WIDGET_ID" // Replace with your actual widget ID
        // Optional props:
        // text="Ask AI"
        // margins={{ bottom: "20px", right: "20px" }}
        // lightMode={false}
        // bgColor="YOUR_BG_COLOR"
        // iconUrl="YOUR_ICON_URL"
        // name="YOUR_NAME"
        // baseUrl="YOUR_BASE_URL"
      />
    </>
  )
}
```

> See the [Next.js example](https://github.com/GuruBase/examples/tree/main/nextjs).

## Retype

1. Add this to your `_includes/head.html` file:

```html
<script async src="https://widget.gurubase.io/widget.latest.min.js"
data-widget-id="YOUR_WIDGET_ID"
data-text="Ask AI"
data-margins='{"bottom": "1rem", "right": "1rem"}'
data-light-mode="true"
data-bg-color="YOUR_BG_COLOR" 
data-icon-url="YOUR_ICON_URL"
data-name="YOUR_NAME"
data-baseUrl="YOUR_BASE_URL"
id="guru-widget-id">
</script>
```

> See the [Retype example](https://github.com/GuruBase/examples/tree/main/retype).
