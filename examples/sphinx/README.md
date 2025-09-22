# Sphinx Example for Gurubase Widget

This example demonstrates how to integrate the Gurubase AI widget into a Sphinx documentation site using the Read the Docs theme.

## Quick Start

### 1. Set up Python Virtual Environment

```bash
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Build Documentation

```bash
# Make sure virtual environment is activated
source venv/bin/activate

# Build the documentation
sphinx-build -b html . _build/html
```

### 3. Serve Locally

```bash
cd _build/html
python3 -m http.server 8082
```

Visit `http://localhost:8082` to view your documentation.

## Gurubase Widget Integration

The widget is already integrated! Here's how it works:

### Widget Configuration

The widget script is located in `_static/gurubase-widget.js`. To customize it:

1. **Replace `YOUR_WIDGET_ID`** with your actual Gurubase widget ID
2. **Optional customizations:**
   - `text`: Button text (default: "Ask AI")
   - `margins`: Widget position margins
   - `lightMode`: Theme mode ("light", "dark", or "auto")
   - `bgColor`: Widget background color
   - `iconUrl`: Custom icon URL
   - `name`: Widget name

### Sphinx Configuration

The `conf.py` file is already configured with:

```python
html_static_path = ['_static']
html_js_files = ['gurubase-widget.js']
```

This ensures the widget script is included on all pages.

## Project Structure

```
sphinx/
├── _static/
│   └── gurubase-widget.js    # Widget integration script
├── _build/
│   └── html/                 # Generated documentation
├── conf.py                   # Sphinx configuration
├── requirements.txt          # Python dependencies
├── build.sh                  # Build script
├── index.rst                 # Main documentation page
├── intro.rst                 # Introduction page
└── api.rst                   # API documentation
```

## Customization

### Adding New Pages

1. Create new `.rst` files in the root directory
2. Add them to `index.rst` in the `toctree` section
3. Rebuild with `sphinx-build -b html . _build/html`

### Styling

- Modify `conf.py` for theme options
- Add custom CSS to `_static/` directory
- Update `html_css_files` in `conf.py` to include custom stylesheets

## Troubleshooting

### Python Environment Issues

If you encounter "externally-managed-environment" errors:
- Always use the virtual environment: `source venv/bin/activate`
- Never install packages globally with `pip install`

### Widget Not Appearing

1. Check browser console for JavaScript errors
2. Verify your widget ID is correct
3. Ensure the script is loading: check Network tab in browser dev tools
4. Rebuild documentation after making changes

## Dependencies

- `sphinx==7.2.6`: Documentation generator
- `sphinx-rtd-theme==2.0.0`: Read the Docs theme
