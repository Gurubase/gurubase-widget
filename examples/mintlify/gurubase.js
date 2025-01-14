// Customize widget settings
const widgetSettings = {
    widgetId: "YOUR_WIDGET_ID", // Replace with your widget ID
    text: "Ask AI", // Optional - Button text
    margins: { bottom: "20px", right: "20px" }, // Optional - Widget positioning
    lightMode: false, // Optional - Force light mode
    name: "YOUR_NAME", // Optional - Widget name
    iconUrl: "YOUR_ICON_URL", // Optional - Widget icon URL
    bgColor: "#000000", // Optional - Widget background color
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
    "data-bg-color": widgetSettings.bgColor
  }).forEach(([key, value]) => {
    guruScript.setAttribute(key, value);
  });
  
  // Append the script to the document
  document.body.appendChild(guruScript);