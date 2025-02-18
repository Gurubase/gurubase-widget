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
      "data-light-mode": "true", // Optional - Force light mode
      "data-name": "YOUR_NAME", // Optional - Widget name
      "data-icon-url": "YOUR_ICON_URL", // Optional - Widget icon URL
      "data-bg-color": "#000000", // Optional - Widget background color
      "data-tooltip": "This is a tooltip.", // Optional
      "data-tooltip-width": "300", // Optional
    };
  
    // Add widget settings as data attributes
    Object.entries(widgetSettings).forEach(([key, value]) => {
      guruScript.setAttribute(key, value);
    });
  
    document.body.appendChild(guruScript);
  });