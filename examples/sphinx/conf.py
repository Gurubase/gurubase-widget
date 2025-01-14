# Configuration file for the Sphinx documentation builder.

project = 'Sample Sphinx Docs'
copyright = '2024, Your Name'
author = 'Your Name'

# The full version, including alpha/beta/rc tags
release = '1.0.0'

# Add any Sphinx extension module names here
extensions = []

# Add any paths that contain templates here
templates_path = ['_templates']

# Add any paths that contain custom static files (such as style sheets) here
html_static_path = ['_static']

# These paths are either relative to html_static_path or fully qualified paths (eg. https://...)
html_js_files = ['gurubase-widget.js']

# List of patterns to exclude
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

# HTML theme settings
html_theme = 'alabaster' 