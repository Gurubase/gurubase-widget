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
                "data-light-mode": "dark", // Optional
                "data-name": "YOUR_NAME", // Optional
                "data-icon-url": "YOUR_ICON_URL", // Optional
                "data-bg-color": "#000000", // Optional
                "data-overlap-content": "false", // Optional
                defer: true,
                id: "guru-widget-id", // Do not change this
              },
            },
          ],
        };
      },
    };
  };