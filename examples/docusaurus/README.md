# Docusaurus Example for Gurubase Widget

This is a simple Docusaurus example.

## Gurubase Widget Integration

1. The following is created in `plugins/gurubase-widget.js`.

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
                "data-bg-color": "#000000", // Optional
                "data-tooltip": "This is a tooltip.", // Optional
                "data-tooltip-width": "300", // Optional
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

2. The following is added to `docusaurus.config.ts` under the config object.

```ts
plugins: [
    require.resolve("./plugins/gurubase-widget.js"), // Add this line
],
```

## Usage

```bash
yarn
yarn start
```
