# Example Sphinx Documentation

## Usage

1. Make the build script executable:
   ```bash
   chmod +x build.sh
   ```

2. Build the documentation:
   ```bash
   ./build.sh
   ```

3. Open the built documentation in your browser:
   ```bash
   open _build/html/index.html  # On Windows, use: start _build/html/index.html
   ```

## Customizing the GuruBase Widget

To customize the GuruBase AI Chat Widget:

1. Open `_static/gurubase-widget.js`
2. Replace `YOUR_WIDGET_ID` with your actual GuruBase Widget ID
3. Adjust other settings as needed:
   - `text`: The button text
   - `margins`: Button positioning
   - `lightMode`: Color theme preference

## Project Files

- `conf.py`: Contains all the Sphinx configuration settings
- `index.rst`: The documentation homepage and table of contents
- `intro.rst`: A sample introduction page
- `api.rst`: A sample API documentation page
- `build.sh`: Script to build the HTML documentation
- `requirements.txt`: Lists the Python packages required
- `_static/gurubase-widget.js`: GuruBase widget configuration file
