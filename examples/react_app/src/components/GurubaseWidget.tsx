declare global {
  interface Window {
    chatWidget: any;  // or define a more specific type if you know the shape
  }
}

import { useEffect } from 'react';

interface GurubaseWidgetProps {
  widgetId: string;
  text?: string;
  margins?: {
    bottom: string;
    right: string;
  };
  bgColor?: string;
  iconUrl?: string;
  name?: string;
}

const GurubaseWidget: React.FC<GurubaseWidgetProps> = ({
  widgetId,
  text = "Ask AI",
  margins = { bottom: "20px", right: "20px" },
  bgColor,
  iconUrl,
  name
}) => {
  useEffect(() => {
    // Check if widget is already initialized
    if (window.chatWidget) {
      return;
    }

    const script = document.createElement('script');
    script.src = '/widget.js';
    script.setAttribute('data-widget-id', widgetId);
    script.setAttribute('data-text', text);
    script.setAttribute('data-margins', JSON.stringify(margins));
    
    if (bgColor) script.setAttribute('data-bg-color', bgColor);
    if (iconUrl) script.setAttribute('data-icon-url', iconUrl);
    if (name) script.setAttribute('data-name', name);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      const widgetContainer = document.querySelector('.chat-widget');
      if (widgetContainer) {
        document.body.removeChild(widgetContainer);
      }
      // Clean up the global widget instance
      delete window.chatWidget;
    };
  }, [widgetId, text, margins, bgColor, iconUrl, name]);

  return null;
};

export default GurubaseWidget;