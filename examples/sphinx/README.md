# Sphinx Example for Gurubase Widget

This is a simple Sphinx example.

## Gurubase Widget Integration

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

## Usage

```bash
chmod +x build.sh
./build.sh
open _build/html/index.html
```