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

## Mintlify

1. Create a `gurubase.js` file at the root of your documentation GitHub repo with the following code:

```js
// Customize widget settings
const widgetSettings = {
  widgetId: "YOUR_WIDGET_ID", // Replace with your widget ID
  text: "Ask AI", // Optional - Button text
  margins: { bottom: "20px", right: "20px" }, // Optional - Widget positioning
  lightMode: false // Optional - Force light mode
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
  "data-light-mode": widgetSettings.lightMode
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
    "data-light-mode": "false" // Optional - Force light mode
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

## Sphinx

1. Create a file named `gurubase-widget.js` in your docs directory and add the following code:

```js
document.addEventListener('DOMContentLoaded', function() {
    // Customize widget settings
    const widgetSettings = {
        widgetId: "YOUR_WIDGET_ID", // Replace with your widget ID
        text: "Ask AI", // Optional - Button text
        margins: { bottom: "20px", right: "20px" }, // Optional
        lightMode: false // Optional - Force light mode
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
        "data-light-mode": widgetSettings.lightMode
    }).forEach(([key, value]) => {
        guruScript.setAttribute(key, value);
    });

    // Append the script to the document
    document.body.appendChild(guruScript);
});
```

2. Add the script to your Sphinx configuration by updating your `conf.py` file:

```python
html_js_files = ['gurubase-widget.js']
```

## ReadTheDocs

The installation depends on what you use to build your docs.

If you use `sphinx`, you can follow the instructions for Sphinx above.

If you use `mkdocs`, you can follow the instructions for MkDocs above.

If you use `docusaurus`, you can follow the instructions for Docusaurus above.

If you use `mintlify`, you can follow the instructions for Mintlify above.
