# Pagy Documentation Example with Retype

This is a sample documentation project demonstrating how to integrate the Gurubase Widget with a Retype-based documentation site for the Pagy gem.

## Project Structure

```
examples/pagy/
├── retype.yml           # Retype configuration
├── index.md             # Home page
├── prerequisites.md     # Prerequisites guide
├── how-to.md           # How-to guide
├── api/                 # API documentation
│   └── core.md         # Core API documentation
└── README.md           # This file
```

## Setup

0. Serve the widget locally:

```bash
python server.py
```

1. Install Retype:
```bash
npm install retypeapp --global
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
retype start
```

4. Build for production:
```bash
retype build
```

## Widget Integration

The Gurubase Widget is integrated into the documentation using the following configuration in the HTML template:

```html
<script async src="../../src/widget.js" 
    data-widget-id="oSvtckI5zuBVLOXWJNSW2rJe3o7FlcbkTDXt5n2WmUw"
    data-baseUrl="http://localhost:8018"
    data-text="Ask about Pagy"
    data-margins='{"bottom": "20px", "right": "20px"}'
    data-light-mode="true"
    data-tooltip="This is a tooltip."
    data-tooltip-width="300">
</script>
```

## Customization

1. **Theme**: Edit `retype.yml` to customize the theme and navigation
2. **Content**: Modify Markdown files in the root and subdirectories
3. **Widget**: Adjust widget parameters in the HTML template

## Development

The documentation is written in Markdown and uses Retype for static site generation. Key files:

- `retype.yml`: Configuration for the documentation site
- `*.md`: Documentation content in Markdown format
- `api/*.md`: API documentation files

## Building and Deploying

1. Make changes to the Markdown files
2. Run `retype build` to generate the static site
3. Deploy the generated files from the `.retype` directory

## Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Submit a pull request 