# Gurubase Widget

A lightweight, customizable chat widget that can be easily integrated into any website. It connects your webpage to Gurubase, an AI-powered chat interface that can answer any question regarding your product.

## Features

- 🚀 Easy integration

- 💬 Real-time streaming responses

- 🎨 Customizable appearance

- 📱 Responsive design

- 🔒 Secure API integration

- 📊 Trust score indicators

- 🔗 Reference link support

- ⌨️ Markdown support

- 🎯 Code syntax highlighting

## Installation

Add the widget to your website by including these scripts in your HTML:

```html
<!-- Gurubase Widget -->
<script src="/path/to/widget.js" 
    data-widget-id="FhdIYUJfuAs3g_Zmm_U6UarG6GJFSVSUzf4NHYltu1g"
    data-text="Ask AI"
    data-margins='{"bottom": "20px", "right": "20px"}'
    data-bg-color="#F5A51D"
    data-icon-url="https://avatars.githubusercontent.com/u/75415501?s=200&v=4"
    data-name="Anteon">
</script>
```

## Usage

### Configuration Options

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| widgetId | string | Your widget ID (Click [here](https://gurubase.io) to get one) | Required |
| buttonText | string | Text displayed on the chat button | "Ask AI" |
| margins | object | Button positioning margins | { bottom: "20px", right: "20px" } |
| mainColor | string | Primary color for the widget | Fetched from the backend |
| logoUrl | string | URL to your company logo | Fetched from the backend |
| name | string | Your company/product name | Fetched from the backend |

## Customization

### Styling

The widget automatically fetches the following configuration options from the backend:

- `mainColor`
- `logoUrl`
- `name` 

> You can override these values by passing them as given in the Installation section.

The widget can be customized through the following configuration options:

- `mainColor`: Change the primary color of the widget.
- `logoUrl`: Change the logo displayed in the widget.
- `name`: Change the name displayed in the widget.
- `buttonText`: Change the text displayed on the chat button.
- `margins`: Change the margins of the chat button.

#### Examples

# TODO: Add screenshots

## License
MIT License - see the LICENSE file for details.

## Support

For any issues or support requests, please contact us at [support@gurubase.com](mailto:support@gurubase.com).
