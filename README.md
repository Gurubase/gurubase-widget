# Gurubase Widget
This repository includes the script for the 'Ask AI' widget, which you can add to your Guru's AI capabilities into your website.


https://github.com/user-attachments/assets/34d5cad6-d1e0-40e1-9653-696b8589ac32


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
| data-bg-color | string | Primary color for the widget. Accepts hex color values (e.g., "#0000FF") | Fetched from the Gurubase.io |
| data-shimmer-color | string | Color for the animated shimmer effect on example questions. Accepts hex color values (e.g., "#0000FF"). If not set, uses `data-bg-color`. Falls back to red if neither is available. | Uses `data-bg-color` or red fallback |
| data-icon-url | string | URL to your company/product logo | Fetched from the Gurubase.io |
| data-name | string | Your company/product name | Fetched from the Gurubase.io |
| data-light-mode | string | Whether to use light mode. Possible values are `"auto"`, `"light"`, `"dark"` | "auto" |
| data-baseUrl | string | URL to your Gurubase backend. **Only for self-hosted Gurubase.** | Gurubase Cloud |
| data-tooltip | string | Tooltip text | null |
| data-tooltip-side | string | Tooltip side. 8 possible values: "top", "bottom", "left", "right", "top left", "top right", "bottom left", "bottom right" | "left" |
| data-language | string | Language to use ("tr" and "en" supported) | "en" (english) |
| data-window-mode | string | Display mode for the chat window. Options: "sidebar" (default), "floating" | "sidebar" |


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
> The background color of the tooltip is the inverse of the widget's background color. If `data-light-mode` is `light`, the tooltip's background color will be black, or vice versa.

## Window Modes

The widget supports two display modes:

### Sidebar Mode (Default)
The traditional sidebar experience where the chat window slides in from the right edge of the screen.

### Floating Mode
A modern modal-style experience where the chat opens as a centered floating window.

**Usage:**
```html
<script async src="https://widget.gurubase.io/widget.latest.min.js" 
    data-widget-id="YOUR_WIDGET_ID"
    data-window-mode="floating"
    id="guru-widget-id">
</script>
```

## Exposed Functions

- `switchTheme(lightMode = null)`
  
  You can use this function to sync the theme of the widget with the theme of your website. It accepts an optional `lightMode` boolean parameter to force the widget to be in light/dark mode. 3 possible usages of this function:
  - `switchTheme()`: Toggle the theme
  - `switchTheme(true)`: Force light mode
  - `switchTheme(false)`: Force dark mode
  
  This function can be accessed with `window.chatWidget.switchTheme();`

  An example usage is shown in the [MKDocs](https://github.com/Gurubase/gurubase-widget/tree/master/examples/mkdocs/docs/js/theme-switch.js) example in the `theme-switch.js` script. It toggles the theme of the widget based on the MkDocs website by listening for changes in the theme and using this function with each change. 

> [!NOTE] 
> It is advised to use `data-light-mode="auto"` instead. If this does not work for your website, feel free to contact us.

## Path-Based Widget Loading

If you want to load the widget only on specific paths (e.g., only on `/docs/` pages), you can use a conditional loading approach. This is especially useful for Single Page Applications (SPAs) where you need to handle client-side navigation.

Below is an example for [Docusaurus](https://github.com/Gurubase/gurubase-widget/tree/master/examples/docusaurus) that loads the widget only on `/docs/` paths:

<details>
<summary>Docusaurus Plugin Example</summary>

Create a file at `plugins/gurubase-widget.js`:

```javascript
module.exports = (_context) => ({
  name: "docusaurus-plugin-gurubase-widget",
  injectHtmlTags() {
    return {
      postBodyTags: [
        {
          tagName: "script",
          innerHTML: `
                (function() {
                  // Configuration options: https://github.com/Gurubase/gurubase-widget
                  // Only activate on docs endpoint
                  var widgetInitialized = false;

                  function initWidget() {
                    if (widgetInitialized) return;
                    if (!window.location.pathname.startsWith('/docs/')) return;

                    var existingScript = document.getElementById('guru-widget-id');
                    if (existingScript) return;

                    var script = document.createElement('script');
                    script.src = "https://widget.gurubase.io/widget.latest.min.js";
                    script.setAttribute("data-widget-id", "YOUR_WIDGET_ID");
                    script.setAttribute("data-text", "Ask AI");
                    script.setAttribute("data-margins", '{"bottom": "20px", "right": "20px"}');
                    script.setAttribute("data-light-mode", "auto");
                    script.defer = true;
                    script.id = "guru-widget-id";
                    document.body.appendChild(script);
                    widgetInitialized = true;
                  }

                  function destroyWidget() {
                    if (!widgetInitialized) return;

                    // Use widget's destroy method if available
                    if (window.chatWidget && typeof window.chatWidget.destroy === 'function') {
                      window.chatWidget.destroy();
                    }

                    // Remove the script tag
                    var script = document.getElementById('guru-widget-id');
                    if (script) script.remove();

                    // Remove widget instance
                    if (window.chatWidget) {
                      delete window.chatWidget;
                    }
                    if (window.ChatWidget) {
                      delete window.ChatWidget;
                    }

                    // Remove all widget-related DOM elements
                    // These selectors target the actual Gurubase widget elements
                    var selectors = [
                      '#guru-widget-id',                    // The script tag
                      '#gurubase-chat-widget-container'     // The widget container
                    ];
                    
                    selectors.forEach(function(selector) {
                      try {
                        document.querySelectorAll(selector).forEach(function(el) {
                          el.remove();
                        });
                      } catch (e) {}
                    });

                    widgetInitialized = false;
                  }

                  function handleRouteChange() {
                    if (window.location.pathname.startsWith('/docs/')) {
                      initWidget();
                    } else {
                      destroyWidget();
                    }
                  }

                  // Check on initial page load
                  handleRouteChange();

                  // Hook into History API for SPA client-side navigation
                  var originalPushState = history.pushState;
                  history.pushState = function() {
                    originalPushState.apply(this, arguments);
                    setTimeout(handleRouteChange, 0);
                  };

                  var originalReplaceState = history.replaceState;
                  history.replaceState = function() {
                    originalReplaceState.apply(this, arguments);
                    setTimeout(handleRouteChange, 0);
                  };

                  // Handle browser back/forward buttons
                  window.addEventListener('popstate', function() {
                    setTimeout(handleRouteChange, 0);
                  });
                })();
              `,
        },
      ],
    };
  },
});
```

Then register the plugin in your `docusaurus.config.js`:

```javascript
module.exports = {
  // ... other config
  plugins: [
    './plugins/gurubase-widget.js',
  ],
};
```

</details>

**Key points:**
- The `initWidget()` function checks the current path before loading the widget
- The `destroyWidget()` function cleans up all widget-related DOM elements when navigating away
- History API hooks (`pushState`, `replaceState`, `popstate`) handle SPA navigation
- Modify the path check (`/docs/`) to match your desired paths

This approach can be adapted for other frameworks like Next.js, Remix, or any SPA that uses the History API for navigation.

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
- [Sphinx - Read the Docs](https://github.com/Gurubase/gurubase-widget/tree/master/examples/sphinx)
- [Retype](https://github.com/Gurubase/gurubase-widget/tree/master/examples/retype)
- [GitBook](https://www.gitbook.com/integrations/gurubase)
