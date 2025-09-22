// Widget class to handle all functionality
class ChatWidget {

  // Translation system
  translations = {
    en: {
      // Button and input text
      askAI: "Ask AI",
      askAnything: "Ask anything",
      askAnythingAbout: "Ask anything about {name}",
      askGuru: "Ask {name} Guru",
      
      // Empty state messages
      emptyStateHeading: "Ask anything about {name}",
      emptyStateDescription: "{name} Guru uses the latest data in the documentation to answer your questions.",
      
      // Loading/processing messages
      findingContexts: "Finding the best contexts from sources.",
      evaluatingSources: "Evaluating sources",
      errorFindingContexts: "Error finding contexts",
      errorEvaluatingSources: "Error evaluating sources",
      
      // Error messages
      genericError: "An error occurred while processing your request.",
      errorPrefix: "An error occurred: ",
      validationError: "At least 10 characters required!",
      browserNotSupported: "Your browser does not support audio recording. Please use a modern browser.",
      microphoneDenied: "Microphone access was denied. Please allow microphone access and try again.",
      noMicrophone: "No microphone found. Please connect a microphone and try again.",
      microphoneInUse: "Microphone is already in use by another application.",
      microphoneError: "Unable to access microphone. Please try again.",
      transcriptionError: "Failed to transcribe audio. ",
      
      // Voice recording text
      startVoiceRecording: "Start voice recording",
      stopRecording: "Stop recording",
      processingAudio: "Processing audio...",
      microphoneBlocked: "Microphone access blocked. Click to see how to enable it.",
      
      // Trust score text
      trustScore: "Trust Score",
      trustScoreTooltip: "Trust score reflects confidence in this answer. Always double-check references, as AI can make mistakes.",
      
      // Vote/feedback text
      feedbackPlaceholder: "Please tell us what could be improved...",
      cancel: "Cancel",
      submit: "Submit",
      
      // References/sources text
      sources: "Sources",
      
      // Footer text
      poweredBy: "powered by",
      clear: "Clear",
      
      // Accessibility labels
      sendMessage: "Send message",
      maximizeChat: "Maximize chat",
      minimizeChat: "Minimize chat",
      closeChat: "Close chat",
      askQuestion: "Ask a question",
      clearHistory: "Clear history",
      copyCode: "Copy code",
      exampleQuestion: "Example question: ",
      
      // Date/time text
      lastModified: "Last Modified:",
      
      // Character count
      charCount: "{count}/200"
    },
    tr: {
      // Button and input text
      askAI: "AI'a Sor",
      askAnything: "Herhangi bir şey sor",
      askAnythingAbout: "{name} hakkında herhangi bir şey sor",
      askGuru: "{name} Guru'ya Sor",
      
      // Empty state messages
      emptyStateHeading: "{name} hakkında herhangi bir şey sor",
      emptyStateDescription: "{name} Guru, yapay zeka desteğiyle sorularınıza cevap verir.",
      
      // Loading/processing messages
      findingContexts: "En iyi referansları buluyor...",
      evaluatingSources: "Referansları değerlendiriyor...",
      errorFindingContexts: "Referans bulma hatası",
      errorEvaluatingSources: "Referans değerlendirme hatası",
      
      // Error messages
      genericError: "İsteğiniz işlenirken bir hata oluştu.",
      errorPrefix: "Bir hata oluştu: ",
      validationError: "En az 10 karakter gerekli!",
      browserNotSupported: "Tarayıcınız ses kaydını desteklemiyor. Lütfen modern bir tarayıcı kullanın.",
      microphoneDenied: "Mikrofon erişimi reddedildi. Lütfen mikrofon erişimine izin verin ve tekrar deneyin.",
      noMicrophone: "Mikrofon bulunamadı. Lütfen bir mikrofon bağlayın ve tekrar deneyin.",
      microphoneInUse: "Mikrofon zaten başka bir uygulama tarafından kullanılıyor.",
      microphoneError: "Mikrofona erişilemiyor. Lütfen tekrar deneyin.",
      transcriptionError: "Ses transkripsiyonu başarısız. ",
      
      // Voice recording text
      startVoiceRecording: "Ses kaydını başlat",
      stopRecording: "Kaydı durdur",
      processingAudio: "Ses işleniyor...",
      microphoneBlocked: "Mikrofon erişimi engellendi. Nasıl etkinleştirileceğini görmek için tıklayın.",
      
      // Trust score text
      trustScore: "Güven Skoru",
      trustScoreTooltip: "Güven skoru bu cevaba olan güveni yansıtır. AI hata yapabilir, bu yüzden referansları her zaman kontrol edin.",
      
      // Vote/feedback text
      feedbackPlaceholder: "Lütfen neyin iyileştirilebileceğini söyleyin...",
      cancel: "İptal",
      submit: "Gönder",
      
      // References/sources text
      sources: "Kaynaklar",
      
      // Footer text
      poweredBy: "tarafından desteklenir",
      clear: "Temizle",
      
      // Accessibility labels
      sendMessage: "Mesaj gönder",
      maximizeChat: "Sohbeti büyüt",
      minimizeChat: "Sohbeti küçült",
      closeChat: "Sohbeti kapat",
      askQuestion: "Soru sor",
      clearHistory: "Geçmişi temizle",
      copyCode: "Kodu kopyala",
      exampleQuestion: "Örnek soru: ",
      
      // Date/time text
      lastModified: "Son Değiştirilme:",
      
      // Character count
      charCount: "{count}/200"
    }
  };

  // Translation function
  t(key, params = {}) {
    const lang = this.language || 'en';
    const translation = this.translations[lang]?.[key] || this.translations.en[key] || key;
    
    // Replace parameters in the translation string
    return translation.replace(/\{(\w+)\}/g, (match, param) => {
      return params[param] || match;
    });
  }

  injectStyles = (hljsTheme) => {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      /* Base theme colors */
      :host {
        --bg-primary: ${this.lightMode ? 'white' : '#141526'};
        --text-primary: ${this.lightMode ? '#1F2937' : 'white'};
        --bg-secondary: ${this.lightMode ? '#F9FAFB' : '#2D2F33'};
        --border-color: ${this.lightMode ? '#E5E7EB' : '#242629'};
        --header-bg: ${this.lightMode ? '#FAFAFA' : '#141526'};
        --search-bar-bg: ${this.lightMode ? 'white' : '#0C0D17'};
        --button-passive-bg: ${this.lightMode ? '#BABFC8' : '#191919'};
        --button-passive-svg-color: ${this.lightMode ? 'white' : '#6D6D6D'};
        --text-accent-color: ${this.lightMode ? '#6D6D6D' : '#A1A1A1'};
        --link-color: ${this.lightMode ? '#3782f6' : '#9999ff'};
        --response-button-color: ${this.lightMode ? '#6D6D6D' : 'white'};
        --error-red-color: ${this.lightMode ? '#DC2626' : '#F00'};
        --text-reference-color: ${this.lightMode ? '#000' : '#9999ff'};
        --tooltip-bg: ${this.lightMode ? '#1B242D' : '#FFF'};
        --tooltip-text: ${this.lightMode ? '#FFF' : '#1B242D'};
        --max-tooltip-width: ${this.maxTooltipWidth}px;
        --vote-button-color: ${this.lightMode ? '#6D6D6D' : '#A1A1A1'};
        --vote-button-hover: ${this.lightMode ? '#4B5563' : '#C1C1C1'};
        --vote-button-active-upvote: #10B981;
        --vote-button-active-downvote: #EF4444;
        --vote-button-disabled: ${this.lightMode ? '#D1D5DB' : '#4B5563'};
        --feedback-form-bg: ${this.lightMode ? '#F9FAFB' : '#1F2937'};
        --feedback-form-border: ${this.lightMode ? '#E5E7EB' : '#374151'};
        --feedback-textarea-bg: ${this.lightMode ? 'white' : '#111827'};
        --feedback-textarea-border: ${this.lightMode ? '#D1D5DB' : '#4B5563'};
        --feedback-textarea-focus: ${this.lightMode ? '#3B82F6' : '#60A5FA'};
        --feedback-button-bg: ${this.lightMode ? '#3B82F6' : '#2563EB'};
        --feedback-button-hover: ${this.lightMode ? '#2563EB' : '#1D4ED8'};
        --feedback-button-text: white;
        --feedback-cancel-bg: ${this.lightMode ? '#F3F4F6' : '#374151'};
        --feedback-cancel-hover: ${this.lightMode ? '#E5E7EB' : '#4B5563'};
        --feedback-cancel-text: ${this.lightMode ? '#374151' : '#D1D5DB'};
      }

      .chat-button[data-tooltip] {
        transition: all 0.2s ease;
      }

      .chat-button[data-tooltip]::before {
        content: attr(data-tooltip);
        position: absolute;
        display: flex;
        width: 220px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 12px;
        border-radius: 8px;
        background-color: var(--tooltip-bg);
        color: var(--tooltip-text);
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-align: center;
        opacity: 0;
        visibility: hidden;
        max-width: var(--max-tooltip-width);
        width: max-content;
        pointer-events: none;
        white-space: pre-wrap;
        z-index: 1000;
      }

      .chat-button[data-tooltip]::after {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: var(--tooltip-bg);
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        z-index: 1000;
      }

      /* Top position */
      .chat-button[data-tooltip-side="top"]::before {
        bottom: 100%;
        left: var(--tooltip-left, 0%);
        transform: translateX(-50%) translateY(-8px);
      }

      .chat-button[data-tooltip-side="top"]::after {
        bottom: calc(100% + 4px);
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
      }

      /* Bottom position */
      .chat-button[data-tooltip-side="bottom"]::before {
        top: 100%;
        left: var(--tooltip-left, 0%);
        transform: translateX(-50%) translateY(8px);
      }

      .chat-button[data-tooltip-side="bottom"]::after {
        top: calc(100% + 4px);
        left: 50%;
        transform: translateX(-50%) rotate(225deg);
      }

      /* Left position */
      .chat-button[data-tooltip-side="left"]::before {
        right: 100%;
        top: 50%;
        transform: translateY(-50%) translateX(-8px);
      }

      .chat-button[data-tooltip-side="left"]::after {
        right: calc(100% + 4px);
        top: 50%;
        transform: translateY(-50%) rotate(-45deg);
      }

      /* Right position */
      .chat-button[data-tooltip-side="right"]::before {
        left: 100%;
        top: 50%;
        transform: translateY(-50%) translateX(8px);
      }

      .chat-button[data-tooltip-side="right"]::after {
        left: calc(100% + 4px);
        top: 50%;
        transform: translateY(-50%) rotate(135deg);
      }

      /* Top/Bottom left/right combo position */
      .chat-button[data-tooltip-side^="top "]::before,
      .chat-button[data-tooltip-side^="top "]::after {
        top: auto;
        bottom: calc(100% + 4px);
      }
      .chat-button[data-tooltip-side^="bottom "]::before,
      .chat-button[data-tooltip-side^="bottom "]::after {
        bottom: auto;
        top: calc(100% + 4px);
      }
      .chat-button[data-tooltip-side^="top "]::before {
        margin-bottom: 4px;
      }
      .chat-button[data-tooltip-side^="bottom "]::before {
        margin-top: 4px;
      }
      .chat-button[data-tooltip-side^="top "]::after,
      .chat-button[data-tooltip-side^="bottom "]::after {
        transform: rotate(45deg);
      }
      .chat-button[data-tooltip-side$=" left"]::before {
        left: 0.5em;
        right: auto;
      }
      .chat-button[data-tooltip-side$=" left"]::after {
        left: 1em;
        right: auto;
      }
      .chat-button[data-tooltip-side$=" right"]::before {
        right: 0.5em;
        left: auto;
      }
      .chat-button[data-tooltip-side$=" right"]::after {
        right: 1em;
        left: auto;
      }

      .chat-button[data-tooltip]:hover::before,
      .chat-button[data-tooltip]:hover::after {
        opacity: 1;
        visibility: visible;
      }

      /* Add new classes for edge positioning */
      .chat-button[data-tooltip].tooltip-left::before {
        right: 0;
        transform: translateX(0);
      }

      .chat-button[data-tooltip].tooltip-left::after {
        right: 16px;
        transform: translateX(0) rotate(45deg);
      }

      .chat-button[data-tooltip].tooltip-right::before {
        right: 100%;
        transform: translateX(100%);
      }

      .chat-button[data-tooltip].tooltip-right::after {
        right: 84%;
        transform: translateX(100%) rotate(45deg);
      }

      @media (max-width: 768px) {
        body.widget-open {
          width: 100%;
          touch-action: none;
          -webkit-overflow-scrolling: none;
          overscroll-behavior: none;
          height: 100%;
          position: fixed;
        }
        
        .chat-window:not(.floating) {
          position: fixed !important;
          min-width: 360px !important;
          width: 100vw !important;
          max-width: 100vw;
          height: 100% !important;
          right: -100vw; // Start from outside viewport
          border-radius: 0 !important;
          transition: right 0.3s ease, transform 0.3s ease;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          display: flex;
          flex-direction: column;
          bottom: 0;
          left: auto; // Remove left positioning
          box-sizing: border-box;
        }
        
        .chat-window.floating {
          width: 90vw !important;
          height: 90vh !important;
          max-width: none !important;
          max-height: none !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) scale(0);
          border-radius: 12px !important;
        }
        
        .chat-window.floating.open {
          transform: translate(-50%, -50%) scale(1);
        }
        
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          padding-bottom: env(safe-area-inset-bottom);
        }

        .chat-input-container {
          background: var(--header-bg);
          padding-bottom: env(safe-area-inset-bottom);
          z-index: 10000;
        }
      }

    .chat-widget {
      /* Add these properties */
      position: fixed;
      z-index: 9999;
      pointer-events: none; /* Allow clicks to pass through the container */
    }

    .markdown-content a {
      text-decoration: none;
      color: var(--link-color);
    }

    .markdown-content a:hover {
      text-decoration: underline;
      color: var(--link-color);
    }

    /* Update any other link styles */
    a {
      color: var(--link-color);
    }


    /* Make sure interactive elements within the widget can still receive clicks */
    .chat-button,
    .chat-window,
    .chat-window * {
      pointer-events: auto;
    }

    /* Update chat window styles */
    .chat-window {
      position: fixed;
      top: 0;
      right: -400px;
      width: 400px;
      height: 100vh;
      z-index: 9999; /* Match container z-index */
    }
    
    /* Floating window mode styles */
    .chat-window.floating {
      top: 50%;
      left: 50%;
      right: auto;
      transform: translate(-50%, -50%) scale(0);
      width: 600px;
      height: 80vh;
      max-height: 800px;
      max-width: 90vw;
      border-radius: 16px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      transition: transform 0.3s ease, opacity 0.3s ease;
      opacity: 0;
    }
    
    .chat-window.floating.open {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    
    /* Overlay for floating mode */
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      z-index: 9998;
      display: none;
      opacity: 0;
      transition: opacity 0.3s ease, backdrop-filter 0.3s ease;
      pointer-events: auto;
      cursor: pointer;
    }
    
    .overlay.visible {
      display: block;
      opacity: 1;
    }      

      #questionInput {
        color: var(--text-primary);
        background-color: var(--search-bar-bg);
      }

      #questionInput::placeholder {
        color: ${this.lightMode ? '#6B7280' : '#9CA3AF'};
      }

      .message-divider {
        border-top: 1px solid var(--border-color);
      }

      /* Adjust code block styling for dark mode */
      pre {
        background-color: ${this.lightMode ? '#F9FAFB' : '#2D2F33'} !important;
      }

      /* Adjust copy button styling */
      pre button {
        background-color: var(--bg-primary) !important;
        border-color: var(--border-color) !important;
      } 

        :root {
          --primary: #4f46e5;
          --background: #ffffff;
          --text: #1f2937;
          --chat-button-hover-bg: #f3f4f6; /* Default hover color */
          --chat-button-active-bg: #e5e7eb; /* Default active color */
        }

        .search-bar:-webkit-autofill,
        .search-bar:-webkit-autofill:hover,
        .search-bar:-webkit-autofill:focus {
          -webkit-text-fill-color: ${this.lightMode ? "#191919" : "#ffffff"};
          caret-color: ${this.lightMode ? "#191919" : "#ffffff"};
          -webkit-box-shadow: 0 0 0px 1000px ${this.lightMode ? "#E7F0FE" : "#0C0D17"} inset;
          transition: background-color 5000s ease-in-out 0s;
        }


        /* Insert highlight.js theme */
        ${hljsTheme}

        .chat-widget {
          font-family: 
            'Inter',
            system-ui,
            -apple-system,
            sans-serif;
  
          font-size: 14px;
          background-color: #000;
          color: #191919;
        }
  
        .chat-button {
          position: fixed;
          bottom: 20px;
          right: 20px;
          color: white;
          padding: 12px 20px;
          border-radius: 100px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: none;
          font-size: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
          background-color: var(--chat-button-bg);
          width: var(--initial-width);
          transition: width 0.2s; background-color 0.2s ease;
        }
  
        .chat-button .sparkle {
          display: flex;
          align-items: center;
          justify-content: center;
        }
  
        .chat-button:hover {
          background-color: var(--chat-button-hover-bg);
          width: calc(var(--initial-width) * 0.9); /* Reduce by 10% */
        }
  
        .chat-button:active {
          background-color: var(--chat-button-active-bg);
          text-color: #191919;
        }
  
        .chat-window:not(.floating) {
          position: fixed;
          top: 0;
          right: -400px;
          width: 400px;
          min-width: 400px;
          max-width: 800px;
          height: 100vh;
          background: var(--background);
          box-shadow: -4px 0 24px rgba(0, 0, 0, 0.1);
          display: none;
          flex-direction: column;
          overflow: hidden;
          transition: right 0.3s ease, transform 0.3s ease; // Add transform to transition
          border-radius: 0;
          background-color: var(--bg-primary);
        }
  
        .chat-window:not(.floating).open {
          right: 0;
          display: flex;
        }
        
        .chat-window.floating {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background-color: var(--bg-primary);
        }

        .chat-window.open.maximized {
          width: 100%;
          max-width: inherit;
          transition: width 0.3s ease;
        }
  
        .chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          border-bottom: 1px solid #F3F4F6;
          background-color: var(--header-bg);
        }
  
        .header-button {
          padding: 8px;
          background-color: var(--header-bg);
          border: 0px solid #e5e7eb;
          border-radius: 4px;
          cursor: pointer;
          color: #6b7280;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          display: flex;
          gap: 8px;
        }
  
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 12px 20px;
          background-color: var(--bg-primary);
          
          /* Webkit scrollbar styles */
          &::-webkit-scrollbar {
            width: 4px;  /* Changed from 6px to 4px */
          }

          &::-webkit-scrollbar-track {
            background: transparent;
          }

          &::-webkit-scrollbar-thumb {
            background-color: ${this.lightMode ? '#D1D5DB' : '#4B5563'};
            border-radius: 2px;  /* Reduced from 3px to 2px to match thinner width */
          }

          &::-webkit-scrollbar-thumb:hover {
            background-color: ${this.lightMode ? '#9CA3AF' : '#6B7280'};
          }

          /* Firefox scrollbar styles */
          scrollbar-width: thin;
          scrollbar-color: ${this.lightMode ? '#D1D5DB' : '#4B5563'} transparent;
        }
  
        .message {
          padding: 40px 0;
          position: relative;
          color: var(--text-primary);
        }
  
        .first-message {
          padding-top: 0;
        }
  
        .user-text {
          text-align: left;
          font-size: 14px;
          line-height: 1.5;
        }
  
        .message-divider {
          width: 100%;
          height: 1px;
          background-color: var(--border-color);
          margin: 8px 0;
          position: absolute;
          top: -10px;
          left: 0;
          right: 0;
          height: 1px;
          margin: 0;
          transform: translateY(-50%);
        }
  
        .bot-avatar {
          width: 24px;
          height: 24px;
          background: #eef2ff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }
  
        .message-content {
          flex: 1;
          max-width: 100%;
          overflow-wrap: break-word;
          word-wrap: break-word;
          word-break: break-word;
          background-color: var(--bg-primary);
        }
  
        .example-questions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 12px;
        }

        .code-block-copy-button {
          position: absolute; 
          top: 8px; 
          right: 8px; 
          padding: 6px; 
          border: 1px solid var(--border-color); 
          border-radius: 4px; 
          cursor: pointer;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          z-index: 1000;        
          background-color: var(--bg-primary);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          border-radius: 4px;
          padding: 4px 8px;
          font-size: 12px;
          cursor: pointer;
        }
  
        .example-question {
          background: #f3f4f6;
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.2s;
        }
  
        .example-question:hover {
          background: #e5e7eb;
        }
  
        .markdown-content {
          line-height: 1.6;
          width: 100%;
        }
  
        .markdown-content code {
          background: var(--bg-secondary);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: ui-monospace, monospace;
          font-size: 0.9em;
        }
  
        .markdown-content pre {
          background: var(--bg-secondary);
          padding: 12px;
          border-radius: 6px;
          overflow-x: auto;
          position: relative;
        }
  
        .markdown-content pre code {
          background: none;
          padding: 0;
          white-space: pre;
          display: inline-block;
          min-width: 100%;
        }
  
        .markdown-content p {
          margin: 0.5em 0;
        }
  
        .markdown-content ul,
        .markdown-content ol {
          padding-left: 1.5em;
          margin: 0.5em 0;
        }
  
        .markdown-content h1,
        .markdown-content h2,
        .markdown-content h3,
        .markdown-content h4,
        .markdown-content h5,
        .markdown-content h6 {
          margin: 1em 0 0.5em 0;
        }
  
        .markdown-content a {
          text-decoration: none;
        }
  
        .markdown-content a:hover {
          text-decoration: underline;
        }
  
        .markdown-content blockquote {
          border-left: 4px solid #e5e7eb;
          padding-left: 1em;
          margin: 1em 0;
          color: #6b7280;
        }
  
        .markdown-content table {
          border-collapse: collapse;
          width: 100%;
          margin: 1em 0;
          display: block;
          max-width: 100%;
          font-size: 0.9em;
        }
  
        .markdown-content th,
        .markdown-content td {
          border: 1px solid #e5e7eb;
          padding: 8px;
          text-align: left;
        }
  
        .markdown-content th {
          background: #f9fafb;
        }
  
        .markdown-content table {
          overflow-x: auto;
        }
  
        .markdown-content img {
          max-width: 100%;
          height: auto;
        }
  
        /* Add these loading animation styles */
        .loading-dots {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          height: 24px;
          width: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
  
        /* Add styles for references */
        .references-container {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
  
        .reference-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: var(--bg-secondary);
          border: 1px solid var(--button-passive-border);
          border-radius: 12px;
          text-decoration: none;
          transition: background-color 0.2s;
        }
  
        .reference-icon {
          width: 20px;
          height: 20px;
          object-fit: contain;
        }
  
        .reference-question {
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          position: relative;
          color: var(--text-reference-color);
          font-weight: 500;
        }
  
        /* Simple tooltip styles */
        .reference-question[data-tooltip] {
          position: relative;
        }
  
        /* Trust score styles */
        .trust-score-card {
          padding-top: 16px;
          margin-bottom: 16px;
        }
  
        .trust-score-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 8px;
        }
  
        .trust-score-left {
          display: flex;
          align-items: center;
          gap: 4px;
        }
  
        .trust-score-label {
          color: #6d6d6d;
          font-size: 14px;
          font-weight: 500;
        }
  
        .trust-score-value {
          font-weight: 600;
          font-size: 14px;
        }
  
        .trust-score-info {
          cursor: pointer;
          border: none;
          background: none;
          padding: 0;
          color: #9ca3af;
        }
  
        .trust-score-info:hover {
          color: #6b7280;
        }
  
        .trust-score-bars {
          display: flex;
          gap: 2px;
        }
  
        .trust-score-bar {
          height: 17px;
          width: 10px;
          border-radius: 4px;
          transition: background-color 0.2s;
        }
  
        /* Tooltip styles */
        .trust-score-info {
          position: relative;
        }
  
        .trust-score-info:hover::after {
          content: attr(data-tooltip);
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 8px;
          padding: 8px 12px;
          background: #1b242d;
          color: white;
          font-size: 12px;
          border-radius: 6px;
          width: 240px;
          text-align: center;
          z-index: 100;
        }
  
        /* Adjust pointer to overlap with tooltip */
        .trust-score-info:hover::before {
          content: "";
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(-4px) rotate(45deg); /* Adjusted translateY to create overlap */
          width: 8px;
          height: 8px;
          background: #1b242d;
          z-index: 99;
        }
  
        /* Add styles for date updated section */
        .date-updated {
          display: flex;
          align-items: center;
          gap: 4px;
          padding-bottom: 16px;
          margin-top: 16px;
          color: #6d6d6d;
          font-size: 14px;
        }
  
        .date-updated .label {
          color: #6d6d6d;
          font-weight: normal;
        }
  
        .date-updated .date {
          color: #191919;
          font-weight: 500;
        }
  
      .markdown-content pre {
        position: relative;
      }
  
      .copy-button {
        position: absolute;
        top: 8px;
        right: 8px;
        padding: 4px 8px;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 4px;
        color: #6b7280;
        transition: all 0.2s;
        opacity: 0;
      }
  
      .markdown-content pre:hover .copy-button {
        opacity: 1;
      }
  
      .copy-button:hover {
        background: #f3f4f6;
        color: #374151;
      }
  
      .copy-button.copied {
        background: #10B981;
        border-color: #10B981;
        color: white;
      }      
  
      .resize-handle {
        position: absolute;
        left: 0;
        top: 0;
        width: 4px;
        height: 100%;
        cursor: ew-resize;
        background: transparent;
        transition: background 0.2s;
      }
  
      .resize-handle:hover,
      .resize-handle.dragging {
        background: rgba(0, 0, 0, 0.1);
      }
  
      /* Add transition to body margin */
      body {
      }
  
      #gurubase-page-content-wrapper {
        width: 100%;
      }
  
      .anteon-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        border-bottom: 1px solid #e5e7eb;
        background-color: var(--header-bg);
        color: var(--text-primary);
        border-bottom: 1px solid var(--border-color);
      }
  
      .logo {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 500;
        width: 100%;
        text-overflow: ellipsis;
      }
  
      .anteon-footer {
        display: flex;
        flex-direction: column;
        gap: 12px;
        transition: padding-bottom 0.2s ease;
        background-color: var(--bg-primary);
        width: 100%;
        box-sizing: border-box;
        padding: 0;
      }
  
      .footer-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        color: var(--text-accent-color);
        font-size: 12px;
        width: 100%;
        box-sizing: border-box;
      }

      @media (max-width: 374px) {
        .footer-info {
          font-size: 10px;
        }
        
        .footer-info .anteon-powered svg {
          width: 35px;
          height: 6px;
        }
      }

      .powered-by {
        text-decoration: none; /* Remove underline by default */
        color: var(--text-accent-color) /* Default text color */
      }

      .visit-link {
        text-decoration: none; /* Remove underline by default */
        color: var(--text-accent-color) /* Default text color */
        align-items: center;
        gap: 4px;
        transition: color 0.2s;
        position: relative;
      }
  
      .visit-link:hover {
        text-decoration: underline; /* Underline the whole link on hover */
        text-decoration-skip-ink: none; /* Ensure underline does not skip spaces */
        color: {this.lightMode ? "#191919" : "#ffffff"};
      }
  
      .visit-link:hover .guru-text {
        color: #FF0000; /* Set "Guru" text color to red on hover */
      }
  
      .visit-link:hover::before {
        color: #191919; /* Set "Visit" text color */
      }
  
      .visit-link:hover::after {
        color: #FF0000; /* Set "Guru" text color */
      }
  
      .anteon-powered {
        display: flex;
        align-items: center;
        gap: 4px;
      }
  
      .chat-input-container {
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 0px;
        transition: padding-bottom 0.2s ease;
        background-color: var(--bg-primary);
        border-top: 1px solid var(--border-color);
      }

      .chat-input-container .input-row {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
      }

      .example-questions {
        display: flex;
        flex-wrap: wrap;
        row-gap: 8px;
        column-gap: 8px;
        margin-y: 12px;
        margin-x: 20px;
      }

      .example-questions .example-question {
        font-family: Inter, system-ui, -apple-system, sans-serif;
        font-size: 13px;
        font-weight: 400;
        color: var(--text-primary);
        background-color: #ffffff;
        border: 1px solid var(--border-color);
        border-radius: 6px;
        padding: 8px 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        text-align: left;
        max-width: 100%;
        white-space: normal;
        word-wrap: break-word;
        line-height: normal;
        background-color: var(--search-bar-bg);
      }

      .example-questions .example-question:hover {
        border-color: var(--border-color);
        background-color: var(--search-bar-bg);
      }

      .example-questions .example-question:active {
        transform: scale(0.98);
      }

  
      .search-wrapper {
        position: relative;
        flex: 1;
        display: flex;
        align-items: center;
        height: 56px;
        border: 1px solid var(--border-color);
        border-radius: 12px;
        background: #FDFDFD;
        transition: border-color 0.2s;
        background-color: var(--border-color);
      }
  
      .search-wrapper:focus-within {
        border-color: var(--primary);
        box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.1);
      }
  
      .search-icon {
        position: absolute;
        left: 12px;
        width: 20px;
        height: 20px;
        pointer-events: none;
      }
  
      .search-bar {
        flex: 1;
        height: 100%;
        padding: 0 100px 0 40px; /* Right padding for button */
        border: none;
        font-size: 16px;
        background: transparent;
        border-radius: 12px;
      }
  
      .search-bar:focus {
        outline: none;
      }
  
      .submit-button {
        position: absolute;
        right: 8px;
        display: flex;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-items: center;
        padding: 0;
        border-radius: 12px;
        border: none;
        color: var(--button-passive-svg-color);
        cursor: pointer;
        transition: all 0.2s;
        background-color: var(--button-passive-bg);
      }
  
      .submit-button.active {
        background-color: var(--primary);
        color: white;
      }
  
      .submit-button:hover {
        transform: translateY(-1px);
      }
  
      .submit-button:active {
        transform: translateY(0);
      }
  
      .submit-button svg {
        width: 24px;
        height: 24px;
      }

      .voice-record-container {
        position: absolute;
        right: 56px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .voice-record-button {
        display: flex;
        width: 32px;
        height: 32px;
        justify-content: center;
        align-items: center;
        padding: 0;
        border-radius: 8px;
        border: none;
        color: var(--text-accent-color);
        cursor: pointer;
        transition: all 0.2s;
        background-color: transparent;
      }

      .voice-record-button:hover {
        background-color: var(--button-passive-bg);
        color: var(--text-primary);
      }

      .voice-record-button.recording {
        /* Recording state - no background animation */
      }

      .voice-record-button.processing {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .voice-record-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        pointer-events: none;
      }

      .voice-record-button svg {
        width: 16px;
        height: 16px;
      }

      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
        }
        70% {
          box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
        }
      }
  
      .clear-button {
        display: none; /* Hidden by default */
        padding: 4px 12px;
        background: transparent;
        border: 1px solid var(--border-color);
        cursor: pointer;
        border-radius: 4px;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
        color: var(--text-primary);
        font-size: 12px;
        font-family: inherit;
        margin-left: auto;
      }
  
      /* Show edit button when empty state is not present */
      .chat-messages:not(:has(.empty-state)) ~ .anteon-footer .clear-button {
        display: flex;
      }
  
      .empty-state {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 100%;
        padding: 0 24px;
        color: var(--text-primary);
      }
  
      .sparkles {
        font-size: 24px;
        margin-bottom: 16px;
      }
  
      .empty-state h2 {
        color: #191919;
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 4px 0px;
        color: var(--text-primary);
      }
  
      .empty-state p {
        color: #71717A;
        font-size: 14px;
        line-height: 20px;
        margin: 0;
      }
  
      .user-message {
        justify-content: flex-end;
      }
  
      .user-bubble {
        background: var(--primary);
        color: white;
        padding: 8px 12px;
        border-radius: 12px;
        display: inline-block;
      }
  
      .bot-message {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
      }
  
      .bot-logo {
        margin-right: 8px;
      }
  
      .bot-logo img {
        width: 24px;
        height: 24px;
      }
  
      .user-bubble {
        background: var(--primary);
        color: white;
        padding: 12px 16px;
        border-radius: 12px;
        display: inline-block;
        max-width: 85%;
        margin-left: auto;
      }
  
      .bot-message .markdown-content {
        color: var(--text-primary);
        line-height: 1.6;
      }
  
      .message-wrapper {
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-width: 100%;
      }
  
      .bot-logo {
        display: flex;
        align-items: center;
      }
  
      .logo-circle {
        width: 24px;
        height: 24px;
        background: #FF9500;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
  
      .logo-container {
        position: relative;
        width: 24px;
        height: 24px;
      }
  
      .bot-icon {
        width: 24px;
        height: 24px;
        color: #1F2937;
      }
  
      .sparkle-badge {
        position: absolute;
        bottom: -4px;
        right: -4px;
        width: 16px;
        height: 16px;
        background: #FF9500;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
  
      /* First, add this style for the error message */
      .search-error {
        position: absolute;
        top: calc(100% + 12px);
        left: 0;
        color: var(--error-red-color);
        font-size: 12px;
        display: none;
      }
  
      /* Update the styles */
      .loading-stage {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 14px;
        color: ${this.lightMode ? '#6B7280' : '#9CA3AF'};
        margin-top: 16px;
      }

      .stage-text {
        -webkit-mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/350% 100%;
        mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/350% 100%;
        animation: shimmer 2.5s infinite;
      }

      @keyframes shimmer {
        100% {
          -webkit-mask-position: left;
          mask-position: left;
        }
      }
  
      .stage-status-container {
        width: 40px;
        height: 20px;
        display: none;
        align-items: center;
        justify-content: center;
      }
  
      .success-tick {
        width: 20px;
        height: 24px;
        color: #10B981;
      }

      .error-cross {
        width: 20px;
        height: 24px;
        color: red;
      }
  
      .stage-status-container.show {
        display: flex;
      }
  
      .error-container {
        margin-top: 16px;
        display: flex;
        align-items: flex-start;
        gap: 12px;
      }
  
      .error-cross-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
      }
  
      .hidden {
        display: none;
      }
  
      .stage-status-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
      }    
  
      .stage-status-container {
        display: none; /* Hide by default */
      }
  
      .stage-status-container.visible {
        display: flex; /* Show when needed */
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
      }

      .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px;
      }

      .loader {
        background-color: ${this.lightMode ? '#6B7280' : '#9CA3AF'};
        width: 12px;
        aspect-ratio: 1;
        --_g: no-repeat radial-gradient(farthest-side,${this.lightMode ? '#6B7280' : '#9CA3AF'} 94%,#0000);
        background:
          var(--_g) 0    0,
          var(--_g) 100% 0,
          var(--_g) 100% 100%,
          var(--_g) 0    100%;
        background-size: 40% 40%;
        animation: l38 .5s infinite; 
      }

      @keyframes l38 {
        100% {background-position: 100% 0,100% 100%,0 100%,0 0}
      }

      /* Vote button styles */
      .vote-button {
        border: none;
        background: inherit;
        padding: 0;
        cursor: pointer;
        transition: background-color 0.2s ease, transform 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--response-button-color);
      }

      .vote-button:hover:not(:disabled) {
        color: var(--response-button-color);
        opacity: 0.8;
      }

      .vote-button:disabled {
        cursor: not-allowed;
        color: var(--vote-button-disabled);
        opacity: 0.5;
      }

      .vote-button.upvote.selected svg path {
        stroke: var(--vote-button-active-upvote) !important;
      }

      .vote-button.downvote.selected svg path {
        stroke: var(--vote-button-active-downvote) !important;
      }

      .vote-feedback-form {
        margin-top: 8px;
        padding: 12px;
        background: var(--feedback-form-bg);
        border: 1px solid var(--feedback-form-border);
        border-radius: 8px;
        display: none;
      }

      .vote-feedback-form.show {
        display: block;
      }

      .vote-feedback-form textarea {
        width: 100%;
        min-height: 60px;
        max-height: 120px;
        padding: 8px;
        border: 1px solid var(--feedback-textarea-border);
        border-radius: 4px;
        background: var(--feedback-textarea-bg);
        color: var(--text-primary);
        resize: vertical;
        font-family: inherit;
        font-size: 14px;
        line-height: 1.4;
        box-sizing: border-box;
      }

      .vote-feedback-form textarea:focus {
        outline: none;
        border-color: var(--feedback-textarea-focus);
      }

      .vote-feedback-form textarea::placeholder {
        color: var(--text-accent-color);
      }

      .feedback-char-count {
        font-size: 12px;
        color: var(--text-accent-color);
        margin-top: 4px;
        text-align: right;
      }

      .feedback-char-count.over-limit {
        color: var(--error-red-color);
      }

      .feedback-actions {
        display: flex;
        gap: 8px;
        margin-top: 8px;
        justify-content: flex-end;
      }

      .feedback-button {
        padding: 6px 12px;
        border: none;
        border-radius: 4px;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s ease;
        font-weight: 500;
      }

      .feedback-button.submit {
        background: var(--feedback-button-bg);
        color: var(--feedback-button-text);
      }

      .feedback-button.submit:hover:not(:disabled) {
        background: var(--feedback-button-hover);
      }

      .feedback-button.submit:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      .feedback-button.cancel {
        background: var(--feedback-cancel-bg);
        color: var(--feedback-cancel-text);
      }

      .feedback-button.cancel:hover {
        background: var(--feedback-cancel-hover);
      }
    `;
  
    // document.head.appendChild(styleElement);
    this.shadow.appendChild(styleElement);
  };
  
  darkenColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent * 100);
    const R = (num >> 16) - amt;
    const G = ((num >> 8) & 0x00ff) - amt;
    const B = (num & 0x0000ff) - amt;
    return `#${(0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 1 ? 0 : B) : 255)).toString(16).slice(1)}`;
  }  

  async fetchDefaultValues() {
    try {
      const response = await fetch(this.guruUrl, {
        headers: {
          Authorization: this.widgetId,
          origin: window.location.href
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch default values');
      }

      const data = await response.json();
      // Only set values that weren't specified in config
      this.mainColor = this.mainColor || data.colors.base_color;
      this.logoUrl = this.logoUrl || data.icon_url;
      this.name = this.name || data.name;
      this.guruSlug = data.slug || ""; // Add guru slug
      this.voiceRecordingEnabled = data.voice_recording_enabled || false;
      this.textToSpeechEnabled = data.text_to_speech_enabled || false;

    } catch (error) {
      console.error('Error fetching default values:', error);
      // Fallback to hardcoded defaults if fetch fails
      this.mainColor = this.mainColor || "#0F9500";
      this.logoUrl = this.logoUrl || "";
      this.name = this.name || "";
      this.guruSlug = "";
      this.voiceRecordingEnabled = false;
      this.textToSpeechEnabled = false;
    }
  }  

  constructor() {
    // Find the widget script tag
    const scriptTag = document.querySelector('script#guru-widget-id');
    
    // Default values
    const defaultBaseUrl = "https://api.gurubase.io";
    
    if (scriptTag) {
        // Read attributes from script tag
        const widgetId = scriptTag.getAttribute('data-widget-id');
        if (!widgetId || widgetId.trim() === "") {
            throw new Error("Widget ID is required");
        }
        this.widgetId = widgetId;

        // Validate and set base URL
        try {
            const baseUrl = scriptTag.getAttribute('data-baseUrl');
            new URL(baseUrl); // Test if valid URL
            this.baseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
        } catch {
            this.baseUrl = defaultBaseUrl;
            // console.warn("Invalid base URL provided, using default");
        }
        // Validate and set button text
        this.buttonText = scriptTag.getAttribute('data-text') || this.t('askAI');

        // Validate and set tooltip text
        this.tooltipText = scriptTag.getAttribute('data-tooltip');

        // Validate and set language
        const language = scriptTag.getAttribute('data-language');
        if (language && ['en', 'tr'].includes(language.toLowerCase())) {
            this.language = language.toLowerCase();
        } else {
            this.language = 'en'; // Default to English
        }


        // Validate and set main color
        const mainColor = scriptTag.getAttribute('data-bg-color');
        if (mainColor && /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(mainColor)) {
            this.mainColor = mainColor;
        } else {
            this.mainColor = null;
            if (mainColor) console.warn("Invalid main color format, using default");
        }

        // Validate and set logo URL
        try {
            const logoUrl = scriptTag.getAttribute('data-icon-url');
            if (logoUrl) new URL(logoUrl); // Test if valid URL
            this.logoUrl = logoUrl;
        } catch {
            this.logoUrl = null;
            console.warn("Invalid logo URL provided, using default");
        }

        // Validate and set name
        const name = scriptTag.getAttribute('data-name');
        if (name && typeof name === 'string' && name.length <= 50) {
            this.name = name;
        } else {
            this.name = null;
            if (name) console.warn("Invalid name provided, using default");
        }

        const lightMode = scriptTag.getAttribute('data-light-mode')?.toLowerCase();

        if (lightMode === 'auto') {
          this.lightMode = getThemeState();
        } else {
          this.lightMode = (lightMode === 'true' || lightMode === 'light') || false;
        }

        // Validate and set margins
        try {
            const margins = JSON.parse(scriptTag.getAttribute('data-margins'));
            if (margins && 
                typeof margins === 'object' && 
                /^\d+(\.\d+)?(px|rem|em|vh|vw)$/.test(margins.bottom) && 
                /^\d+(\.\d+)?(px|rem|em|vh|vw)$/.test(margins.right)) {
                this.margins = margins;
            } else {
                throw new Error();
            }
        } catch {
            this.margins = { bottom: "20px", right: "20px" };
        }

        // Validate and set tooltip width
        const tooltipSide = scriptTag.getAttribute('data-tooltip-side');
        if (tooltipSide && ['top', 'bottom', 'left', 'right', 'top left', 'top right', 'bottom left', 'bottom right'].includes(tooltipSide.toLowerCase())) {
            this.tooltipSide = tooltipSide.toLowerCase();
        } else {
            this.tooltipSide = 'left'; // Default side
        }

        // Set max tooltip width
        this.maxTooltipWidth = 300; // Maximum width in pixels
        
        // Validate and set window mode
        const windowMode = scriptTag.getAttribute('data-window-mode');
        if (windowMode && ['sidebar', 'floating'].includes(windowMode.toLowerCase())) {
            this.windowMode = windowMode.toLowerCase();
        } else {
            this.windowMode = 'sidebar'; // Default mode
        }
    } else {
        // Fallback values if script tag not found
        this.widgetId = "";
        this.baseUrl = defaultBaseUrl;
        this.language = 'en'; // Default to English
        this.buttonText = this.t('askAI');
        this.margins = { bottom: "20px", right: "20px" };
        this.mainColor = null;
        this.logoUrl = null;
        this.name = null;
        this.windowMode = 'sidebar';
    }

    this.askUrl = this.baseUrl + "/widget/ask/";
    this.bingeUrl = this.baseUrl + "/widget/binge/";
    this.guruUrl = this.baseUrl + "/widget/guru/";
    this.transcribeUrl = this.baseUrl + "/widget/transcribe/";
    this.textToSpeechUrl = this.baseUrl + "/widget/text-to-speech/stream/";
    this.guruSlug = this.widgetId;
    this.isFirstQuestion = true;
    this.currentBingeId = null;
    this.previousQuestionSlug = null;
    
    // Update button text with proper translation after language is set
    if (!this.buttonText || this.buttonText === "Ask AI") {
      this.buttonText = this.t('askAI');
    }
    // Restore state is we are coming from a page refresh
    if (sessionStorage) {
      if (sessionStorage.getItem("isFirstQuestion")) this.isFirstQuestion = sessionStorage.getItem("isFirstQuestion") === "true";
      if (sessionStorage.getItem("currentBingeId")) this.currentBingeId = sessionStorage.getItem("currentBingeId");
      if (sessionStorage.getItem("previousQuestionSlug")) this.previousQuestionSlug = sessionStorage.getItem("previousQuestionSlug");
    }

    if (!this.widgetId) {
      console.error("Widget Error: Widget ID is required");
      return;
    }

    this.processCodeBlocks = this.processCodeBlocks.bind(this);

    // Bind all methods that will be used as event handlers
    this.toggleChat = this.toggleChat.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);

    // Initialize dragging state
    this.isDragging = false;
    this.startWidth = 0;
    this.startX = 0;
    
    // Store overlay click handler reference
    this.overlayClickHandler = null;

    // Add Speed Highlight CSS
    const speedHighlightCSS = document.createElement("link");
    speedHighlightCSS.rel = "stylesheet";
    speedHighlightCSS.href =
      "https://unpkg.com/@speed-highlight/core/dist/themes/default.css";
    document.head.appendChild(speedHighlightCSS);

    // Add custom styles for Speed Highlight
    const customStyles = document.createElement("style");
    customStyles.textContent = `
        [class*="shj-lang-"] {
            font-size: 14px !important;
            line-height: 1.4 !important;
        }

    `;
    document.head.appendChild(customStyles);

    this.container = document.createElement('div');
    this.container.id = 'gurubase-chat-widget-container';
    this.shadow = this.container.attachShadow({ mode: 'open' });

    // Add container-level keyboard event handler to prevent framework shortcuts
    this.setupContainerKeyboardHandler();

    this.init();

    // Add these properties
    this.isStreaming = false;
    // Add this property
    this.shouldAutoScroll = true;
    this.handleViewportHeight = this.handleViewportHeight.bind(this);
    this.handleVisualViewportChange = this.handleVisualViewportChange.bind(this);
    
    this.currentlyPlayingButton = null;
  }

  setupContainerKeyboardHandler() {
    // Bind handlers to be able to remove them later
    this.containerKeydownHandler = (event) => {
      // Only prevent if chat window is open
      const chatWindow = this.shadow.getElementById("chatWindow");
      if (!chatWindow || !chatWindow.classList.contains("open")) {
        return;
      }

      // Check if any input/textarea inside shadow DOM is focused
      const activeElement = this.shadow.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        // Only block specific keys that are known to cause conflicts with documentation frameworks
        const blockedKeys = ['d', '/', 's', 't', 'k', 'g', 'p', 'b'];
        if (blockedKeys.includes(event.key)) {
          event.stopImmediatePropagation();
        }
      }
    };

    this.containerKeyupHandler = (event) => {
      const chatWindow = this.shadow.getElementById("chatWindow");
      if (!chatWindow || !chatWindow.classList.contains("open")) {
        return;
      }

      const activeElement = this.shadow.activeElement;
      if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
        // Only block specific keys that are known to cause conflicts with documentation frameworks
        const blockedKeys = ['d', '/', 's', 't', 'k', 'g', 'p', 'b'];
        if (blockedKeys.includes(event.key)) {
          console.log("Key in blocked keys", event.key, "stopping immediate propagation");
          event.stopImmediatePropagation();
        }
      }
    };

    // Add container-level keyboard handlers in capture phase to run before framework handlers
    // this.container.addEventListener('keydown', this.containerKeydownHandler, true);
    this.container.addEventListener('keyup', this.containerKeyupHandler, true);
  }

  getLogo(maxWidth = 24, maxHeight = 24) {
    return `
      <img src="${this.logoUrl}" alt="Logo" style="max-width: ${maxWidth}px; max-height: ${maxHeight}px;" />
    `;
  }

  getSmallSparkle() {
    return `
      <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.98363 1.40552C3.10855 1.08878 3.55682 1.08878 3.68174 1.40552L4.06885 2.38708C4.10699 2.48378 4.18354 2.56032 4.28024 2.59846L5.26179 2.98558C5.57853 3.1105 5.57853 3.55877 5.26179 3.68369L4.28024 4.07081C4.18354 4.10895 4.10699 4.18549 4.06885 4.2822L3.68174 5.26375C3.55681 5.58049 3.10855 5.58049 2.98363 5.26375L2.59651 4.2822C2.55837 4.18549 2.48182 4.10895 2.38512 4.07081L1.40357 3.68369C1.08683 3.55877 1.08683 3.1105 1.40357 2.98558L2.38512 2.59846C2.48182 2.56032 2.55837 2.48378 2.59651 2.38708L2.98363 1.40552Z" fill="white"/>
        <path d="M6.14118 4.96258C6.20983 4.78851 6.45618 4.78852 6.52483 4.96258L6.82506 5.72381C6.84602 5.77696 6.88808 5.81902 6.94123 5.83998L7.70246 6.14021C7.87652 6.20886 7.87652 6.4552 7.70246 6.52385L6.94123 6.82408C6.88808 6.84504 6.84602 6.88711 6.82506 6.94025L6.52483 7.70148C6.45618 7.87555 6.20983 7.87555 6.14118 7.70148L5.84096 6.94025C5.82 6.88711 5.77793 6.84504 5.72479 6.82408L4.96356 6.52385C4.78949 6.4552 4.78949 6.20886 4.96356 6.14021L5.72479 5.83998C5.77793 5.81902 5.82 5.77696 5.84096 5.72381L6.14118 4.96258Z" fill="white"/>
      </svg>
    `;
  }

  getLargeSparkle() {
    return `<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.4216 5.02371C13.0462 3.44001 15.2875 3.44001 15.9121 5.02371L17.8477 9.93147C18.0384 10.415 18.4211 10.7977 18.9046 10.9884L23.8124 12.924C25.3961 13.5486 25.3961 15.7899 23.8124 16.4145L18.9046 18.3501C18.4211 18.5408 18.0384 18.9236 17.8477 19.4071L15.9121 24.3148C15.2875 25.8985 13.0462 25.8985 12.4216 24.3148L10.486 19.4071C10.2953 18.9236 9.91254 18.5408 9.42903 18.3501L4.52127 16.4145C2.93757 15.7899 2.93757 13.5486 4.52127 12.924L9.42903 10.9884C9.91254 10.7977 10.2953 10.415 10.486 9.93147L12.4216 5.02371Z" fill="${this.mainColor}"/>
    <path d="M28.2074 22.8168C28.5506 21.9465 29.7824 21.9465 30.1256 22.8168L31.6267 26.623C31.7315 26.8887 31.9419 27.099 32.2076 27.2038L36.0138 28.7049C36.8841 29.0482 36.8841 30.2799 36.0138 30.6232L32.2076 32.1243C31.9419 32.2291 31.7315 32.4394 31.6267 32.7052L30.1256 36.5113C29.7824 37.3816 28.5506 37.3816 28.2074 36.5113L26.7063 32.7052C26.6015 32.4394 26.3911 32.2291 26.1254 32.1243L22.3192 30.6232C21.4489 30.2799 21.4489 29.0482 22.3192 28.7049L26.1254 27.2038C26.3911 27.099 26.6015 26.8887 26.7063 26.623L28.2074 22.8168Z" fill="${this.mainColor}"/>
    </svg>`;
  }

  getInitialState() {
    if (sessionStorage && sessionStorage.getItem("chatState")) {
      // We have existing chat state but are reinitializing due to a refresh or full page navigation
      return sessionStorage.getItem("chatState");
    } else {
      return this.getEmptyState();
    }
  }

  getEmptyState() {
    // Define templates as instance properties using current mainColor
    return `
      <div class='empty-state'>
        <div class='sparkles'>${this.getLargeSparkle()}</div>
        <h2>${this.t('emptyStateHeading', { name: this.name })}</h2>
        <p>${this.t('emptyStateDescription', { name: this.name })}</p>
      </div>
    `;
  }

  getSubmitButton() {
    return `
      <button 
        class="submit-button"
        aria-label="${this.t('sendMessage')}"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 6.75C8.58579 6.75 8.25 6.41421 8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H18C18.4142 5.25 18.75 5.58579 18.75 6V15C18.75 15.4142 18.4142 15.75 18 15.75C17.5858 15.75 17.25 15.4142 17.25 15V7.81066L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L16.1893 6.75H9Z" fill="currentColor"/>
        </svg>
      </button>
    `;
  }

  getVoiceRecordButton() {
    if (!this.voiceRecordingEnabled) {
      return '';
    }
    
    return `
      <div class="voice-record-container">
        <button 
          class="voice-record-button"
          aria-label="${this.t('startVoiceRecording')}"
          title="${this.t('startVoiceRecording')}"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19v3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="9" y="2" width="6" height="13" rx="3" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </button>
      </div>
    `;
  }

  // Voice recording functionality
  initVoiceRecording() {
    if (!this.voiceRecordingEnabled) return;

    this.isRecording = false;
    this.isProcessing = false;
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.permissionStatus = 'prompt';
    this.recordingTime = 0;
    this.recordingTimer = null;
    this.recordingTimeout = null;
    this.maxRecordingDuration = 30; // 30 seconds limit

    // Check microphone permission status
    this.checkMicrophonePermission();
  }

  async checkMicrophonePermission() {
    if (navigator.permissions && navigator.permissions.query) {
      try {
        const result = await navigator.permissions.query({ name: 'microphone' });
        this.permissionStatus = result.state;

        result.addEventListener('change', () => {
          this.permissionStatus = result.state;
        });
      } catch (error) {
        this.permissionStatus = 'prompt';
      }
    }
  }

  async toggleVoiceRecording() {
    if (this.isRecording) {
      this.stopVoiceRecording();
    } else {
      await this.startVoiceRecording();
    }
  }

  async startVoiceRecording() {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert(this.t('browserNotSupported'));
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream);
      this.audioChunks = [];

      this.mediaRecorder.ondataavailable = (event) => {
        this.audioChunks.push(event.data);
      };

      this.mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        await this.processAudio(audioBlob);
      };

      this.mediaRecorder.start();
      this.isRecording = true;
      
      // Start recording timer
      this.recordingTime = 0;
      this.recordingTimer = setInterval(() => {
        this.recordingTime++;
        this.updateVoiceRecordButton();
      }, 1000);
      
      // Set timeout to automatically stop recording after maxRecordingDuration seconds
      this.recordingTimeout = setTimeout(() => {
        if (this.isRecording) {
          this.stopVoiceRecording();
        }
      }, this.maxRecordingDuration * 1000);
      
      this.updateVoiceRecordButton();

    } catch (error) {
      if (error.name === 'NotAllowedError') {
        alert(this.t('microphoneDenied'));
      } else if (error.name === 'NotFoundError') {
        alert(this.t('noMicrophone'));
      } else if (error.name === 'NotReadableError') {
        alert(this.t('microphoneInUse'));
      } else {
        alert(this.t('microphoneError'));
      }
    }
  }

  stopVoiceRecording() {
    if (this.mediaRecorder && this.isRecording) {
      this.mediaRecorder.stop();
      this.mediaRecorder.stream.getTracks().forEach(track => track.stop());
      this.isRecording = false;
      
      // Clear recording timer
      if (this.recordingTimer) {
        clearInterval(this.recordingTimer);
        this.recordingTimer = null;
      }
      
      // Clear recording timeout
      if (this.recordingTimeout) {
        clearTimeout(this.recordingTimeout);
        this.recordingTimeout = null;
      }
      
      this.recordingTime = 0;
      
      this.updateVoiceRecordButton();
    }
  }

  async processAudio(audioBlob) {
    this.isProcessing = true;
    this.updateVoiceRecordButton();

    try {
      const result = await this.transcribeAudio(audioBlob);
      if (result.text) {
        const questionInput = this.shadow.getElementById('questionInput');
        if (questionInput) {
          questionInput.value = result.text;
          questionInput.dispatchEvent(new Event('input'));
        }
      }
    } catch (error) {
      alert(this.t('transcriptionError') + error.message);
      this.stopVoiceRecording();
    } finally {
      this.isProcessing = false;
      this.updateVoiceRecordButton();
    }
  }

  async transcribeAudio(audioBlob) {
    const formData = new FormData();
    formData.append("audio", audioBlob, "recording.webm");

    const response = await fetch(`${this.transcribeUrl}`, {
      method: 'POST',
      headers: {
        'Authorization': this.widgetId,
        'origin': window.location.href
      },
      body: formData
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.msg || 'Failed to transcribe audio');
    }

    return await response.json();
  }

  formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  updateVoiceRecordButton() {
    const container = this.shadow.querySelector('.voice-record-container');
    if (!container) return;

    if (this.isProcessing) {
      container.innerHTML = `
        <button 
          class="voice-record-button processing"
          disabled
          aria-label="${this.t('processingAudio')}"
          title="${this.t('processingAudio')}"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12a9 9 0 11-6.219-8.56" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="1s" repeatCount="indefinite"/>
            </path>
          </svg>
        </button>
      `;
    } else if (this.isRecording) {
      container.innerHTML = `
        <div style="display: flex; align-items: center; gap: 4px; font-size: 12px; color: var(--text-primary);">
          <span style="font-family: monospace; font-weight: 500;">${this.formatTime(this.recordingTime)}/${this.formatTime(this.maxRecordingDuration)}</span>
        </div>
        <button 
          class="voice-record-button recording"
          aria-label="${this.t('stopRecording')}"
          title="${this.t('stopRecording')}"
          style="border-radius: 50%; background-color: #374151; color: white;"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
        </button>
      `;
    } else {
      container.innerHTML = `
        <button 
          class="voice-record-button"
          aria-label="${this.t('startVoiceRecording')}"
          title="${this.permissionStatus === 'denied' 
            ? this.t('microphoneBlocked')
            : this.t('startVoiceRecording')}"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19v3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="9" y="2" width="6" height="13" rx="3" stroke="currentColor" stroke-width="2" fill="none"/>
          </svg>
        </button>
      `;
    }
  }

  // Text-to-speech methods
  processQueuedChunksForButton(button) {
    const audioState = button.audioState;
    if (
      audioState.isProcessingRef ||
      !audioState.sourceBufferRef ||
      audioState.queuedChunksRef.length === 0
    ) {
      return;
    }

    audioState.isProcessingRef = true;

    while (
      audioState.queuedChunksRef.length > 0 &&
      !audioState.sourceBufferRef.updating
    ) {
      const chunk = audioState.queuedChunksRef.shift();

      try {
        audioState.sourceBufferRef.appendBuffer(chunk);
      } catch (error) {
        console.error("Error appending buffer:", error);
        // Buffer might be full or other error
        audioState.queuedChunksRef.unshift(chunk); // Put it back
        break;
      }
    }

    audioState.isProcessingRef = false;
  }

  stopTextToSpeechForButton(button) {
    const audioState = button.audioState;
    if (audioState.audioRef) {
      // Revoke the object URL before clearing the source
      if (audioState.audioRef.src && audioState.audioRef.src.startsWith('blob:')) {
        URL.revokeObjectURL(audioState.audioRef.src);
      }      
      audioState.audioRef.pause();
      audioState.audioRef.src = "";
      audioState.audioRef = null;
    }

    if (
      audioState.mediaSourceRef &&
      audioState.mediaSourceRef.readyState === "open" // Can be closed, open, ended
    ) {
      try {
        audioState.mediaSourceRef.endOfStream();
      } catch (e) {
        // Ignore errors during cleanup
      }
    }

    audioState.mediaSourceRef = null;
    audioState.sourceBufferRef = null;
    audioState.queuedChunksRef = [];
    audioState.isProcessingRef = false;
    audioState.isPlaying = false;
    audioState.isGeneratingAudio = false;
    audioState.hasAudio = false;
    audioState.abortController = null;
    
    // Clear global reference when audio is stopped (not paused)
    if (this.currentlyPlayingButton === button) {
      this.currentlyPlayingButton = null;
    }
    
    this.updateTextToSpeechButton();
  }

  togglePlayPauseForButton(button) {
    const audioState = button.audioState;
    if (!audioState.audioRef || !audioState.hasAudio) return;

    if (audioState.isPlaying) {
      audioState.audioRef.pause();
      audioState.isPlaying = false;
    } else {
      audioState.audioRef.play().then(() => {
        audioState.isPlaying = true;
      }).catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
    this.updateTextToSpeechButton();
  }

    cleanTextForSpeech(text) {
    // Remove only the first line that starts with # (initial header)
    let cleaned = text.replace(/^#+\s+.*$/m, '');
    
    return cleaned;
  }

  handleTextToSpeechClick(text, button) {
    // Get or create audio state for this specific button
    if (!button.audioState) {
      button.audioState = {
        audioRef: null,
        mediaSourceRef: null,
        sourceBufferRef: null,
        queuedChunksRef: [],
        isProcessingRef: false,
        isGeneratingAudio: false,
        isPlaying: false,
        hasAudio: false,
        abortController: null
      };
    }

    const audioState = button.audioState;

    // If this button has audio and it's the currently playing button, toggle play/pause
    if (audioState.audioRef && audioState.hasAudio && this.currentlyPlayingButton === button) {
      this.togglePlayPauseForButton(button);
    } else {
      // Otherwise, generate new speech (restart from beginning)
      this.generateSpeechForButton(text, button);
    }
  }

  async generateSpeechForButton(text, button) {
    if (!text) return;

    const audioState = button.audioState;

    // Stop any currently playing audio from other buttons
    if (this.currentlyPlayingButton && this.currentlyPlayingButton !== button) {
      this.stopTextToSpeechForButton(this.currentlyPlayingButton);
    }

    // Stop any existing audio for this button before starting new one
    if (audioState.hasAudio || audioState.audioRef) {
      this.stopTextToSpeechForButton(button);
    }

    // Cancel any ongoing fetch request for this button
    if (audioState.abortController) {
      audioState.abortController.abort();
    }

    // Clean the text before sending to TTS
    const cleanedText = this.cleanTextForSpeech(text);

    audioState.isGeneratingAudio = true;
    this.updateTextToSpeechButton();

    // Create abort controller for this request
    audioState.abortController = new AbortController();

    try {
      // Create audio element and MediaSource
      const audio = document.createElement("audio");
      const mediaSource = new MediaSource();

      audioState.audioRef = audio;
      audioState.mediaSourceRef = mediaSource;

      audio.src = URL.createObjectURL(mediaSource);
      audio.volume = 1.0;
      audioState.hasAudio = true;

      // Handle audio events
      audio.addEventListener("play", () => {
        audioState.isPlaying = true;
        this.currentlyPlayingButton = button;
        this.updateTextToSpeechButton();
      });
      audio.addEventListener("pause", () => {
        audioState.isPlaying = false;
        // Don't clear currentlyPlayingButton on pause - keep it for resume
        this.updateTextToSpeechButton();
      });
      audio.addEventListener("ended", () => {
        audioState.isPlaying = false;
        if (this.currentlyPlayingButton === button) {
          this.currentlyPlayingButton = null;
        }
        this.stopTextToSpeechForButton(button);
      });

      // Wait for MediaSource to open
      await new Promise((resolve, reject) => {
        mediaSource.addEventListener("sourceopen", () => {
          resolve();
        }, { once: true });
        mediaSource.addEventListener("error", (error) => {
          console.error("MediaSource error:", error);
          reject(error);
        }, { once: true });
      });

      // Create audio buffer - try different formats
      let sourceBuffer;
      try {
        sourceBuffer = mediaSource.addSourceBuffer("audio/mpeg");
      } catch (e) {
        try {
          sourceBuffer = mediaSource.addSourceBuffer("audio/mp4");
        } catch (e2) {
          try {
            sourceBuffer = mediaSource.addSourceBuffer("audio/webm");
          } catch (e3) {
            console.error("No supported audio format found:", e3);
            throw e3;
          }
        }
      }
      audioState.sourceBufferRef = sourceBuffer;

      // Triggered when a buffer update is finished
      audioState.sourceBufferRef.addEventListener("updateend", () => {
        this.processQueuedChunksForButton(button);
      });

      audioState.sourceBufferRef.addEventListener("error", (e) => {
        console.error("SourceBuffer error:", e);
      });

      // Get the stream response
      const response = await fetch(this.textToSpeechUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.widgetId,
          origin: window.location.href
        },
        body: JSON.stringify({ text: cleanedText }),
        signal: audioState.abortController.signal
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Get reader from response
      const reader = response.body.getReader();
      let chunkCount = 0;
      let firstChunkReceived = false;

      // Read and process chunks
      while (true) {
        // Check if request was aborted
        if (audioState.abortController.signal.aborted) {
          break;
        }

        const { done, value } = await reader.read();

        if (done) {
          // Signal end of stream when all chunks are processed
          if (mediaSource.readyState === "open") {
            // Wait for any pending updates
            if (audioState.sourceBufferRef && audioState.sourceBufferRef.updating) {
              await new Promise((resolve) => {
                audioState.sourceBufferRef.addEventListener("updateend", resolve, { once: true });
              });
            }

            // Process remaining chunks
            while (audioState.queuedChunksRef.length > 0) {
              await this.processQueuedChunksForButton(button);
              await new Promise((resolve) => setTimeout(resolve, 100));
            }

            mediaSource.endOfStream();
          }
          break;
        }

        chunkCount++;

        // Queue the chunk
        audioState.queuedChunksRef.push(value);
        await this.processQueuedChunksForButton(button);

        // Start playing after first chunk
        if (!firstChunkReceived) {
          audioState.isGeneratingAudio = false;
          firstChunkReceived = true;
          this.updateTextToSpeechButton();
          
          // Small delay to ensure buffer has enough data
          setTimeout(() => {
            if (audioState.audioRef) {
              audioState.audioRef.play().then(() => {
              }).catch((error) => {
                console.error("Error playing audio:", error);
              });
            }
          }, 100);
        }
      }
    } catch (error) {
      if (error.name === 'AbortError') {
      } else {
        console.error("Text-to-speech error:", error);
      }
      this.stopTextToSpeechForButton(button);
      this.updateTextToSpeechButton();
    }
  }

  updateTextToSpeechButton() {
    const textToSpeechButtons = this.shadow.querySelectorAll('.text-to-speech-response-button');
    textToSpeechButtons.forEach(button => {
      const icon = button.querySelector('svg');
      const audioState = button.audioState || {};
      
      if (audioState.isGeneratingAudio) {
        // Show loading spinner
        icon.innerHTML = `
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" fill="var(--response-button-color)" opacity="0.3"/>
          <path d="M12 2a10 10 0 0 1 10 10" stroke="var(--response-button-color)" stroke-width="2" fill="none" stroke-linecap="round">
            <animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="1s" repeatCount="indefinite"/>
          </path>
        `;
        button.disabled = true;
      } else {
        // Show speaker icon
        icon.innerHTML = `<path d="M11 5L6 9H2v6h4l5 4V5z" stroke="var(--response-button-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="var(--response-button-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="var(--response-button-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`;
        button.disabled = false;
        
        // Add blue fill only when playing
        if (audioState.isPlaying) {
          icon.innerHTML = `<path d="M11 5L6 9H2v6h4l5 4V5z" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`;
        }
      }
    });
  }

  getSearchIcon() {
    return `                
      <svg class="search-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 2C23 2.55229 22.5523 3 22 3C21.4477 3 21 2.55229 21 2C21 1.44771 21.4477 1 22 1C22.5523 1 23 1.44771 23 2Z" fill="${this.mainColor}"/>
      <path d="M12.6036 12.1092L14.4867 11.6526C15.1711 11.4867 15.1711 10.5133 14.4867 10.3474L12.6036 9.89075C12.3593 9.83151 12.1685 9.64073 12.1092 9.39639L11.6526 7.51328C11.497 6.87168 10.6318 6.83158 10.3876 7.39298C10.3713 7.43041 10.3578 7.47051 10.3474 7.51328L9.89075 9.39639C9.83521 9.62546 9.66406 9.80745 9.44155 9.87812C9.42672 9.88284 9.41166 9.88705 9.39639 9.89076L7.51328 10.3474C6.87168 10.503 6.83158 11.3682 7.39298 11.6124C7.43041 11.6287 7.47051 11.6422 7.51328 11.6526L9.39639 12.1092C9.61018 12.1611 9.78297 12.3136 9.86252 12.5146C9.87389 12.5434 9.88335 12.5731 9.89075 12.6036L10.3474 14.4867C10.5133 15.1711 11.4867 15.1711 11.6526 14.4867L12.1092 12.6036C12.1685 12.3593 12.3593 12.1685 12.6036 12.1092Z" fill="${this.mainColor}"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L21.2929 22.7071C21.6834 23.0976 22.3166 23.0976 22.7071 22.7071C23.0976 22.3166 23.0976 21.6834 22.7071 21.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2ZM3.8 11C3.8 14.9764 7.02355 18.2 11 18.2C14.9764 18.2 18.2 14.9764 18.2 11C18.2 7.02355 14.9764 3.8 11 3.8C7.02355 3.8 3.8 7.02355 3.8 11Z" fill="${this.mainColor}"/>
        <path d="M2 23C2.55228 23 3 22.5523 3 22C3 21.4477 2.55228 21 2 21C1.44772 21 1 21.4477 1 22C1 22.5523 1.44772 23 2 23Z" fill="${this.mainColor}"/>
        <defs>
          <linearGradient id="paint0_linear_6298_32913" x1="1.44395" y1="4.36735" x2="23.3381" y2="4.77345" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF1CF7"/>
          <stop offset="1" stop-color="#00F0FF"/>
        </linearGradient>
        <linearGradient id="paint1_linear_6298_32913" x1="1.44395" y1="4.36735" x2="23.3381" y2="4.77345" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF1CF7"/>
          <stop offset="1" stop-color="#00F0FF"/>
        </linearGradient>
        <linearGradient id="paint2_linear_6298_32913" x1="1.44395" y1="4.36735" x2="23.3381" y2="4.77345" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF1CF7"/>
          <stop offset="1" stop-color="#00F0FF"/>
        </linearGradient>
        <linearGradient id="paint3_linear_6298_32913" x1="1.44395" y1="4.36735" x2="23.3381" y2="4.77345" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF1CF7"/>
          <stop offset="1" stop-color="#00F0FF"/>
        </linearGradient>
      </defs>
    </svg>`;
  }

  getWidgetButtonSparkle() {
    return `
      <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.3642 1.20841C19.1622 1.65493 18.8042 2.01373 18.3568 2.21572L18.1555 2.30679C17.7636 2.48407 17.7636 3.04063 18.1555 3.21791L18.3568 3.30898C18.8034 3.51097 19.1622 3.8689 19.3642 4.31629L19.4552 4.51762C19.6325 4.90952 20.1891 4.90952 20.3663 4.51762L20.4574 4.31629C20.6594 3.86976 21.0173 3.51097 21.4647 3.30898L21.6661 3.21791C22.058 3.04063 22.058 2.48407 21.6661 2.30679L21.4647 2.21572C21.0182 2.01372 20.6594 1.65579 20.4574 1.20841L20.3663 1.00708C20.1891 0.615178 19.6325 0.615177 19.4552 1.00708L19.3642 1.20841Z" fill="white" fill-opacity="0.5"/>
      <path d="M2.21572 19.685C2.01372 20.1315 1.65579 20.4903 1.20841 20.6923L1.00708 20.7834C0.615177 20.9606 0.615178 21.5172 1.00708 21.6945L1.20841 21.7855C1.65493 21.9875 2.01373 22.3455 2.21572 22.7929L2.30679 22.9942C2.48407 23.3861 3.04063 23.3861 3.21791 22.9942L3.30898 22.7929C3.51097 22.3463 3.8689 21.9875 4.31629 21.7855L4.51762 21.6945C4.90952 21.5172 4.90952 20.9606 4.51762 20.7834L4.31629 20.6923C3.86976 20.4903 3.51097 20.1324 3.30898 19.685L3.21791 19.4836C3.04063 19.0917 2.48407 19.0917 2.30679 19.4836L2.21572 19.685Z" fill="white" fill-opacity="0.75"/>
      <path d="M10.8816 3.67497C11.0588 3.28308 11.6154 3.28308 11.7927 3.67497L13.1852 6.75308C13.8682 8.26361 15.0793 9.47195 16.5871 10.1551L19.6653 11.5476C20.0571 11.7249 20.0571 12.2814 19.6653 12.4587L16.5871 13.8512C15.0766 14.5342 13.8683 15.7453 13.1852 17.2532L11.7927 20.3313C11.6154 20.7232 11.0588 20.7232 10.8816 20.3313L9.48905 17.2532C8.806 15.7426 7.59492 14.5343 6.08706 13.8512L3.00895 12.4587C2.61707 12.2814 2.61707 11.7249 3.00895 11.5476L6.08706 10.1551C7.59759 9.47202 8.80593 8.26093 9.48905 6.75308L10.8816 3.67497Z" fill="white"/>
      </svg>`;
  }

  // Replace the Speed Highlight implementation with highlight.js
  processCodeBlocks(container) {
    const preElements = container.querySelectorAll("pre");

    preElements.forEach((pre, index) => {
      // Create wrapper for positioning copy button
      const wrapper = document.createElement("div");
      wrapper.style.position = "relative";
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      // Get the code element
      const codeElement = pre.querySelector("code");
      if (!codeElement) return;

      // Apply highlight.js
      hljs.highlightElement(codeElement);

      // Add copy button
      const buttonHtml = `
        <button 
          class="code-block-copy-button"
          aria-label="${this.t('copyCode')}">
          <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'>
            <rect x='9' y='9' width='13' height='13' rx='2' ry='2'></rect>
            <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
          </svg>
        </button>
      `;

      const buttonContainer = document.createElement("div");
      buttonContainer.innerHTML = buttonHtml;
      const button = buttonContainer.querySelector("button");
      wrapper.appendChild(button);

      // Add click event listener
      this.addCodeBlockCopyEventListener(button);
    });
  }

  addCodeBlockCopyEventListener(button) {
      // Add click event listener
      button.addEventListener('click', function() {
        // Add click effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => this.style.transform = 'scale(1)', 100);

        const codeText = this.parentElement.querySelector('code').textContent;
        navigator.clipboard.writeText(codeText).then(() => {
          // Change button state
          this.innerHTML = `
            <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'>
              <polyline points='20 6 9 17 4 12'></polyline>
            </svg>
          `;
          
          // Reset button after delay
          setTimeout(() => { 
            this.innerHTML = `
              <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'>
                <rect x='9' y='9' width='13' height='13' rx='2' ry='2'></rect>
                <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
              </svg>
            `;
          }, 1000);
        });
      });
  }

  processVoteButtons(container) {
    if (!container) return;

    const voteContainers = container.querySelectorAll('.vote-container');
    voteContainers.forEach((voteContainer) => {
      const upvoteButton = voteContainer.querySelector('.vote-button.upvote');
      const downvoteButton = voteContainer.querySelector('.vote-button.downvote');
      const feedbackForm = voteContainer.querySelector('.vote-feedback-form');
      
      if (!upvoteButton || !downvoteButton || !feedbackForm) return;
      
      // Skip if already processed (has event listeners)
      if (upvoteButton.hasAttribute('data-processed')) return;
      
      const textarea = feedbackForm.querySelector("textarea");
      const charCount = feedbackForm.querySelector(".feedback-char-count");
      const cancelBtn = feedbackForm.querySelector(".cancel");
      const submitBtn = feedbackForm.querySelector(".submit");
      
      if (!textarea || !charCount || !cancelBtn || !submitBtn) return;

      // Get question data from button attributes
      const slug = upvoteButton.getAttribute('data-slug');
      const bingeId = upvoteButton.getAttribute('data-binge-id');
      let userVote = upvoteButton.getAttribute('data-user-vote');
      
      // Skip vote containers without slug (not ready yet)
      if (!slug) {
        return;
      }

      // Vote state - stored in DOM attributes for persistence
      let selectedVote = userVote || null;
      let isSubmitting = false;

      // Character count handler
      textarea.addEventListener("input", () => {
        const count = textarea.value.length;
        charCount.textContent = this.t('charCount', { count: count });
        charCount.classList.toggle("over-limit", count > 200);
        submitBtn.disabled = count > 200;
      });


      // Update button states based on current state
      const updateButtonStates = () => {
        // Get current vote state from DOM
        selectedVote = upvoteButton.getAttribute('data-user-vote') || null;
        
        upvoteButton.classList.toggle("selected", selectedVote === 'upvote');
        downvoteButton.classList.toggle("selected", selectedVote === 'downvote');
        upvoteButton.disabled = isSubmitting || selectedVote !== null;
        downvoteButton.disabled = isSubmitting || selectedVote !== null;
      };

      // Update vote state in DOM
      const setVoteState = (voteType) => {
        upvoteButton.setAttribute('data-user-vote', voteType || '');
        downvoteButton.setAttribute('data-user-vote', voteType || '');
        selectedVote = voteType;
      };

      // Handle vote submission
      const handleVote = async (voteType) => {
        const currentVote = upvoteButton.getAttribute('data-user-vote');
        if (isSubmitting || currentVote) return;
        
        if (voteType === 'downvote') {
          setVoteState('downvote');
          updateButtonStates();
          feedbackForm.classList.add("show");
          textarea.focus();
          return;
        }

        isSubmitting = true;
        setVoteState(voteType);
        updateButtonStates();
        
        try {
          await this.recordVote(slug, bingeId, voteType, null);
        } catch (error) {
          console.error("Failed to record vote:", error);
          setVoteState(null);
        } finally {
          isSubmitting = false;
          updateButtonStates();
        }
      };

      // Event listeners
      upvoteButton.addEventListener("click", () => handleVote('upvote'));
      downvoteButton.addEventListener("click", () => handleVote('downvote'));
      
      cancelBtn.addEventListener("click", () => {
        setVoteState(null);
        feedbackForm.classList.remove("show");
        textarea.value = "";
        charCount.textContent = this.t('charCount', { count: 0 });
        charCount.classList.remove("over-limit");
        updateButtonStates();
      });

      submitBtn.addEventListener("click", async () => {
        if (isSubmitting || textarea.value.trim().length > 200) return;
        
        isSubmitting = true;
        updateButtonStates();
        
        try {
          const feedback = textarea.value.trim();
          await this.recordVote(slug, bingeId, 'downvote', feedback);
          feedbackForm.classList.remove("show");
          textarea.value = "";
          charCount.textContent = this.t('charCount', { count: 0 });
          charCount.classList.remove("over-limit");
        } catch (error) {
          console.error("Failed to record vote:", error);
          setVoteState(null);
          feedbackForm.classList.remove("show");
        } finally {
          isSubmitting = false;
          updateButtonStates();
        }
      });

      // Mark as processed and set initial state
      upvoteButton.setAttribute('data-processed', 'true');
      downvoteButton.setAttribute('data-processed', 'true');
      updateButtonStates();
    });
  }

  maximizeChat() {
    const chatWindow = this.shadow.getElementById("chatWindow");
    // Ensure one maximization at a time
    if (!chatWindow.classList.contains("maximized-state-changing")) {
      chatWindow.classList.add("maximized-state-changing");
      // Record the width before maximising to allow restoring back to it
      chatWindow.setAttribute("data-original-width", chatWindow.clientWidth);
      if (chatWindow.style.width) {
        chatWindow.style.removeProperty("width");
      }
      // Prevent drag resizing when maximized
      const resizeHandle = this.shadow.getElementById("chatResizeHandle");
      resizeHandle.classList.add("hidden");
      // Maximize
      chatWindow.classList.add("maximized");
      chatWindow.addEventListener("transitionend", () => {
        // Switch maximize/minimize buttons
        const maximizeButton = this.shadow.getElementById("maximizeChatButton");
        const minimizeButton = this.shadow.getElementById("minimizeChatButton");
        maximizeButton.classList.add("hidden");
        minimizeButton.classList.remove("hidden");
        // Cleanup
        chatWindow.classList.remove("maximized-state-changing");
      }, { once: true });
    }
  }

  minimizeChat() {
    const chatWindow = this.shadow.getElementById("chatWindow");
    // Ensure one minimization at a time
    if (!chatWindow.classList.contains("maximized-state-changing")) {
      chatWindow.classList.add("maximized-state-changing");
      // Restore the panel width from before maximizing.
      if (chatWindow.hasAttribute("data-original-width")) {
        chatWindow.style.width = chatWindow.getAttribute("data-original-width")+"px";
        chatWindow.removeAttribute("data-original-width");
      }
      chatWindow.addEventListener("transitionend", () => {
        // Cleanup
        this.removeMaximization();
      }, { once: true });
    }
  }

  removeMaximization() {
    // Switch maximize/minimize buttons
    const maximizeButton = this.shadow.getElementById("maximizeChatButton");
    const minimizeButton = this.shadow.getElementById("minimizeChatButton");
    maximizeButton.classList.remove("hidden");
    minimizeButton.classList.add("hidden");
    // Remove maximized state
    const chatWindow = this.shadow.getElementById("chatWindow");
    chatWindow.classList.remove("maximized");
    chatWindow.classList.remove("maximized-state-changing");
    // Enable drag resizing (if previously disabled)
    const resizeHandle = this.shadow.getElementById("chatResizeHandle");
    resizeHandle.classList.remove("hidden");
  }

  isMobile() {
    return window.innerWidth <= 768;
  }

  toggleChat() {
    const chatWindow = this.shadow.getElementById("chatWindow");
    const wrapper = document.getElementById("gurubase-page-content-wrapper");
    const chatButton = this.shadow.querySelector(".chat-button");
    const overlay = this.shadow.querySelector(".overlay");
    const isMobile = this.isMobile();

    if (chatWindow) {
        const isOpening = !chatWindow.classList.contains("open");
        
        if (!isOpening) {
            // Closing
            if (this.windowMode === 'floating') {
              // Handle floating window close
            chatWindow.classList.remove("open");
              if (overlay) {
                overlay.classList.remove("visible");
                // Remove click handler
                if (this.overlayClickHandler) {
                  overlay.removeEventListener('click', this.overlayClickHandler);
                  this.overlayClickHandler = null;
                }
                setTimeout(() => {
                  overlay.style.display = "none";
                }, 300);
              }
            document.body.classList.remove("widget-open");
            chatButton.style.display = 'flex';
            } else if (chatWindow.classList.contains("maximized")) {
              // The maximised chat has CSS transitions on the 'width' property
              chatWindow.style.minWidth = "0px";
              chatWindow.style.width = "0px";
              // Wait for transition to complete before hiding and cleaning up
              chatWindow.addEventListener('transitionend', () => {
                // Clean up styles used for transition
                chatWindow.style.removeProperty("width");
                chatWindow.style.removeProperty("min-width");
                chatWindow.classList.remove("open");
                document.body.classList.remove("widget-open");
                this.removeMaximization();
                chatWindow.style.display = "none";
              }, { once: true }); // Use once: true to automatically remove the listener
            } else {
              // A non-maximized chat has CSS transitions on the 'right' property
              chatWindow.classList.remove("open");
              document.body.classList.remove("widget-open");
            // Wait for transition to complete before hiding
            chatWindow.addEventListener('transitionend', () => {
                chatWindow.style.display = "none";
            }, { once: true }); // Use once: true to automatically remove the listener
            }

            chatButton.style.display = 'flex';
            
            if (!isMobile && chatWindow.style.width > "400px") {
                chatWindow.style.width = "400px";
            }

            if (isMobile) {
                // Re-enable page scrolling when closing on mobile
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.height = '';
                wrapper.style.overflow = '';
                wrapper.style.height = '';
                // Restore scroll position
                if (this.savedScrollY !== undefined) {
                    window.scrollTo(0, this.savedScrollY);
                    this.savedScrollY = undefined;
                }
            }
            wrapper.style.width = "100%";

            // Remove escape key listener
            document.removeEventListener("keydown", this.handleEscape);
        } else {
            // Opening
            if (this.windowMode === 'floating') {
              // Handle floating window open
              if (overlay) {
                overlay.style.display = "block";
                // Force reflow
                overlay.offsetHeight;
                overlay.classList.add("visible");
                
                // Create and store click handler
                if (!this.overlayClickHandler) {
                  this.overlayClickHandler = (e) => {
                    // Check if clicked on overlay itself (not on chat window)
                    if (e.target === overlay) {
                      this.toggleChat();
                    }
                  };
                }
                
                // Add click listener
                overlay.addEventListener('click', this.overlayClickHandler);
              }
              chatWindow.style.display = "flex";
              // Force reflow
              chatWindow.offsetHeight;
              chatWindow.classList.add("open");
              document.body.classList.add("widget-open");
              chatButton.style.display = 'none';

            } else {
            chatWindow.style.display = "flex";
            
            // Force a reflow to ensure the display: flex is applied
            chatWindow.offsetHeight;
            
            // Add open class to trigger transition
            chatWindow.classList.add("open");
            document.body.classList.add("widget-open");
            chatButton.style.display = 'none';
            }

            // Focus on the input field when opening floating window
            chatWindow.addEventListener("transitionend", () => {
              const questionInput = this.shadow.getElementById("questionInput");
              if (questionInput) {
                questionInput.focus();
              }
            }, { once: true });            

            // Scroll to the end of the current messages
            const messagesContainer = this.shadow.querySelector(".chat-messages");
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            // If we have messages ensure the clear button is visible
            this.resetClearButton();
            chatWindow.addEventListener("transitionend", () => {
              // Make sure the wrapper panel's width is applied
              this.setWrapperPanelWidth();
              // Focus on the input field when opening
              const questionInput = this.shadow.getElementById("questionInput");
              if (questionInput) {
                questionInput.focus();
              }
            }, { once: true });
            
            if (isMobile) {
                // Save current scroll position before fixing position
                this.savedScrollY = window.scrollY;
                // Prevent page scrolling when opening on mobile
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.height = '100%';
                document.body.style.top = `-${this.savedScrollY}px`;
                wrapper.style.overflow = 'hidden';
                wrapper.style.height = '100%';
            } else {
                this.setWrapperPanelWidth(400);
            }

            // Add escape key listener
            document.addEventListener("keydown", this.handleEscape);
        }
    }
  }

  handleEscape(event) {
    if (event.key === "Escape") {
      this.toggleChat();
    }
  }

  saveChatState() {
    // Store current state in session storage to avoid loss of state following refresh or full page navigation.
    if (sessionStorage) {
      // Save the current contents of the chat panel
      const emptyState = this.shadow.querySelector(".empty-state");
      if (emptyState) {
        sessionStorage.removeItem("chatState");
      } else {
        const messagesContainer = this.shadow.querySelector(".chat-messages");
        let messagesToSave = "";
        if (messagesContainer) {
          // Select only completed messages
          messagesToSave = Array.from(messagesContainer.querySelectorAll(".completed"))
            .map(el => el.outerHTML) // Get the messages' HTML content
            .join(""); // Convert array to string
        }
        if (messagesToSave.length > 0) {
          sessionStorage.setItem("chatState", messagesToSave);
        } else {
          sessionStorage.removeItem("chatState");
        }
      }
      // Save the chat panel's width to restore (if currently open and not maximized/maximizing)
      const chatWindow = this.shadow.getElementById("chatWindow");
      if (chatWindow.classList.contains("open") && !chatWindow.classList.contains("maximized") && !chatWindow.classList.contains("maximized-state-changing")) {
        sessionStorage.setItem("chatWidth", chatWindow.clientWidth);
      } else {
        sessionStorage.removeItem("chatWidth");
      }
      // Save additional state relevant to questions and binges
      if (this.previousQuestionSlug) {
        sessionStorage.setItem("previousQuestionSlug", this.previousQuestionSlug);
      } else {
        sessionStorage.removeItem("previousQuestionSlug");
      }
      if (this.currentBingeId) {
        sessionStorage.setItem("currentBingeId", this.currentBingeId);
      } else {
        sessionStorage.removeItem("currentBingeId");
      }
      if (!this.isFirstQuestion) {
        sessionStorage.setItem("isFirstQuestion", this.isFirstQuestion);
      } else {
        sessionStorage.removeItem("isFirstQuestion");
      }
    }
  }

  handleUnload() {
    this.saveChatState();
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.validateAndSubmit();
    } else if (event.key === "Escape") {
      this.toggleChat();
    }
  }

  validateAndSubmit() {
    const questionInput = this.shadow.getElementById("questionInput");
    const question = questionInput.value.trim();
    let errorElement = this.shadow.querySelector(".search-error");
    const footer = this.shadow.querySelector(".anteon-footer");
    const inputContainer = this.shadow.querySelector(".chat-input-container");

    // Create error element if it doesn't exist
    if (!errorElement) {
      errorElement = document.createElement("div");
      errorElement.className = "search-error";
      const searchWrapper = questionInput.parentElement;
      searchWrapper.appendChild(errorElement);
    }

    if (question.length < 10) {
      errorElement.style.display = "block";
      inputContainer.style.paddingBottom = "24px"; // Add padding to input container
      errorElement.textContent = "* " + this.t('validationError');
      return;
    }

    errorElement.style.display = "none";
    inputContainer.style.paddingBottom = "0"; // Reset input container padding
    this.submitQuestion();
  }

  getScoreColors(score) {
    if (score >= 90) return { bg: "#10B981", text: "#10B981" }; // emerald
    if (score >= 80) return { bg: "#22C55E", text: "#22C55E" }; // green
    if (score >= 70) return { bg: "#84CC16", text: "#84CC16" }; // lime
    if (score >= 60) return { bg: "#EAB308", text: "#EAB308" }; // yellow
    if (score >= 50) return { bg: "#FB923C", text: "#FB923C" }; // orange-400
    if (score >= 40) return { bg: "#F97316", text: "#F97316" }; // orange-500
    if (score >= 30) return { bg: "#F87171", text: "#F87171" }; // red-400
    if (score >= 20) return { bg: "#EF4444", text: "#EF4444" }; // red-500
    return { bg: "#DC2626", text: "#DC2626" }; // red-600
  }

  getBotLogo() {
    return `<div class="bot-logo">
        <div class="logo-container">
          ${this.getLogo(16, 16)}
          <div class="sparkle-badge" style="background-color: ${this.mainColor};">
            ${this.getSmallSparkle()}
          </div>
        </div>
      </div>`;
  }

  createTrustScore(score) {
    const trustScore = score ?? 0;
    const { bg, text } = this.getScoreColors(trustScore);
    const filledBars = Math.floor(trustScore / 10);

    return `
      <div class="trust-score-card">
        <div class="trust-score-header">
          <div class="trust-score-left">
            <span class="trust-score-label">${this.t('trustScore')}</span>
            <span class="trust-score-value" style="color: ${text}">%${trustScore}</span>
            <button class="trust-score-info" data-tooltip="${this.t('trustScoreTooltip')}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="18" x2="12" y2="10"></line>
                <line x1="12" y1="6" x2="12.01" y2="8"></line>
              </svg>
            </button>
          </div>
          <div class="trust-score-bars" role="meter" aria-valuenow="${trustScore}" aria-label="${this.t('trustScore')} ${trustScore}%">
            ${Array(10)
              .fill(0)
              .map(
                (_, i) => `
              <div class="trust-score-bar" style="background-color: ${i < filledBars ? bg : "#E5E7EB"}"></div>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }

  prepareRequestBody(
    question,
    previousQuestionSlug,
    bingeId,
    fetchExisting = false
  ) {
    return {
      question,
      parent_slug: previousQuestionSlug,
      binge_id: bingeId,
      fetch_existing: fetchExisting
    };
  }

  async submitQuestion() {
    const exampleQuestions = this.shadow.querySelector(".example-questions");
    if (exampleQuestions) {
      exampleQuestions.remove();
    }

    const questionInput = this.shadow.getElementById("questionInput");
    const question = questionInput.value.trim();

    if (!question) return;

    // Disable clear button at the start of submission
    const clearButton = this.shadow.querySelector(".clear-button");
    if (clearButton) {
      clearButton.disabled = true;
      clearButton.style.opacity = "0.5";
      clearButton.style.cursor = "not-allowed";
    }

    const submitButton = this.shadow.querySelector(".submit-button");
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.style.opacity = "0.5";
      submitButton.style.cursor = "not-allowed";
    }

    // Disable voice recording button during answer generation
    const voiceRecordContainer = this.shadow.querySelector(".voice-record-container");
    if (voiceRecordContainer) {
      voiceRecordContainer.style.opacity = "0.5";
      voiceRecordContainer.style.pointerEvents = "none";
      voiceRecordContainer.style.cursor = "not-allowed";
      
      // Also disable any buttons inside the container
      const voiceButtons = voiceRecordContainer.querySelectorAll("button");
      voiceButtons.forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = "not-allowed";
      });
    }

    // Remove empty state if it exists
    const emptyState = this.shadow.querySelector(".empty-state");
    if (emptyState) {
      emptyState.remove();
    }

    this.askQuestion(question);
    questionInput.value = "";

    // Trigger input event to update submit button color
    questionInput.dispatchEvent(new Event("input"));

    const messagesContainer = this.shadow.querySelector(".chat-messages");
    const loadingMessage = document.createElement("div");
    loadingMessage.className = "message";

    // Add check for first message and include divider if not first
    const isFirstMessage = !messagesContainer.querySelector(".message");
    loadingMessage.innerHTML = `
      ${!isFirstMessage ? '<div class="message-divider"></div>' : ""}
      ${this.getBotLogo()}
      <div class="message-content">
        <div class="loading-stage" id="context-stage">
          <div class="loading-dots">
            <div class="loader"></div>
          </div>
          <div class="stage-status-container">
            <svg class="success-tick hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <svg class="error-cross hidden" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          <span class="stage-text">${this.t('findingContexts')}</span>
        </div>
      </div>
    `;
    messagesContainer.appendChild(loadingMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Create a variable to track if first stage animation is complete
    let firstStageComplete = false;

    // Start first stage animation
    const firstStageTimer = setTimeout(() => {
      completeFirstStage();
    }, 2000);

    const completeFirstStage = () => {
      firstStageComplete = true;
      const contextStage = loadingMessage.querySelector("#context-stage");

      contextStage.querySelector(".loading-dots").classList.add("hidden");
      const contextStatusContainer = contextStage.querySelector(
        ".stage-status-container"
      );
      contextStatusContainer.classList.add("visible");
      contextStatusContainer
        .querySelector(".success-tick")
        .classList.remove("hidden");

      // Instead of showing a new stage, update the text of the existing stage
      const stageText = contextStage.querySelector(".stage-text");
      stageText.textContent = this.t('evaluatingSources');
      
      // Reset the loading animation
      contextStage.querySelector(".loading-dots").classList.remove("hidden");
      contextStatusContainer.classList.remove("visible");
      contextStatusContainer.querySelector(".success-tick").classList.add("hidden");

      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    // After first question is answered, create binge for future questions

    try {
      if (
        !this.isFirstQuestion &&
        (this.currentBingeId === null || this.currentBingeId === undefined)
      ) {
        try {
          const bingeResponse = await fetch(this.bingeUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: this.widgetId,
              origin: window.location.href
            },
            body: JSON.stringify({
              question,
              root_slug: this.previousQuestionSlug
            })
          });

          if (bingeResponse.ok) {
            const bingeData = await bingeResponse.json();
            this.currentBingeId = bingeData.id;
          } else {
            throw new Error("Error creating binge");
          }
        } catch (bingeError) {
          console.error("Error creating binge:", bingeError);
          throw new Error("Error creating binge");
        }
      }

      const response = await fetch(this.askUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.widgetId,
          origin: window.location.href
        },
        body: JSON.stringify(
          this.prepareRequestBody(
            question,
            this.previousQuestionSlug,
            this.currentBingeId
          )
        )
      });

      if (!response.ok) {
        let errorMessage = this.t('genericError');
        try {
          const errorData = await response.json();
          if (errorData.msg) {
            errorMessage = this.t('errorPrefix') + errorData.msg;
          } else if (errorData.error) {
            errorMessage = this.t('errorPrefix') + errorData.error;
          }
        } catch (error) {
          console.error("error", error);
        }
        throw new Error(errorMessage);
      }

      // Clear the first stage timer if it hasn't completed
      clearTimeout(firstStageTimer);

      // If first stage hasn't completed, complete it first
      if (!firstStageComplete) {
        completeFirstStage();
        // Wait for a brief moment to show the transition
        await new Promise((resolve) => setTimeout(resolve, 700));
      }

      const evaluationStage = loadingMessage.querySelector("#context-stage");

      const evaluationStatusContainer = evaluationStage.querySelector(
        ".stage-status-container"
      );
      evaluationStatusContainer.classList.add("visible");
      evaluationStatusContainer
        .querySelector(".success-tick")
        .classList.remove("hidden");

      // Show success tick for second stage
      evaluationStage.querySelector(".loading-dots").style.display = "none";
      evaluationStage.querySelector(".success-tick").classList.remove("hidden");

      // Always wait 700ms before showing response
      await new Promise((resolve) => setTimeout(resolve, 700));

      // Remove loading message and continue with response handling
      loadingMessage.remove();

      let finalResponse = "";
      // Create bot message container
      const botMessage = document.createElement("div");
      const isFirstMessage = !messagesContainer.querySelector(".message");
      botMessage.className = "message bot-message";
      botMessage.innerHTML = `
        ${!isFirstMessage ? '<div class="message-divider"></div>' : ""}
        <div class="message-wrapper">
          ${this.getBotLogo()}
          <div class="message-content">
            <div id="bot-response" class="markdown-content"></div>
          </div>
        </div>
      `;
      messagesContainer.appendChild(botMessage);
      const botResponseElement = botMessage.querySelector("#bot-response");

      // Handle the response
      let data;
      if (response.headers.get("content-type")?.includes("text/event-stream")) {
        this.isStreaming = true;
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let accumulatedResponse = "";
        let headerFound = false;
        let bufferedContent = "";
        const messagesContainer = this.shadow.querySelector(".chat-messages");
        let wasAtBottom = this.isUserAtBottom(messagesContainer); // Track initial scroll position

        // Add scroll event listener
        const boundScrollHandler = (e) => this.handleMessagesScroll(messagesContainer, e);
        messagesContainer.addEventListener('wheel', boundScrollHandler);

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            // After stream completes, try to fetch additional details
            try {
              const response = await fetch(this.askUrl, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: this.widgetId,
                  origin: window.location.href
                },
                body: JSON.stringify(
                  this.prepareRequestBody(
                    question,
                    this.previousQuestionSlug,
                    this.currentBingeId,
                    true
                  )
                )
              });

              // Only proceed if we got a valid response with additional details
              if (response.ok) {
                data = await response.json();

                // Add buttons right after the content and before references
                const questionData = data ? {
                  slug: data.slug,
                  bingeId: this.currentBingeId,
                  userVote: data.user_vote || null
                } : null;
                const buttons = this.createResponseButtons(data.content, questionData);
                botResponseElement.appendChild(buttons);

                // Add references if they exist
                if (data.references && data.references.length > 0) {
                  const referencesContainer = document.createElement("div");
                  referencesContainer.className = "references-container";
                  
                  // Create header safely without innerHTML
                  const header = document.createElement("header");
                  header.style.fontSize = "1rem";
                  header.style.fontWeight = "600";
                  header.textContent = this.t('sources');
                  referencesContainer.appendChild(header);

                  data.references.forEach((ref) => {
                    const referenceItem = document.createElement(ref.link ? 'a' : 'div');
                    if (ref.link) {
                      referenceItem.href = ref.link;
                      referenceItem.target = "_blank";
                    }
                    referenceItem.className = "reference-item";
                    referenceItem.style.cursor = ref.link ? "pointer" : "default";

                    const shouldShowTooltip = ref.question.length > 90;
                    const displayedQuestion = shouldShowTooltip
                      ? ref.question.slice(0, 90) + "..."
                      : ref.question;

                    // Create reference content safely to prevent XSS
                    const refIcon = document.createElement('img');
                    
                    // Sanitize icon URL and use safe default if sanitization fails
                    const sanitizedIconURL = sanitizeURL(ref.icon);
                    const defaultIconURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDJMMTMgNkwxNyA2TDEzIDJaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzIDZMMTMgMjJMNSAyMkw1IDJMMTMgMloiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K';
                    
                    refIcon.src = sanitizedIconURL || defaultIconURL;
                    refIcon.alt = 'Source icon';
                    refIcon.className = 'reference-icon';
                    
                    const refSpan = document.createElement('span');
                    refSpan.className = 'reference-question';
                    if (shouldShowTooltip) {
                      // Sanitize tooltip text to prevent XSS via attributes
                      refSpan.setAttribute('data-tooltip', sanitizeAttributeText(ref.question));
                    }
                    refSpan.textContent = displayedQuestion; // Use textContent to prevent XSS
                    
                    referenceItem.appendChild(refIcon);
                    referenceItem.appendChild(refSpan);

                    referencesContainer.appendChild(referenceItem);
                  });

                  botResponseElement.appendChild(referencesContainer);
                }

                // Add trust score if it exists
                if (data.trust_score !== undefined && data.trust_score !== null) {
                  const trustScoreHtml = this.createTrustScore(
                    data.trust_score
                  );
                  const trustScoreDiv = document.createElement("div");
                  trustScoreDiv.innerHTML = sanitizeHTML(trustScoreHtml);
                  botResponseElement.appendChild(trustScoreDiv);
                }

                finalResponse = data.content;

                //     // Add date updated if it exists
                //     if (data.date_updated) {
                //       const dateUpdated = document.createElement("div");
                //       dateUpdated.className = "date-updated";
                //       dateUpdated.innerHTML = `
                //   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                //     <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                //     <line x1="16" y1="2" x2="16" y2="6"></line>
                //     <line x1="8" y1="2" x2="8" y2="6"></line>
                //     <line x1="3" y1="10" x2="21" y2="10"></line>
                //   </svg>
                //   <span class="label">${this.t('lastModified')}</span>
                //   <span class="date">${data.date_updated}</span>
                // `;
                //       botResponseElement.appendChild(dateUpdated);
                //     }
              }
            } catch (error) {
              console.error("Error fetching additional details:", error);
            }
            this.isStreaming = false;
            break;
          }

          const chunk = decoder.decode(value);
          accumulatedResponse += chunk;

          // Check if we've found the end of the header
          if (!headerFound && accumulatedResponse.includes("\n")) {
            headerFound = true;
            // Strip everything before and including the first newline if it starts with #
            if (accumulatedResponse.startsWith("# ")) {
              bufferedContent = accumulatedResponse
                .split("\n")
                .slice(1)
                .join("\n")
                .trim();
            } else {
              bufferedContent = accumulatedResponse;
            }
          } else if (headerFound) {
            // If we've already found the header, just append new content
            bufferedContent += chunk;
          } // If header not yet found, keep accumulating but don't display

          // Only update display if we've found and stripped the header
          if (headerFound) {
            // Sanitize the markdown-parsed content to prevent XSS
            const parsedContent = marked.parse(bufferedContent);
            botResponseElement.innerHTML = sanitizeHTML(parsedContent);
            // Add target="_blank" to all links
            botResponseElement.querySelectorAll('a').forEach(link => {
              link.setAttribute('target', '_blank');
              link.setAttribute('rel', 'noopener noreferrer');
            });
            this.processCodeBlocks(botResponseElement);
            
            // Update wasAtBottom based on current position
            wasAtBottom = this.isUserAtBottom(messagesContainer);

            // Only auto-scroll if user was at bottom
            if (this.shouldAutoScroll) {
              messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
          }
        }

        // Remove scroll listener after streaming ends
        messagesContainer.removeEventListener('wheel', boundScrollHandler);
      } else {
        // Unused if streaming
        data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || this.t('genericError')
          );
          botResponseElement.textContent = data.error || this.t('genericError');
        } else {
          const messageContent = document.createElement("div");

          // Add markdown content first
          const markdownContent = document.createElement("div");
          markdownContent.className = "markdown-content";

          // Strip the h1 header if present
          let displayContent = data.content;
          if (displayContent.startsWith("# ")) {
            const headerEndIndex = displayContent.indexOf("\n");
            if (headerEndIndex !== -1) {
              displayContent = displayContent.slice(headerEndIndex + 2);
              displayContent = displayContent.trim();
            }
          }

          // Sanitize the markdown-parsed content to prevent XSS
          const parsedContent = marked.parse(displayContent);
          markdownContent.innerHTML = sanitizeHTML(parsedContent);
          // Add target="_blank" to all links
          markdownContent.querySelectorAll('a').forEach(link => {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
          });
          this.processCodeBlocks(markdownContent);
          messageContent.appendChild(markdownContent);

          // Add buttons right after the content and before references
          const questionData = data ? {
            slug: data.slug,
            bingeId: this.currentBingeId,
            userVote: data.user_vote || null
          } : null;
          const buttons = this.createResponseButtons(data.content, questionData);
          messageContent.appendChild(buttons);

          // Add references if they exist
          if (data.references && data.references.length > 0) {
            const referencesContainer = document.createElement("div");
            referencesContainer.className = "references-container";

            // Create header safely without innerHTML
            const header = document.createElement("header");
            header.style.fontSize = "1rem";
            header.style.fontWeight = "600";
            header.textContent = this.t('sources');
            referencesContainer.appendChild(header);

            data.references.forEach((ref) => {
              const referenceItem = document.createElement(ref.link ? 'a' : 'div');
              if (ref.link) {
                referenceItem.href = ref.link;
                referenceItem.target = "_blank";
              }
              referenceItem.className = "reference-item";
              referenceItem.style.cursor = ref.link ? "pointer" : "default";

              const shouldShowTooltip = ref.question.length > 90;
              const displayedQuestion = shouldShowTooltip
                ? ref.question.slice(0, 90) + "..."
                : ref.question;

              // Create reference content safely to prevent XSS
              const refIcon = document.createElement('img');
              
              // Sanitize icon URL and use safe default if sanitization fails
              const sanitizedIconURL = sanitizeURL(ref.icon);
              const defaultIconURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzIDJMMTMgNkwxNyA2TDEzIDJaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTEzIDZMMTMgMjJMNSAyMkw1IDJMMTMgMloiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K';
              
              refIcon.src = sanitizedIconURL || defaultIconURL;
              refIcon.alt = 'Source icon';
              refIcon.className = 'reference-icon';
              
              const refSpan = document.createElement('span');
              refSpan.className = 'reference-question';
              if (shouldShowTooltip) {
                // Sanitize tooltip text to prevent XSS via attributes
                refSpan.setAttribute('data-tooltip', sanitizeAttributeText(ref.question));
              }
              refSpan.textContent = displayedQuestion; // Use textContent to prevent XSS
              
              referenceItem.appendChild(refIcon);
              referenceItem.appendChild(refSpan);

              referencesContainer.appendChild(referenceItem);
            });

            messageContent.appendChild(referencesContainer);
          }

          // Add trust score last if it exists
          if (data.trust_score !== undefined && data.trust_score !== null) {
            const trustScoreDiv = document.createElement("div");
            trustScoreDiv.innerHTML = sanitizeHTML(this.createTrustScore(data.trust_score));
            messageContent.appendChild(trustScoreDiv);
          }

          finalResponse = data.content;

          //     // Add date updated section
          //     if (data.date_updated) {
          //       const dateUpdated = document.createElement("div");
          //       dateUpdated.className = "date-updated";
                          //       dateUpdated.innerHTML = `
                //   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                //     <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                //     <line x1="16" y1="2" x2="16" y2="6"></line>
                //     <line x1="8" y1="2" x2="8" y2="6"></line>
                //     <line x1="3" y1="10" x2="21" y2="10"></line>
                //   </svg>
                //   <span class="label">${this.t('lastModified')}</span>
                //   <span class="date">${data.date_updated}</span>
                // `;
          //       messageContent.appendChild(dateUpdated);
          //     }

          botResponseElement.appendChild(messageContent);
        }
      }

      // Fetch and display follow-up examples
      if (data && data.slug) {
        const followUpExamples = await this.fetchFollowUpExamples(
          this.currentBingeId,
          data.slug,
          question
        );

        if (followUpExamples.length > 0) {
          const messagesContainer = this.shadow.querySelector(".chat-messages");
          const exampleQuestionsContainer = this.createExampleQuestions(followUpExamples);

          if (exampleQuestionsContainer) {
            // Remove any existing example questions
            const existingExamples = messagesContainer.querySelector(".example-questions");
            if (existingExamples) {
              existingExamples.remove();
            }
            // Append example questions to messages container
            messagesContainer.appendChild(exampleQuestionsContainer);
            // Scroll to show the new examples
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
          }
        }
      }

      messagesContainer.scrollTop = messagesContainer.scrollHeight;
      this.isFirstQuestion = false;

      // Store the slug from the response for the next question
      if (data?.slug) {
        this.previousQuestionSlug = data.slug;
      }
    } catch (error) {
      console.error("Error:", error, "Error message:", error.message);
      clearTimeout(firstStageTimer);

      const failedStage = loadingMessage.querySelector("#context-stage");
      const failedStatusContainer = failedStage.querySelector(".stage-status-container");
      
      failedStage.querySelector(".loading-dots").classList.add("hidden");
      failedStatusContainer.classList.add("visible");
      failedStatusContainer.querySelector(".success-tick").classList.add("hidden");
      failedStatusContainer.querySelector(".error-cross").classList.remove("hidden");

      // Update the text to show the error stage
      const stageText = failedStage.querySelector(".stage-text");
      if (firstStageComplete) {
        stageText.textContent = this.t('errorEvaluatingSources');
      } else {
        stageText.textContent = this.t('errorFindingContexts');
      }

      await new Promise((resolve) => setTimeout(resolve, 700));

      loadingMessage.remove();

      const errorMessage = document.createElement("div");
      errorMessage.className = "message";
      errorMessage.innerHTML = `
      ${this.getBotLogo()}
      </div>
      ${!isFirstMessage ? '<div class="message-divider"></div>' : ""}
      <div class="message-content">
        <div class="error-container" style="display: flex; align-items: center; gap: 12px;">
          <div style="display: flex; align-items: center; justify-content: center; width: 24px; height: 24px;">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.31171 7.76149C6.23007 2.58716 7.68925 0 10 0C12.3107 0 13.7699 2.58716 16.6883 7.76149L17.0519 8.40626C19.4771 12.7061 20.6897 14.856 19.5937 16.428C18.4978 18 15.7864 18 10.3637 18H9.63634C4.21356 18 1.50217 18 0.406257 16.428C-0.689658 14.856 0.522912 12.7061 2.94805 8.40627L3.31171 7.76149ZM10 4.25C10.4142 4.25 10.75 4.58579 10.75 5V10C10.75 10.4142 10.4142 10.75 10 10.75C9.58579 10.75 9.25 10.4142 9.25 10V5C9.25 4.58579 9.58579 4.25 10 4.25ZM10 14C10.5523 14 11 13.5523 11 13C11 12.4477 10.5523 12 10 12C9.44771 12 9 12.4477 9 13C9 13.5523 9.44771 14 10 14Z" fill="#F8AA1C"/>
            </svg>
          </div>
          <p style="margin: 0;">${error.message}</p>
        </div>
      </div>
      `;
      messagesContainer.appendChild(errorMessage);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    finally {
      // Re-enable clear button when streaming is complete
      const clearButton = this.shadow.querySelector(".clear-button");
      if (clearButton) {
        clearButton.disabled = false;
        clearButton.style.opacity = "1";
        clearButton.style.cursor = "pointer";
      }

      const submitButton = this.shadow.querySelector(".submit-button");
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.style.opacity = "1";
        submitButton.style.cursor = "pointer";
      }

      // Re-enable voice recording button when answer generation is complete
      const voiceRecordContainer = this.shadow.querySelector(".voice-record-container");
      if (voiceRecordContainer) {
        voiceRecordContainer.style.opacity = "1";
        voiceRecordContainer.style.pointerEvents = "auto";
        voiceRecordContainer.style.cursor = "auto";
        
        // Also re-enable any buttons inside the container
        const voiceButtons = voiceRecordContainer.querySelectorAll("button");
        voiceButtons.forEach(btn => {
          btn.disabled = false;
          btn.style.cursor = "pointer";
        });
      }
      // Mark the messages produced by this question/answer as completed.
      this.markMessagesAsCompleted();
    }
    this.resetClearButton();
  }

  markMessagesAsCompleted() {
    // Set all direct children of the chat message panel as completed to flag them as being eligible for state saving
    this.shadow.querySelectorAll(".chat-messages > :not(.completed)").forEach((messageBlock) => {
      messageBlock.classList.add("completed");
    });
  }

  resetClearButton() {
    // Modify the empty state check
    const clearButton = this.shadow.querySelector(".clear-button");
    if (clearButton) {
      const messagesContainer = this.shadow.querySelector(".chat-messages");
      if (messagesContainer) {
    if (!messagesContainer.querySelector(".empty-state")) {
      clearButton.style.display = "flex";
    } else {
      clearButton.style.display = "none";
        }
      }
    }
  }

  getGurubaseLogo() {
    if (this.lightMode) {
      return `<svg width="55" height="10" viewBox="0 0 55 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.012 4.656V5.232C9.012 6.384 8.632 7.328 7.872 8.064C7.112 8.792 6.12 9.156 4.896 9.156C3.6 9.156 2.528 8.736 1.68 7.896C0.84 7.056 0.42 6.024 0.42 4.8C0.42 3.584 0.84 2.556 1.68 1.716C2.528 0.867999 3.576 0.443999 4.824 0.443999C5.608 0.443999 6.324 0.623999 6.972 0.983999C7.62 1.344 8.124 1.828 8.484 2.436L7.296 3.12C7.072 2.72 6.74 2.4 6.3 2.16C5.86 1.912 5.368 1.788 4.824 1.788C3.944 1.788 3.22 2.076 2.652 2.652C2.084 3.228 1.8 3.948 1.8 4.812C1.8 5.676 2.084 6.392 2.652 6.96C3.228 7.528 3.98 7.812 4.908 7.812C5.652 7.812 6.256 7.64 6.72 7.296C7.192 6.944 7.492 6.476 7.62 5.892H4.812V4.656H9.012ZM14.3039 3H15.5999V9H14.3039V8.232C13.9119 8.848 13.2919 9.156 12.4439 9.156C11.7559 9.156 11.1999 8.936 10.7759 8.496C10.3519 8.056 10.1399 7.452 10.1399 6.684V3H11.4359V6.552C11.4359 7 11.5559 7.344 11.7959 7.584C12.0359 7.824 12.3639 7.944 12.7799 7.944C13.2359 7.944 13.6039 7.804 13.8839 7.524C14.1639 7.236 14.3039 6.8 14.3039 6.216V3ZM18.4114 4.008C18.7394 3.264 19.3554 2.892 20.2594 2.892V4.296C19.7634 4.264 19.3314 4.384 18.9634 4.656C18.5954 4.92 18.4114 5.36 18.4114 5.976V9H17.1154V3H18.4114V4.008ZM25.2609 3H26.5569V9H25.2609V8.232C24.8689 8.848 24.2489 9.156 23.4009 9.156C22.7129 9.156 22.1569 8.936 21.7329 8.496C21.3089 8.056 21.0969 7.452 21.0969 6.684V3H22.3929V6.552C22.3929 7 22.5129 7.344 22.7529 7.584C22.9929 7.824 23.3209 7.944 23.7369 7.944C24.1929 7.944 24.5609 7.804 24.8409 7.524C25.1209 7.236 25.2609 6.8 25.2609 6.216V3Z" fill="#FF0000"/>
<path d="M31.4684 2.844C32.2924 2.844 32.9964 3.148 33.5804 3.756C34.1644 4.364 34.4564 5.112 34.4564 6C34.4564 6.88 34.1644 7.628 33.5804 8.244C32.9964 8.852 32.2924 9.156 31.4684 9.156C30.5564 9.156 29.8564 8.816 29.3684 8.136V9H28.0724V0.599999H29.3684V3.852C29.8564 3.18 30.5564 2.844 31.4684 2.844ZM29.9084 7.38C30.2684 7.74 30.7204 7.92 31.2644 7.92C31.8084 7.92 32.2604 7.74 32.6204 7.38C32.9804 7.012 33.1604 6.552 33.1604 6C33.1604 5.448 32.9804 4.992 32.6204 4.632C32.2604 4.264 31.8084 4.08 31.2644 4.08C30.7204 4.08 30.2684 4.264 29.9084 4.632C29.5484 4.992 29.3684 5.448 29.3684 6C29.3684 6.552 29.5484 7.012 29.9084 7.38ZM40.383 3H41.679V9H40.383V8.136C39.895 8.816 39.195 9.156 38.283 9.156C37.459 9.156 36.755 8.852 36.171 8.244C35.587 7.628 35.295 6.88 35.295 6C35.295 5.112 35.587 4.364 36.171 3.756C36.755 3.148 37.459 2.844 38.283 2.844C39.195 2.844 39.895 3.18 40.383 3.852V3ZM37.131 7.38C37.491 7.74 37.943 7.92 38.487 7.92C39.031 7.92 39.483 7.74 39.843 7.38C40.203 7.012 40.383 6.552 40.383 6C40.383 5.448 40.203 4.992 39.843 4.632C39.483 4.264 39.031 4.08 38.487 4.08C37.943 4.08 37.491 4.264 37.131 4.632C36.771 4.992 36.591 5.448 36.591 6C36.591 6.552 36.771 7.012 37.131 7.38ZM44.3184 4.656C44.3184 4.856 44.4264 5.016 44.6424 5.136C44.8664 5.248 45.1344 5.348 45.4464 5.436C45.7664 5.516 46.0864 5.612 46.4064 5.724C46.7264 5.836 46.9944 6.028 47.2104 6.3C47.4344 6.564 47.5464 6.9 47.5464 7.308C47.5464 7.884 47.3224 8.336 46.8744 8.664C46.4344 8.992 45.8784 9.156 45.2064 9.156C44.6144 9.156 44.1064 9.032 43.6824 8.784C43.2584 8.536 42.9504 8.192 42.7584 7.752L43.8744 7.104C44.0824 7.68 44.5264 7.968 45.2064 7.968C45.8864 7.968 46.2264 7.744 46.2264 7.296C46.2264 7.104 46.1144 6.948 45.8904 6.828C45.6744 6.708 45.4064 6.608 45.0864 6.528C44.7744 6.44 44.4584 6.34 44.1384 6.228C43.8184 6.116 43.5464 5.932 43.3224 5.676C43.1064 5.412 42.9984 5.08 42.9984 4.68C42.9984 4.128 43.2064 3.684 43.6224 3.348C44.0464 3.012 44.5704 2.844 45.1944 2.844C45.6904 2.844 46.1304 2.956 46.5144 3.18C46.9064 3.396 47.2064 3.7 47.4144 4.092L46.3224 4.704C46.1144 4.248 45.7384 4.02 45.1944 4.02C44.9464 4.02 44.7384 4.076 44.5704 4.188C44.4024 4.292 44.3184 4.448 44.3184 4.656ZM49.5533 6.552C49.6493 7.008 49.8693 7.36 50.2133 7.608C50.5573 7.848 50.9773 7.968 51.4733 7.968C52.1613 7.968 52.6773 7.72 53.0213 7.224L54.0893 7.848C53.4973 8.72 52.6213 9.156 51.4613 9.156C50.4853 9.156 49.6973 8.86 49.0973 8.268C48.4973 7.668 48.1973 6.912 48.1973 6C48.1973 5.104 48.4933 4.356 49.0853 3.756C49.6773 3.148 50.4373 2.844 51.3653 2.844C52.2453 2.844 52.9653 3.152 53.5253 3.768C54.0933 4.384 54.3773 5.132 54.3773 6.012C54.3773 6.148 54.3613 6.328 54.3293 6.552H49.5533ZM49.5413 5.496H53.0693C52.9813 5.008 52.7773 4.64 52.4573 4.392C52.1453 4.144 51.7773 4.02 51.3533 4.02C50.8733 4.02 50.4733 4.152 50.1533 4.416C49.8333 4.68 49.6293 5.04 49.5413 5.496Z" fill="#1B242D"/>
</svg>
`;
    } else {
      return `<svg width="55" height="10" viewBox="0 0 55 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.012 4.656V5.232C9.012 6.384 8.632 7.328 7.872 8.064C7.112 8.792 6.12 9.156 4.896 9.156C3.6 9.156 2.528 8.736 1.68 7.896C0.84 7.056 0.42 6.024 0.42 4.8C0.42 3.584 0.84 2.556 1.68 1.716C2.528 0.867999 3.576 0.443999 4.824 0.443999C5.608 0.443999 6.324 0.623999 6.972 0.983999C7.62 1.344 8.124 1.828 8.484 2.436L7.296 3.12C7.072 2.72 6.74 2.4 6.3 2.16C5.86 1.912 5.368 1.788 4.824 1.788C3.944 1.788 3.22 2.076 2.652 2.652C2.084 3.228 1.8 3.948 1.8 4.812C1.8 5.676 2.084 6.392 2.652 6.96C3.228 7.528 3.98 7.812 4.908 7.812C5.652 7.812 6.256 7.64 6.72 7.296C7.192 6.944 7.492 6.476 7.62 5.892H4.812V4.656H9.012ZM14.3039 3H15.5999V9H14.3039V8.232C13.9119 8.848 13.2919 9.156 12.4439 9.156C11.7559 9.156 11.1999 8.936 10.7759 8.496C10.3519 8.056 10.1399 7.452 10.1399 6.684V3H11.4359V6.552C11.4359 7 11.5559 7.344 11.7959 7.584C12.0359 7.824 12.3639 7.944 12.7799 7.944C13.2359 7.944 13.6039 7.804 13.8839 7.524C14.1639 7.236 14.3039 6.8 14.3039 6.216V3ZM18.4114 4.008C18.7394 3.264 19.3554 2.892 20.2594 2.892V4.296C19.7634 4.264 19.3314 4.384 18.9634 4.656C18.5954 4.92 18.4114 5.36 18.4114 5.976V9H17.1154V3H18.4114V4.008ZM25.2609 3H26.5569V9H25.2609V8.232C24.8689 8.848 24.2489 9.156 23.4009 9.156C22.7129 9.156 22.1569 8.936 21.7329 8.496C21.3089 8.056 21.0969 7.452 21.0969 6.684V3H22.3929V6.552C22.3929 7 22.5129 7.344 22.7529 7.584C22.9929 7.824 23.3209 7.944 23.7369 7.944C24.1929 7.944 24.5609 7.804 24.8409 7.524C25.1209 7.236 25.2609 6.8 25.2609 6.216V3Z" fill="#FF0000"/>
<path d="M31.4684 2.844C32.2924 2.844 32.9964 3.148 33.5804 3.756C34.1644 4.364 34.4564 5.112 34.4564 6C34.4564 6.88 34.1644 7.628 33.5804 8.244C32.9964 8.852 32.2924 9.156 31.4684 9.156C30.5564 9.156 29.8564 8.816 29.3684 8.136V9H28.0724V0.599999H29.3684V3.852C29.8564 3.18 30.5564 2.844 31.4684 2.844ZM29.9084 7.38C30.2684 7.74 30.7204 7.92 31.2644 7.92C31.8084 7.92 32.2604 7.74 32.6204 7.38C32.9804 7.012 33.1604 6.552 33.1604 6C33.1604 5.448 32.9804 4.992 32.6204 4.632C32.2604 4.264 31.8084 4.08 31.2644 4.08C30.7204 4.08 30.2684 4.264 29.9084 4.632C29.5484 4.992 29.3684 5.448 29.3684 6C29.3684 6.552 29.5484 7.012 29.9084 7.38ZM40.383 3H41.679V9H40.383V8.136C39.895 8.816 39.195 9.156 38.283 9.156C37.459 9.156 36.755 8.852 36.171 8.244C35.587 7.628 35.295 6.88 35.295 6C35.295 5.112 35.587 4.364 36.171 3.756C36.755 3.148 37.459 2.844 38.283 2.844C39.195 2.844 39.895 3.18 40.383 3.852V3ZM37.131 7.38C37.491 7.74 37.943 7.92 38.487 7.92C39.031 7.92 39.483 7.74 39.843 7.38C40.203 7.012 40.383 6.552 40.383 6C40.383 5.448 40.203 4.992 39.843 4.632C39.483 4.264 39.031 4.08 38.487 4.08C37.943 4.08 37.491 4.264 37.131 4.632C36.771 4.992 36.591 5.448 36.591 6C36.591 6.552 36.771 7.012 37.131 7.38ZM44.3184 4.656C44.3184 4.856 44.4264 5.016 44.6424 5.136C44.8664 5.248 45.1344 5.348 45.4464 5.436C45.7664 5.516 46.0864 5.612 46.4064 5.724C46.7264 5.836 46.9944 6.028 47.2104 6.3C47.4344 6.564 47.5464 6.9 47.5464 7.308C47.5464 7.884 47.3224 8.336 46.8744 8.664C46.4344 8.992 45.8784 9.156 45.2064 9.156C44.6144 9.156 44.1064 9.032 43.6824 8.784C43.2584 8.536 42.9504 8.192 42.7584 7.752L43.8744 7.104C44.0824 7.68 44.5264 7.968 45.2064 7.968C45.8864 7.968 46.2264 7.744 46.2264 7.296C46.2264 7.104 46.1144 6.948 45.8904 6.828C45.6744 6.708 45.4064 6.608 45.0864 6.528C44.7744 6.44 44.4584 6.34 44.1384 6.228C43.8184 6.116 43.5464 5.932 43.3224 5.676C43.1064 5.412 42.9984 5.08 42.9984 4.68C42.9984 4.128 43.2064 3.684 43.6224 3.348C44.0464 3.012 44.5704 2.844 45.1944 2.844C45.6904 2.844 46.1304 2.956 46.5144 3.18C46.9064 3.396 47.2064 3.7 47.4144 4.092L46.3224 4.704C46.1144 4.248 45.7384 4.02 45.1944 4.02C44.9464 4.02 44.7384 4.076 44.5704 4.188C44.4024 4.292 44.3184 4.448 44.3184 4.656ZM49.5533 6.552C49.6493 7.008 49.8693 7.36 50.2133 7.608C50.5573 7.848 50.9773 7.968 51.4733 7.968C52.1613 7.968 52.6773 7.72 53.0213 7.224L54.0893 7.848C53.4973 8.72 52.6213 9.156 51.4613 9.156C50.4853 9.156 49.6973 8.86 49.0973 8.268C48.4973 7.668 48.1973 6.912 48.1973 6C48.1973 5.104 48.4933 4.356 49.0853 3.756C49.6773 3.148 50.4373 2.844 51.3653 2.844C52.2453 2.844 52.9653 3.152 53.5253 3.768C54.0933 4.384 54.3773 5.132 54.3773 6.012C54.3773 6.148 54.3613 6.328 54.3293 6.552H49.5533ZM49.5413 5.496H53.0693C52.9813 5.008 52.7773 4.64 52.4573 4.392C52.1453 4.144 51.7773 4.02 51.3533 4.02C50.8733 4.02 50.4733 4.152 50.1533 4.416C49.8333 4.68 49.6293 5.04 49.5413 5.496Z" fill="white"/>
</svg>`;
    }
  }

  // Modify existing askQuestion function to only handle display
  askQuestion(question) {
    const messagesContainer = this.shadow.querySelector(".chat-messages");
    const isFirstMessage = !messagesContainer.querySelector(".message");

    // Add user message
    const userMessage = document.createElement("div");
    userMessage.className = `message user-message${isFirstMessage ? " first-message" : ""}`;
    
    // Create the structure without innerHTML to avoid HTML rendering
    if (!isFirstMessage) {
      const divider = document.createElement("div");
      divider.className = "message-divider";
      userMessage.appendChild(divider);
    }
    
    const messageContent = document.createElement("div");
    messageContent.className = "message-content";
    messageContent.style.width = "100%";
    
    const userText = document.createElement("p");
    userText.className = "user-text";
    userText.textContent = question; // Use textContent to prevent HTML rendering
    
    messageContent.appendChild(userText);
    userMessage.appendChild(messageContent);
    
    messagesContainer.appendChild(userMessage);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  injectHTML() {
    const widgetHTML = `
      <div class="chat-widget">
        <button class="chat-button" 
          ${this.tooltipText ? `data-tooltip="${this.tooltipText}" data-tooltip-side="${this.tooltipSide || 'left'}"` : ''}
          style="bottom: ${this.margins.bottom}; right: ${this.margins.right}; background-color: ${this.mainColor};">
          <span class="sparkle">${this.getWidgetButtonSparkle()}</span>
          ${this.buttonText}
        </button>

        ${this.windowMode === 'floating' ? '<div class="overlay"></div>' : ''}
        
        <div id="chatWindow" class="chat-window ${this.windowMode === 'floating' ? 'floating' : ''}">
          ${this.windowMode !== 'floating' ? '<div id="chatResizeHandle" class="resize-handle"></div>' : ''}
          <div class="anteon-header">
            <div class="logo" style="display: flex; align-items: center; gap: 8px; width: 100%; text-overflow: ellipsis;">
              ${this.getLogo()}
              <span style="min-width: 0; overflow: hidden; text-overflow: ellipsis;">
                ${this.t('askGuru', { name: this.name })}
              </span>
            </div>
            <button 
              id="maximizeChatButton"
              class="header-button"
              aria-label="${this.t('maximizeChat')}">
              <svg height="20" width="20" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M16 4l4 0l0 4"></path><path d="M14 10l6 -6"></path><path d="M8 20l-4 0l0 -4"></path><path d="M4 20l6 -6"></path><path d="M16 20l4 0l0 -4"></path><path d="M14 14l6 6"></path><path d="M8 4l-4 0l0 4"></path><path d="M4 4l6 6"></path></svg>              
            </button>
            <button 
              id="minimizeChatButton"
              class="header-button hidden"
              aria-label="${this.t('minimizeChat')}">
              <svg height="20" width="20" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M5 9l4 0l0 -4"></path><path d="M3 3l6 6"></path><path d="M5 15l4 0l0 4"></path><path d="M3 21l6 -6"></path><path d="M19 9l-4 0l0 -4"></path><path d="M15 9l6 -6"></path><path d="M19 15l-4 0l0 4"></path><path d="M15 15l6 6"></path></svg>              
            </button>
            <button 
              id="closeChatButton"
              class="header-button"
              aria-label="${this.t('closeChat')}">
              <svg height="24" width="24" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path></svg>
            </button>
          </div>

          <div class="chat-messages">
            ${this.getInitialState()}
          </div>

          <div class="anteon-footer">
            <div class="chat-input-container">
              <div class="input-row">
                <div class="search-wrapper">
                  ${this.getSearchIcon()}
                  <input
                    type="text"
                    id="questionInput"
                    class="search-bar"
                    placeholder="${this.t('askAnything')}"
                    aria-label="${this.t('askQuestion')}"
                  />
                  ${this.getVoiceRecordButton()}
                  ${this.getSubmitButton()}
                </div>
              </div>
            </div>
            <div class="footer-info">
              <a href="https://gurubase.io" target="_blank" class="powered-by">
                <div class="anteon-powered">${this.t('poweredBy')} ${this.getGurubaseLogo()}</div>
              </a>
              <button 
                class="clear-button" 
                aria-label="${this.t('clearHistory')}"
                style="display: none;"
              >
                ${this.t('clear')}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Create a container for the widget and inject it into the body
    const widgetContainer = document.createElement("div");
    widgetContainer.innerHTML = widgetHTML;
    this.shadow.appendChild(widgetContainer);

    // Add event listeners for buttons that previously had inline onclick
    const maximizeButton = this.shadow.querySelector('#maximizeChatButton');
    if (maximizeButton) {
      maximizeButton.addEventListener('click', () => this.maximizeChat());
      if (this.isMobile() || this.windowMode === 'floating') {
        // No maximization on small screens or floating mode
        maximizeButton.classList.add('hidden');
      }
    }

    const minimizeButton = this.shadow.querySelector('#minimizeChatButton');
    if (minimizeButton) {
      minimizeButton.addEventListener('click', () => this.minimizeChat());
    }

    const closeButton = this.shadow.querySelector('#closeChatButton');
    if (closeButton) {
      closeButton.addEventListener('click', () => this.toggleChat());
    }

    const clearButton = this.shadow.querySelector('.clear-button');
    if (clearButton) {
      clearButton.addEventListener('click', () => this.handleClearHistory());
    }

    // Add event listener to prevent scroll propagation
    const chatMessages = this.shadow.querySelector('.chat-messages');
    
    // Prevent scroll propagation for both mouse wheel and touch events
    chatMessages.addEventListener('wheel', (event) => {
      const { scrollTop, scrollHeight, clientHeight } = chatMessages;
      const threshold = 1;
      
      if (
        (scrollTop <= 0 && event.deltaY < 0) || 
        (Math.abs(scrollHeight - scrollTop - clientHeight) <= threshold && event.deltaY > 0)
      ) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, { passive: false });

    // Add touch event handlers for mobile
    chatMessages.addEventListener('touchstart', (event) => {
      this.touchStartY = event.touches[0].pageY;
      this.scrollTop = chatMessages.scrollTop;
    }, { passive: false });

    chatMessages.addEventListener('touchmove', (event) => {
      const touchY = event.touches[0].pageY;
      const touchDelta = this.touchStartY - touchY;
      const { scrollTop, scrollHeight, clientHeight } = chatMessages;
      
      // Prevent scrolling when at the boundaries
      if (
        (scrollTop <= 0 && touchDelta < 0) || // At top and scrolling up
        (Math.abs(scrollHeight - scrollTop - clientHeight) <= 1 && touchDelta > 0) // At bottom and scrolling down
      ) {
        event.preventDefault();
        event.stopPropagation();
      }
    }, { passive: false });
  }

  async init() {
    // Bind methods first
    this.toggleChat = this.toggleChat.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.askQuestion = this.askQuestion.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.handleUnload = this.handleUnload.bind(this);

    await this.fetchDefaultValues();

    // Set primary color CSS variable
    document.documentElement.style.setProperty("--primary", this.mainColor);

    // Then inject HTML and styles
    const hljsThemeName = this.lightMode ? 'atom-one-light' : 'atom-one-dark';
    const hljsTheme = await this.loadHljsTheme(hljsThemeName);
    this.injectHTML();
    this.injectStyles(hljsTheme);
    document.body.appendChild(this.container);

    // Set up URL change detection
    this.setupUrlChangeDetection();

    // Add event listeners
    const chatButton = this.shadow.querySelector(".chat-button");
    chatButton.style.cssText = `
    bottom: ${this.margins.bottom};
    right: ${this.margins.right};
    --chat-button-bg: ${this.mainColor};
  `;

    // If we have loaded state following a page refresh attach the event listeners the restored chat panel's controls
    this.addInitialStateEventListeners();

    // Set hover and active colors
    chatButton.style.setProperty(
      "--chat-button-hover-bg",
      this.darkenColor(this.mainColor, 0.1)
    );
    chatButton.style.setProperty(
      "--chat-button-active-bg",
      this.darkenColor(this.mainColor, 0.2)
    );

    const questionInput = this.shadow.getElementById("questionInput");
    const submitButton = this.shadow.querySelector(".submit-button");

    if (chatButton) {
      chatButton.addEventListener("click", this.toggleChat);
    }

    if (questionInput) {
      questionInput.addEventListener("keydown", this.handleKeyPress);
      this.initInputListeners();
    }

    if (submitButton) {
      submitButton.addEventListener("click", () => this.validateAndSubmit());
    }

    // Initialize voice recording functionality
    this.initVoiceRecording();

    // Add voice record button event listener using delegation
    if (this.voiceRecordingEnabled) {
      const voiceRecordContainer = this.shadow.querySelector('.voice-record-container');
      if (voiceRecordContainer) {
        voiceRecordContainer.addEventListener('click', (e) => {
          // Check if container is disabled (during answer generation)
          if (voiceRecordContainer.style.pointerEvents === "none") {
            return;
          }
          
          const button = e.target.closest('.voice-record-button');
          if (button && !button.disabled) {
            this.toggleVoiceRecording();
          }
        });
      }
    }

    // Add drag resize listener
    const resizeHandle = this.shadow.querySelector(".resize-handle");
    if (resizeHandle) {
      resizeHandle.addEventListener("mousedown", (e) => {
        // Call handleDragStart with the correct 'this' context
        this.handleDragStart(e);
      });
    }

    // // Wrap page content
    // const wrapper = document.createElement("div");
    // wrapper.id = "gurubase-page-content-wrapper";

    // wrapper.style.position = "relative"; // Add this
    // wrapper.style.zIndex = "1"; // Add this to ensure it stays below the widget

    // // Move all body children into wrapper except chat widget
    // while (document.body.firstChild) {
    //   const child = document.body.firstChild;
    //   if (!child.classList?.contains("chat-widget")) {
    //     wrapper.appendChild(child);
    //   }
    // }

    // wrapper.style.width = "100%";
    // document.body.insertBefore(wrapper, document.body.firstChild);

    // Remove Speed Highlight CSS import
    // Remove Speed Highlight script import

    // Add highlight.js CSS and script if not already present
    if (!document.querySelector('link[href*="highlight.js"]')) {
      const highlightCSS = document.createElement("link");
      highlightCSS.rel = "stylesheet";
      highlightCSS.href =
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/atom-one-light.min.css";
      document.head.appendChild(highlightCSS);
    }

    if (!window.hljs) {
      const highlightScript = document.createElement("script");
      highlightScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js";
      document.head.appendChild(highlightScript);
    }

    this.handleViewportHeight();
    window.addEventListener('resize', this.handleViewportHeight);
    window.addEventListener('beforeunload', this.handleUnload);
    
    // Add visualViewport listeners for keyboard detection
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', this.handleVisualViewportChange);
      window.visualViewport.addEventListener('scroll', this.handleVisualViewportChange);
    }

    // Add event listener for window resize to handle tooltip positioning
    window.addEventListener('resize', () => this.handleTooltipPosition());
    
    // Initial tooltip position check
    this.handleTooltipPosition();

    // Restore panel if needed.
    if (sessionStorage && sessionStorage.getItem("chatWidth")) {
      this.setChatPanelWidth(sessionStorage.getItem("chatWidth"));
      this.toggleChat();
    }
    // If an in-page anchor was referenced, make sure we respect it rather than reset the scroll position.
    if (window.location.hash) {
      window.location.href = window.location.hash;
    }
  }

  addInitialStateEventListeners() {
    // Add listeners for copy response buttons
    this.shadow.querySelectorAll(".copy-response-button").forEach((button) => {
      const textContainerId = button.getAttribute("data-text-id");
      let textToCopy = "";
      if (textContainerId) {
        const textContainerDiv = this.shadow.getElementById(textContainerId);
        if (textContainerDiv) {
          textToCopy = textContainerDiv.textContent || textContainerDiv.innerText;
        }
      }
      this.addResponseButtonEventListeners(button, () => this.copyResponseText(textToCopy))
    })
    // Add listeners for code block copy buttons
    this.shadow.querySelectorAll(".code-block-copy-button").forEach((button) => {
      this.addCodeBlockCopyEventListener(button);
    });
    // Add listeners for example questions
    this.shadow.querySelectorAll(".example-question").forEach((button) => {
      const questionContainerId = button.getAttribute("data-question-id");
      let question = "";
      if (questionContainerId) {
        const questionContainerDiv = this.shadow.getElementById(questionContainerId);
        if (questionContainerDiv) {
          question = questionContainerDiv.textContent || questionContainerDiv.innerText;
        }
      }
      this.addExampleQuestionEventListener(button, question);
    });
    // Add listeners for vote buttons
    const messagesContainer = this.shadow.querySelector(".chat-messages");
    this.processVoteButtons(messagesContainer);
  }

  async loadHljsTheme(themeName) {
    try {
      const response = await fetch(`https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/${themeName}.min.css`);
      const css = await response.text();
      return css;
    } catch (error) {
      console.error('Failed to load highlight.js theme:', error);
      return ''; // Return empty string if theme loading fails
    }
  }  

  // Clean up when widget is destroyed
  destroy() {
    document.removeEventListener("keydown", this.handleEscape);
    document.removeEventListener("mousemove", this.handleDrag);
    document.removeEventListener("mouseup", this.handleDragEnd);
    window.removeEventListener('resize', this.handleViewportHeight);

    // Clean up container keyboard handlers
    if (this.containerKeydownHandler) {
      this.container.removeEventListener('keydown', this.containerKeydownHandler, true);
    }
    if (this.containerKeyupHandler) {
      this.container.removeEventListener('keyup', this.containerKeyupHandler, true);
    }
    if (window.visualViewport) {
      window.visualViewport.removeEventListener('resize', this.handleVisualViewportChange);
      window.visualViewport.removeEventListener('scroll', this.handleVisualViewportChange);
    }

    // Clean up voice recording
    if (this.mediaRecorder && this.isRecording) {
      this.stopVoiceRecording();
    }
    
    // Clean up recording timer
    if (this.recordingTimer) {
      clearInterval(this.recordingTimer);
      this.recordingTimer = null;
    }
    
    // Clean up recording timeout
    if (this.recordingTimeout) {
      clearTimeout(this.recordingTimeout);
      this.recordingTimeout = null;
    }
  }

  handleDragStart(e) {
    const handle = e.target;
    const chatWindow = this.shadow.getElementById("chatWindow");

    if (!handle.classList.contains("resize-handle")) return;

    // Prevent text selection while dragging
    document.body.style.userSelect = "none";
    document.body.style.webkitUserSelect = "none";
    document.body.style.mozUserSelect = "none";
    document.body.style.msUserSelect = "none";

    handle.classList.add("dragging");
    this.isDragging = true;
    this.startWidth = chatWindow.offsetWidth;
    this.startX = e.clientX;

    // Add event listeners to document
    document.addEventListener("mousemove", this.handleDrag);
    document.addEventListener("mouseup", this.handleDragEnd);
  }

  handleDrag(e) {
    if (!this.isDragging) return;

    const deltaX = this.startX - e.clientX;
    const newWidth = Math.min(Math.max(this.startWidth + deltaX, 400), 800);
    this.setChatPanelWidth(newWidth);
  }

  setChatPanelWidth(newWidth) {
    const chatWindow = this.shadow.getElementById("chatWindow");
    chatWindow.style.width = `${newWidth}px`;
    // Update content width while dragging
    this.setWrapperPanelWidth(newWidth);
  }

  handleDragEnd(e) {
    this.isDragging = false;
    const handle = document.querySelector(".resize-handle");
    handle?.classList.remove("dragging");

    // Re-enable text selection
    document.body.style.userSelect = "";
    document.body.style.webkitUserSelect = "";
    document.body.style.mozUserSelect = "";
    document.body.style.msUserSelect = "";

    // Remove event listeners from document
    document.removeEventListener("mousemove", this.handleDrag);
    document.removeEventListener("mouseup", this.handleDragEnd);
  }

  handleClearHistory() {
    const messagesContainer = this.shadow.querySelector(".chat-messages");
    const questionInput = this.shadow.getElementById("questionInput");
    
    // Blur the input to dismiss keyboard
    if (questionInput) {
        questionInput.blur();
    }
    
    // Get fresh templates with current mainColor
    messagesContainer.innerHTML = this.getEmptyState();
    this.isFirstQuestion = true;
    this.currentBingeId = null;
    this.previousQuestionSlug = null;

    // Hide the edit button
    const editButton = this.shadow.querySelector(".edit-button");
    if (editButton) {
        editButton.style.display = "none";
    }

    // Hide the clear button
    const clearButton = this.shadow.querySelector(".clear-button");
    if (clearButton) {
        clearButton.style.display = "none";
    }
  }

  initInputListeners() {
    const questionInput = this.shadow.getElementById("questionInput");
    const submitButton = this.shadow.querySelector(".submit-button");
    const footer = this.shadow.querySelector(".anteon-footer");
    const inputContainer = this.shadow.querySelector(".chat-input-container");

    // Create the keyup handler that will be added/removed on focus/blur
    const keyupHandler = function(event) {
      // Match any character that could be part of natural language:
      // - Letters (including accented) from any language
      // - Numbers
      // - Punctuation
      // - Common symbols
      if (/^[\p{L}\p{N}\p{P}\p{S}]$/u.test(event.key)) {
        event.stopPropagation();
        event.preventDefault();
      }
    };

    // Add focus and blur handlers to manage the keyup listener
    questionInput.addEventListener("focus", () => {
      document.addEventListener("keyup", keyupHandler, true);
    });

    questionInput.addEventListener("blur", () => {
      document.removeEventListener("keyup", keyupHandler, true);
    });

    questionInput.addEventListener("input", () => {
      const length = questionInput.value.trim().length;
      submitButton.classList.toggle("active", length >= 10);

      // Hide error message when typing
      const errorElement = this.shadow.querySelector(".search-error");
      if (errorElement) {
        errorElement.style.display = "none";
        footer.style.paddingBottom = "0"; // Reset footer padding
        inputContainer.style.paddingBottom = "0"; // Reset input container padding
      }
    });

    // Add keydown event listener to prevent propagation when input is focused
    questionInput.addEventListener("keydown", (event) => {
      // Only prevent propagation if the widget is open
      const chatWindow = this.shadow.getElementById("chatWindow");
      if (chatWindow && chatWindow.classList.contains("open")) {
        event.stopPropagation();
      }
    });
  }

  // Add this helper function at the class level
  isUserAtBottom(container) {
    const threshold = 70; // pixels from bottom to consider "at bottom"
    return container.scrollHeight - container.scrollTop - container.clientHeight < threshold;
  }

  handleMessagesScroll(messagesContainer, event) {
    const isAtBottom = this.isUserAtBottom(messagesContainer);
    
    if (this.isStreaming) {
      if (event.deltaY < 0) {
        this.shouldAutoScroll = false;
      }
      else if (isAtBottom) {
        this.shouldAutoScroll = true;
      } 
    }
  }

  async fetchFollowUpExamples(bingeId, slug, questionText) {
    try {
      const endpoint = `${this.baseUrl}/${this.guruSlug}/follow_up/examples/`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.widgetId,
          origin: window.location.href
        },
        body: JSON.stringify({
          binge_id: bingeId,
          question_slug: slug,
          question_text: questionText,
          widget: true
        })
      });

      if (!response.ok) {
        throw new Error("Failed to fetch follow-up examples");
      }

      const data = await response.json();
      return data || [];
    } catch (error) {
      console.error("Error fetching follow-up examples:", error);
      return [];
    }
  }

  async recordVote(contentSlug, bingeId, voteType, feedback = null) {
    try {
      const response = await fetch(`${this.baseUrl}/${this.guruSlug}/record_vote/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.widgetId,
          origin: window.location.href
        },
        body: JSON.stringify({
          content_slug: contentSlug,
          binge_id: bingeId === 'initial' ? null : bingeId,
          vote_type: voteType,
          feedback: feedback
        })
      });

      if (!response.ok) {
        throw new Error("Failed to record vote");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error recording vote:", error);
      throw error;
    }
  }

  createExampleQuestions(questions) {
    if (!Array.isArray(questions) || questions.length === 0) return null;

    const container = document.createElement("div");
    container.className = "example-questions flex flex-wrap gap-2";

    questions.forEach((question) => {
      const questionUuid = this.createUuid();
      // Create hidden container for the example question to ensure this persists page refreshes
      const exampleQuestionContainer = document.createElement("div");
      exampleQuestionContainer.className = 'hidden';
      exampleQuestionContainer.id = questionUuid;
      exampleQuestionContainer.textContent = question; // Use textContent to prevent HTML rendering
      container.appendChild(exampleQuestionContainer);
      // Create button
      const button = document.createElement("button");
      button.className = "example-question";
      button.textContent = question;
      button.setAttribute("aria-label", `${this.t('exampleQuestion')} ${question}`);
      button.setAttribute("data-question-id", questionUuid);
      this.addExampleQuestionEventListener(button, question);
      container.appendChild(button);
    });

    return container;
  }

  addExampleQuestionEventListener(button, selectedQuestion) {
    button.addEventListener("click", () => {
      const questionInput = this.shadow.getElementById("questionInput");
      questionInput.value = selectedQuestion;
      questionInput.dispatchEvent(new Event("input"));
      this.submitQuestion(selectedQuestion);
    });
  }

  handleViewportHeight() {
    // First we get the viewport height and we multiply it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  handleVisualViewportChange() {
    if (!window.visualViewport) return;
    
    const chatWindow = this.shadow.getElementById("chatWindow");
    const inputContainer = this.shadow.querySelector(".chat-input-container");
    const messagesContainer = this.shadow.querySelector(".chat-messages");
    if (!chatWindow || !inputContainer || !messagesContainer) return;

    // Check if browser is Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    // Calculate the keyboard height
    const keyboardHeight = window.innerHeight - window.visualViewport.height;
    
    if (keyboardHeight > 0) {
        // Keyboard is shown
        if (!isSafari) {
            // Apply our custom handling only for non-Safari browsers
            chatWindow.style.height = `${window.visualViewport.height}px`;
            chatWindow.style.maxHeight = `${window.visualViewport.height}px`;
            
            // Adjust the input container position
            inputContainer.style.position = 'fixed';
            inputContainer.style.bottom = '0';
            inputContainer.style.left = '0';
            inputContainer.style.right = '0';
            inputContainer.style.transform = `translateY(-${keyboardHeight}px)`;
            
            // Adjust messages container to make room for keyboard
            messagesContainer.style.marginBottom = `${keyboardHeight}px`;
        }
        
        // Scroll to the input after a short delay
        setTimeout(() => {
            inputContainer.scrollIntoView({ behavior: 'smooth' });
        }, 10);
    } else {
        // Keyboard is hidden
        if (!isSafari) {
            // Reset styles only for non-Safari browsers
            chatWindow.style.height = '';
            chatWindow.style.maxHeight = '';
            inputContainer.style.transform = '';
            inputContainer.style.position = '';
            inputContainer.style.bottom = '';
            inputContainer.style.left = '';
            inputContainer.style.right = '';
            messagesContainer.style.marginBottom = '';
        }
    }
  }

  handleUrlChange() {
  }


  setupUrlChangeDetection() {
    // Store initial URL
    this.lastUrl = window.location.href;
    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', () => {
      this.handleUrlChange();
    });

    // Intercept history pushState and replaceState
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function() {
      originalPushState.apply(this, arguments);
      window.dispatchEvent(new Event('locationchange'));
    };

    window.history.replaceState = function() {
      originalReplaceState.apply(this, arguments);
      window.dispatchEvent(new Event('locationchange'));
    };

    // Listen for our custom locationchange event
    window.addEventListener('locationchange', () => {
      this.handleUrlChange();
    });

    // Fallback: Check URL periodically for frameworks that modify URL directly
    setInterval(() => {
      const currentUrl = window.location.href;
      if (this.lastUrl !== currentUrl) {
        this.lastUrl = currentUrl;
        this.handleUrlChange();
      }
    }, 1000);
  }

  // Add this new method to switch themes
  async switchTheme(lightMode = null) {
    if (lightMode !== null) {
      this.lightMode = lightMode;
    } else {
      this.lightMode = !this.lightMode;
    }
    // Reinject styles with new theme
    const hljsThemeName = this.lightMode ? 'atom-one-light' : 'atom-one-dark';
    const hljsTheme = await this.loadHljsTheme(hljsThemeName);
    this.injectStyles(hljsTheme);
    
    // Update the Gurubase logo in the footer
    const gurubaseLogo = this.shadow.querySelector('.anteon-powered');
    if (gurubaseLogo) {
      gurubaseLogo.innerHTML = `powered by ${this.getGurubaseLogo()}`;
    } else {
      console.error("Could not find Gurubase logo element");
    }
  }

  handleTooltipPosition() {
    const chatButton = this.shadow.querySelector('.chat-button');
    if (!chatButton) return;

    const tooltipText = chatButton.getAttribute('data-tooltip');
    if (!tooltipText) return;

    // Calculate position based on text length
    const textLength = tooltipText.length;
    const maxLength = 200; // Adjust this based on your longest expected text
    const minLeft = -40;
    const maxLeft = 40;
    
    // Linear interpolation between maxLeft and minLeft based on text length
    const leftPosition = maxLeft - ((textLength / maxLength) * (maxLeft - minLeft));
    
    // Apply the calculated position
    const tooltipSide = chatButton.getAttribute('data-tooltip-side');
    if (tooltipSide === 'top' || tooltipSide === 'bottom') {
      chatButton.style.setProperty('--tooltip-left', `${leftPosition}%`);
    }
  }

  addResponseButtonEventListeners(button, onClick) {
    // Hover effect
    button.addEventListener("onmouseover", (event) => {
      event.target.style.transform = "translateY(-1px)";
    });
    button.addEventListener("onmouseout", (event) => {
      event.target.style.transform = "translateY(0)";
    });
    // Click effect
    button.addEventListener("onmousedown", (event) => {
      event.target.style.transform = "translateY(0)";
    });
    button.addEventListener("onmouseup", (event) => {
      event.target.style.transform = "translateY(-1px)";
    });
    button.addEventListener("click", () => {
      // Call the original onClick handler
      onClick();

      // Don't show success icon for text-to-speech buttons
      if (!button.classList.contains('text-to-speech-response-button')) {
        const originalIcon = button.innerHTML;
        // Show success state
        button.innerHTML = this.getSuccessIcon();

        // Reset after 1 second
        setTimeout(() => {
          button.style.backgroundColor = "inherit";
          button.innerHTML = originalIcon;
        }, 1000);
      }
    });
  }

  // Create response buttons
  createResponseButtons(textToCopy, questionData = null) {
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "response-buttons";
    buttonContainer.style.display = "flex";
    buttonContainer.style.alignItems = "flex-start";
    buttonContainer.style.gap = "8px";
    buttonContainer.style.marginTop = "8px";

    const containerUuid = this.createUuid();
    const copyTextContainer = document.createElement("div");
    copyTextContainer.className = 'hidden';
    copyTextContainer.id = containerUuid;
    copyTextContainer.textContent = textToCopy;
    buttonContainer.appendChild(copyTextContainer);

    const copyButton = this.createResponseButton(
      `<path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.832031H7.29572C6.07055 0.832021 5.10013 0.832013 4.34065 0.934122C3.55904 1.03921 2.9264 1.26062 2.4275 1.75953C1.92859 2.25844 1.70718 2.89107 1.60209 3.67268C1.49998 4.43216 1.49999 5.40258 1.5 6.62775V10.6654C1.5 11.9135 2.4147 12.9481 3.61034 13.1352C3.70232 13.6445 3.87835 14.0793 4.23223 14.4331C4.63351 14.8344 5.13876 15.007 5.73883 15.0877C6.31681 15.1654 7.05169 15.1654 7.96342 15.1654H10.0366C10.9483 15.1654 11.6832 15.1654 12.2612 15.0877C12.8612 15.007 13.3665 14.8344 13.7678 14.4331C14.169 14.0319 14.3416 13.5266 14.4223 12.9265C14.5 12.3486 14.5 11.6137 14.5 10.7019V7.29545C14.5 6.38372 14.5 5.64884 14.4223 5.07086C14.3416 4.47079 14.169 3.96554 13.7678 3.56427C13.4139 3.21038 12.9791 3.03435 12.4698 2.94237C12.2827 1.74673 11.2482 0.832031 10 0.832031ZM11.4196 2.84614C11.2177 2.25619 10.6584 1.83203 10 1.83203H7.33333C6.06212 1.83203 5.15901 1.83309 4.4739 1.9252C3.80317 2.01538 3.41674 2.18449 3.1346 2.46663C2.85246 2.74877 2.68335 3.1352 2.59317 3.80593C2.50106 4.49104 2.5 5.39415 2.5 6.66536V10.6654C2.5 11.3237 2.92416 11.883 3.51411 12.0849C3.49999 11.6783 3.49999 11.2185 3.5 10.7019V7.29545C3.49999 6.38372 3.49998 5.64884 3.57768 5.07086C3.65836 4.47079 3.83096 3.96554 4.23223 3.56427C4.63351 3.16299 5.13876 2.99039 5.73883 2.90971C6.31681 2.83201 7.05169 2.83202 7.96342 2.83203H10.0366C10.5531 2.83202 11.0129 2.83202 11.4196 2.84614ZM4.93934 4.27137C5.12385 4.08686 5.3829 3.96657 5.87208 3.9008C6.37565 3.83309 7.04306 3.83203 8 3.83203H10C10.9569 3.83203 11.6244 3.83309 12.1279 3.9008C12.6171 3.96657 12.8762 4.08686 13.0607 4.27137C13.2452 4.45588 13.3655 4.71493 13.4312 5.20411C13.4989 5.70768 13.5 6.37509 13.5 7.33203V10.6654C13.5 11.6223 13.4989 12.2897 13.4312 12.7933C13.3655 13.2825 13.2452 13.5415 13.0607 13.726C12.8762 13.9105 12.6171 14.0308 12.1279 14.0966C11.6244 14.1643 10.9569 14.1654 10 14.1654H8C7.04306 14.1654 6.37565 14.1643 5.87208 14.0966C5.3829 14.0308 5.12385 13.9105 4.93934 13.726C4.75483 13.5415 4.63453 13.2825 4.56877 12.7933C4.50106 12.2897 4.5 11.6223 4.5 10.6654V7.33203C4.5 6.37509 4.50106 5.70768 4.56877 5.20411C4.63453 4.71493 4.75483 4.45588 4.93934 4.27137Z" fill="var(--response-button-color)"/>`,
      "",
      () => this.copyResponseText(textToCopy),
      "copy"
    );
    copyButton.setAttribute("data-text-id", containerUuid);
    buttonContainer.appendChild(copyButton);

    // Add text-to-speech button if enabled
    if (this.textToSpeechEnabled) {
      const textToSpeechButton = this.createResponseButton(
        `<path d="M11 5L6 9H2v6h4l5 4V5z" stroke="var(--response-button-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="var(--response-button-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="var(--response-button-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`,
        "",
        () => {
          this.handleTextToSpeechClick(textToCopy, textToSpeechButton);
        },
        "text-to-speech"
      );
      textToSpeechButton.setAttribute("data-text-id", containerUuid);
      buttonContainer.appendChild(textToSpeechButton);
    }

    // Always add vote buttons - use questionData if available
    const voteContainer = document.createElement("div");
    voteContainer.className = "vote-container";
    voteContainer.style.display = "flex";
    voteContainer.style.flexDirection = "column";
    voteContainer.style.gap = "8px";

    // Get question data or use defaults
    const slug = questionData ? questionData.slug : '';
    const bingeId = questionData ? questionData.bingeId : '';
    const userVote = questionData ? questionData.userVote : null;

    // Create upvote button
    const upvoteButton = document.createElement("button");
    upvoteButton.className = `vote-button upvote ${userVote === 'upvote' ? 'selected' : ''}`;
    upvoteButton.setAttribute('data-slug', slug);
    upvoteButton.setAttribute('data-binge-id', bingeId || '');
    upvoteButton.setAttribute('data-user-vote', userVote || '');
    upvoteButton.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" stroke="var(--response-button-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    upvoteButton.disabled = !slug || userVote !== null;

    // Create downvote button
    const downvoteButton = document.createElement("button");
    downvoteButton.className = `vote-button downvote ${userVote === 'downvote' ? 'selected' : ''}`;
    downvoteButton.setAttribute('data-slug', slug);
    downvoteButton.setAttribute('data-binge-id', bingeId || '');
    downvoteButton.setAttribute('data-user-vote', userVote || '');
    downvoteButton.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2 2 0 0 1-2 2H17" stroke="var(--response-button-color)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    downvoteButton.disabled = !slug || userVote !== null;

    // Create feedback form
    const feedbackForm = document.createElement("div");
    feedbackForm.className = "vote-feedback-form";
    feedbackForm.innerHTML = `
      <textarea placeholder="${this.t('feedbackPlaceholder')}" maxlength="200"></textarea>
      <div class="feedback-char-count">0/200</div>
      <div class="feedback-actions">
        <button type="button" class="feedback-button cancel">${this.t('cancel')}</button>
        <button type="button" class="feedback-button submit">${this.t('submit')}</button>
      </div>
    `;

    // Create buttons container
    const buttonsContainer = document.createElement("div");
    buttonsContainer.style.display = "flex";
    buttonsContainer.style.gap = "8px";
    buttonsContainer.style.alignItems = "center";
    buttonsContainer.style.height = "16px"; // Match copy button height

    buttonsContainer.appendChild(upvoteButton);
    buttonsContainer.appendChild(downvoteButton);
    voteContainer.appendChild(buttonsContainer);
    voteContainer.appendChild(feedbackForm);
    buttonContainer.appendChild(voteContainer);

    // Process vote buttons for this container
    setTimeout(() => {
      this.processVoteButtons(buttonContainer);
    }, 0);

    return buttonContainer;
  }

  copyResponseText(textToCopy) {
    navigator.clipboard.writeText(textToCopy).then(() => {});
  }

  createUuid() {
    return Math.random().toString(36).substr(2);
  }

  getSuccessIcon() {
    return `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="20 6 9 17 4 12" stroke="var(--response-button-color)" stroke-width="2"/>
    </svg>
    `;
  }

  createResponseButton(icon, text, onClick, type) {
    const button = document.createElement("button");
    button.className = `${type}-response-button`;
    button.style.cssText = `
      border: none;
      background: inherit;
      display: flex;
      align-items: center;
      padding: 0;
      cursor: pointer;
      transition: background-color 0.2s ease, transform 0.2s ease;
    `;

    button.innerHTML = `
    <svg width="16" height="16" viewBox="${type === 'copy' ? '0 0 16 16' : '0 0 24 24'}" fill="none" xmlns="http://www.w3.org/2000/svg">
      ${icon}
    </svg>
    ${text}
  `;
    this.addResponseButtonEventListeners(button, onClick);

    return button;
  }

}

function loadScript(url) {
    return new Promise((resolve, reject) => {
      // Check if marked is already loaded
      if (window.marked) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
      document.head.appendChild(script);
    });
  }

  // Load DOMPurify for HTML sanitization
  function loadDOMPurify() {
    return new Promise((resolve, reject) => {
      // Check if DOMPurify is already loaded
      if (window.DOMPurify) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/dompurify@3.0.5/dist/purify.min.js';
      script.onload = resolve;
      script.onerror = () => reject(new Error('Failed to load DOMPurify'));
      document.head.appendChild(script);
    });
  }

  // Sanitize HTML content to prevent XSS
  function sanitizeHTML(html) {
    if (typeof window.DOMPurify !== 'undefined') {
      return window.DOMPurify.sanitize(html, {
        ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'a', 'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'table', 'thead', 'tbody', 'tr', 'td', 'th', 'span', 'div'],
        ALLOWED_ATTR: ['href', 'target', 'rel', 'class'],
        ALLOW_DATA_ATTR: false,
        FORBID_TAGS: ['script', 'object', 'embed', 'form', 'input', 'textarea', 'select', 'button'],
        FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover', 'onfocus', 'onblur', 'onchange', 'onsubmit']
      });
    }
    // Fallback: strip all HTML tags if DOMPurify isn't loaded
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  // Validate and sanitize URLs with strict scheme/host checks
  function sanitizeURL(url) {
    if (!url || typeof url !== 'string') {
      return null; // Return null for invalid input so code can fall back to default
    }
    
    try {
      const urlObj = new URL(url);
      // Only allow http and https protocols
      if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:') {
        return null;
      }
      
      // Additional host validation - reject localhost, private IPs, and suspicious hosts
      const hostname = urlObj.hostname.toLowerCase();
      
      // Reject localhost and loopback
      if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1') {
        return null;
      }
      
      // Reject private IP ranges (basic check)
      if (hostname.match(/^192\.168\.|^10\.|^172\.(1[6-9]|2[0-9]|3[01])\./)) {
        return null;
      }
      
      // Reject suspicious or malicious patterns
      if (hostname.includes('javascript:') || hostname.includes('data:') || hostname.includes('vbscript:')) {
        return null;
      }
      
      return urlObj.href;
    } catch (e) {
      // Invalid URL format
      return null;
    }
  }

  // Sanitize text for use in attributes to prevent XSS
  function sanitizeAttributeText(text) {
    if (!text || typeof text !== 'string') {
      return '';
    }
    
    // Remove potentially dangerous characters and scripts
    return text
      .replace(/[<>\"'&]/g, function(match) {
        const entityMap = {
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#x27;',
          '&': '&amp;'
        };
        return entityMap[match];
      })
      .replace(/javascript:/gi, '')
      .replace(/data:/gi, '')
      .replace(/vbscript:/gi, '');
  }

  // Load required libraries before initializing the widget
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/marked/marked.min.js'),
    loadDOMPurify()
  ])
    .then(() => {
      // Check if DOMContentLoaded has already fired
      if (document.readyState === 'loading') {
        // If still loading, add event listener
        document.addEventListener("DOMContentLoaded", () => {
          if (!window.chatWidget) {
            window.chatWidget = new ChatWidget();
          }
        });
      } else {
        // If already loaded, initialize immediately
        if (!window.chatWidget) {
          window.chatWidget = new ChatWidget();
        }
      }
    })
    .catch((error) => {
      console.error("Error loading marked.js:", error);
    });

// // Initialize the widget after DOM is loaded
// document.addEventListener("DOMContentLoaded", () => {
//   window.chatWidget = new ChatWidget();
// });

function getThemeState() {
  const isDarkClass = document.documentElement.classList.contains('dark');
  const dataTheme = document.documentElement.getAttribute('data-theme');
  const isDark = isDarkClass || (dataTheme === 'dark');
  const isLight = dataTheme === 'light';
  return isLight ? true : !isDark;
}

// Add theme sync function
function syncWithTheme() {
  const initWidget = setInterval(() => {
    if (window.chatWidget?.switchTheme) {
      clearInterval(initWidget);
      
      // Get the theme mode from data attribute
      const scriptTag = document.querySelector('script#guru-widget-id');
      const themeMode = scriptTag?.getAttribute('data-light-mode')?.toLowerCase();
      
      // If theme is explicitly set to light or dark, set it once and don't sync
      if (themeMode === 'true' || themeMode === 'light') {
        window.chatWidget.switchTheme(true); // Force light mode
        return;
      } else if (themeMode === 'false' || themeMode === 'dark') {
        window.chatWidget.switchTheme(false); // Force dark mode
        return;
      }
      
      // Only set up auto-sync if theme mode is 'auto' or not set
      if (themeMode === 'auto') {
        // Handle theme changes
        const syncTheme = () => {
          // Check both class list and data-theme attribute
          window.chatWidget.switchTheme(getThemeState());
        };

        // Watch for theme changes on both class and data-theme
        new MutationObserver(syncTheme).observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['class', 'data-theme']
        });
        
        // Set initial theme
        syncTheme();
      }
    }
  }, 1000);

  // Stop checking after 20 seconds
  setTimeout(() => clearInterval(initWidget), 20000);
}

// Call the sync function when script loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', syncWithTheme);
} else {
  syncWithTheme();
}
