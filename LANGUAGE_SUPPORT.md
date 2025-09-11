# Language Support for Gurubase Widget

The Gurubase Widget now supports multiple languages. Currently, English (default) and Turkish are supported.

## Supported Languages

- **English (en)** - Default language
- **Turkish (tr)** - Turkish language support

## Usage

### Basic Implementation

To use the widget with a specific language, add the `data-language` attribute to your widget script tag:

```html
<!-- English Widget (Default) -->
<script id="guru-widget-id" 
    data-widget-id="your-widget-id"
    data-language="en">
</script>

<!-- Turkish Widget -->
<script id="guru-widget-id" 
    data-widget-id="your-widget-id"
    data-language="tr">
</script>
```

### Complete Example

```html
<script id="guru-widget-id" 
    data-widget-id="your-widget-id"
    data-text="Ask AI"
    data-name="Your Guru Name"
    data-language="tr"
    data-bg-color="#0F9500"
    data-icon-url="https://example.com/icon.png"
    data-tooltip="Ask questions to your AI assistant"
    data-tooltip-side="left"
    data-window-mode="sidebar"
    data-light-mode="auto"
    data-margins='{"bottom": "20px", "right": "20px"}'
</script>
```

## Language-Specific Features

### Button Text
- **English**: "Ask AI"
- **Turkish**: "AI'ya Sor"

### Input Placeholder
- **English**: "Ask anything"
- **Turkish**: "Herhangi bir şey sor"

### Empty State
- **English**: "Ask anything about {name}"
- **Turkish**: "{name} hakkında herhangi bir şey sor"

### Loading Messages
- **English**: "Finding the best contexts from sources."
- **Turkish**: "Kaynaklardan en iyi bağlamları buluyor."

### Error Messages
All error messages are translated, including:
- Validation errors
- Microphone access errors
- Browser compatibility messages
- API error messages

### Voice Recording
- **English**: "Start voice recording", "Stop recording", "Processing audio..."
- **Turkish**: "Ses kaydını başlat", "Kaydı durdur", "Ses işleniyor..."

### Trust Score
- **English**: "Trust Score"
- **Turkish**: "Güven Skoru"

### Vote/Feedback System
- **English**: "Cancel", "Submit", "Please tell us what could be improved..."
- **Turkish**: "İptal", "Gönder", "Lütfen neyin iyileştirilebileceğini söyleyin..."

### Footer
- **English**: "powered by"
- **Turkish**: "tarafından desteklenir"

### Accessibility Labels
All accessibility labels (aria-label attributes) are translated for better screen reader support.

## Implementation Details

### Translation System

The widget uses a translation system with the following structure:

```javascript
translations = {
  en: {
    askAI: "Ask AI",
    askAnything: "Ask anything",
    // ... more translations
  },
  tr: {
    askAI: "AI'ya Sor",
    askAnything: "Herhangi bir şey sor",
    // ... more translations
  }
};
```

### Translation Function

The `t()` function handles translation lookup and parameter replacement:

```javascript
t(key, params = {}) {
  const lang = this.language || 'en';
  const translation = this.translations[lang]?.[key] || this.translations.en[key] || key;
  
  return translation.replace(/\{(\w+)\}/g, (match, param) => {
    return params[param] || match;
  });
}
```

### Parameter Replacement

Translations support parameter replacement using `{parameterName}` syntax:

```javascript
// Translation: "Ask anything about {name}"
this.t('askAnythingAbout', { name: 'John' })
// Result: "Ask anything about John"
```

## Adding New Languages

To add support for a new language:

1. Add a new language object to the `translations` object
2. Translate all the keys in the new language object
3. Update the language validation in the constructor
4. Test the implementation

Example for adding Spanish:

```javascript
translations = {
  en: { /* English translations */ },
  tr: { /* Turkish translations */ },
  es: {
    askAI: "Preguntar a IA",
    askAnything: "Pregunta cualquier cosa",
    // ... translate all other keys
  }
};
```

## Testing

Use the provided `test_translations.html` file to test the language support:

1. Open the test file in a browser
2. Verify that both English and Turkish widgets display correctly
3. Check that all text elements are properly translated
4. Test the voice recording functionality in both languages
5. Verify error messages appear in the correct language

## Browser Compatibility

The language support works in all modern browsers that support the widget. The translation system is purely client-side and doesn't require any additional server-side changes.

## Performance

The translation system has minimal performance impact:
- Translations are loaded once during widget initialization
- Translation lookups are O(1) operations
- No additional network requests are required
- Memory usage is negligible

## Future Enhancements

Potential improvements for future versions:
- Support for RTL languages (Arabic, Hebrew)
- Dynamic language switching without page reload
- User preference persistence
- Automatic language detection based on browser settings
- Support for more languages 