# Mintlify Example for Gurubase Widget

This is a simple Mintlify example.

## Gurubase Widget Integration

1. The following is created in `gurubase.js` at the root of your documentation GitHub repo.

```js
// Customize widget settings
const widgetSettings = {
  widgetId: "YOUR_WIDGET_ID", // Replace with your widget ID
  
  // Optional configurations:
  // text: "Ask AI",                                    // Button text
  // margins: { bottom: "20px", right: "20px" },       // Widget positioning
  // lightMode: false,                                  // Force light mode
  // name: "GURU_NAME",                                 // Widget name
  // iconUrl: "GURU_ICON_URL",                         // Widget icon URL
  // bgColor: "#000000",                               // Widget background color
};

// Load the GuruBase widget
const guruScript = document.createElement("script");
guruScript.src = "https://widget.gurubase.io/widget.latest.min.js";
guruScript.defer = true;
guruScript.id = "guru-widget-id";

// Add widget settings as data attributes
Object.entries(widgetSettings).forEach(([key, value]) => {
  const dataKey = `data-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
  const dataValue = typeof value === 'object' ? JSON.stringify(value) : value;
  guruScript.setAttribute(dataKey, dataValue);
});

// Initialize theme handling
guruScript.addEventListener('load', () => {
  const initWidget = setInterval(() => {
    if (window.chatWidget?.switchTheme) {
      clearInterval(initWidget);
      
      // Handle theme changes
      const syncTheme = () => {
        const isDark = document.documentElement.classList.contains('dark');
        window.chatWidget.switchTheme(!isDark);
      };

      // Watch for theme changes
      new MutationObserver(syncTheme).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      });
      
      // Set initial theme
      syncTheme();
    }
  }, 1000);

  // Stop checking after 20 seconds
  setTimeout(() => clearInterval(initWidget), 20000);
});
document.body.appendChild(guruScript);

```

2. The following is added to `mint.json` under the config object.

```json
{
  "scripts": [
    {
      "src": "/gurubase.js"
    }
  ]
}
```

## Usage

```bash
npm i -g mintlify
mintlify dev
```