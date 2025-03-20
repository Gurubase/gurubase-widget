# Astro - Starlight Example for Gurubase Widget

This is an example documentation site built with Astro and Starlight.

## Gurubase Widget Integration

1. The following is added to `astro.config.mjs` under the integrations array.

```js
head: [
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
            'data-light-mode': 'light', // Optional
            'data-bg-color': '#000000', // Optional
            defer: true,
        },
    },
],
```

## Usage

```bash
npm install
npm run dev
```
