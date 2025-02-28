# Gurubase Widget
This repository includes the script for the 'Ask AI' widget, which you can add to your Guru's AI capabilities into your website.

<p align="center">
  <img src="./assets/widget.gif" alt="widget demo">
</p>

## Prerequisites

- **Your website should have a Guru on Gurubase.io.** If not, [request a new Guru](https://github.com/Gurubase/gurubase?tab=readme-ov-file#how-to-create-a-guru).
- **You need to have a Widget ID.** You can get it from your Guru's settings page on Gurubase.io.
   - Go to "My Gurus" page
   - Select the Guru you want to add the widget to
   - Click “Integrations” and then “Web Widget”
   - Create a new widget
   - Copy the Widget ID and use it in the installation section

> [!IMPORTANT]
> Widget IDs are unique to the provided full domains, including subdomains. If you create a Widget ID for `https://www.example.com`, Gurubase will only accept incoming requests from `https://www.example.com`. Requests from subdomains or localhost will be rejected. You can create a new Widget ID for local testing using your app's full localhost domain, e.g., `http://localhost:<your_local_app_port>`.

## Installation
The only thing you need to do is to add the widget.js to your website as follows:
```html
<!-- Gurubase Widget -->
<script async src="https://widget.gurubase.io/widget.latest.min.js" 
    data-widget-id="<your_widget_id>"
    id="guru-widget-id">
</script>
```

> [!IMPORTANT]
> The value of the `id` attribute should be `"guru-widget-id"`, don't change it.

`src`, `data-widget-id`, `id` are required. You can modify the rest of the attributes to customize the widget by using the below options.

## Configuration Options

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| data-widget-id | string | Your widget ID | Get it from your Guru's settings page |
| data-text | string | Text displayed on the chat button | "Ask AI" |
| data-margins | object | Button positioning margins | `{ bottom: "20px", right: "20px" }` |
| data-bg-color | string | Primary color for the widget | Fetched from the Gurubase.io |
| data-icon-url | string | URL to your company/product logo | Fetched from the Gurubase.io |
| data-name | string | Your company/product name | Fetched from the Gurubase.io |
| data-light-mode | boolean | Whether to use light mode | false |
| data-baseUrl | string | URL to your Gurubase backend. **Only for self-hosted Gurubase.** | Gurubase Cloud |
| data-tooltip | string | Tooltip text | null |
| data-tooltip-side | string | Tooltip side. 8 possible values: "top", "bottom", "left", "right", "top left", "top right", "bottom left", "bottom right" | "left" |


> [!NOTE]
> If you're using self-hosted Gurubase, you must set the backend URL using the `data-baseUrl` attribute. The default backend URL of Self-hosted Gurubase is `http://localhost:8029/api/`.
> ```html
> <script async src="https://widget.gurubase.io/widget.latest.min.js" 
>     data-widget-id="YOUR_WIDGET_ID"
>     data-baseUrl="http://localhost:8029/api/"
>     id="guru-widget-id">
> </script>
> ```

> [!NOTE]
> The background color of the tooltip is the inverse of the widget's background color. If `data-light-mode` is `true`, the tooltip's background color will be black, or vice versa.

## Exposed Functions

- `switchTheme(lightMode = null)`
  
  You can use this function to sync the theme of the widget with the theme of your website. It accepts an optional `lightMode` boolean parameter to force the widget to be in light/dark mode. 3 possible usages of this function:
  - `switchTheme()`: Toggle the theme
  - `switchTheme(true)`: Force light mode
  - `switchTheme(false)`: Force dark mode
  
  This function can be accessed with `window.chatWidget.switchTheme();`

  An example usage is shown in the [MKDocs](https://github.com/Gurubase/gurubase-widget/tree/master/examples/mkdocs/docs/js/theme-switch.js) example in the `theme-switch.js` script. It toggles the theme of the widget based on the MkDocs website by listening for changes in the theme and using this function with each change. 

## Demos
Below are example installations of the Gurubase Widget for various technologies. If your technology isn’t listed, we’d gladly accept a demo, feel free to submit a pull request.

- [Astro - Starlight](https://github.com/Gurubase/gurubase-widget/tree/master/examples/astro-starlight)
- [Docusaurus](https://github.com/Gurubase/gurubase-widget/tree/master/examples/docusaurus)
- [Mintlify](https://github.com/Gurubase/gurubase-widget/tree/master/examples/mintlify)
- [MKDocs](https://github.com/Gurubase/gurubase-widget/tree/master/examples/mkdocs)
- [Next.js](https://github.com/Gurubase/gurubase-widget/tree/master/examples/nextjs)
- [JS](https://github.com/Gurubase/gurubase-widget/tree/master/examples/pure_js)
- [React](https://github.com/Gurubase/gurubase-widget/tree/master/examples/react_app)
- [Remix](https://github.com/Gurubase/gurubase-widget/tree/master/examples/remix)
- [Sphinx](https://github.com/Gurubase/gurubase-widget/tree/master/examples/sphinx)
- [Retype](https://github.com/Gurubase/gurubase-widget/tree/master/examples/retype)
- [GitBook](https://www.gitbook.com/integrations/gurubase)