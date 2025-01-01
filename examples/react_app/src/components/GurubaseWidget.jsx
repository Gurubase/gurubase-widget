"use client";

import { useEffect } from 'react';

function GurubaseWidget({
  widgetId,
  text = "Ask AI",
  margins = { bottom: "20px", right: "20px" },
  bgColor = null,
  iconUrl = null,
  name = null,
  lightMode = true
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
  }, [widgetId, text, margins, bgColor, iconUrl, name]);

  return null;
}

export default GurubaseWidget;
