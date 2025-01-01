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