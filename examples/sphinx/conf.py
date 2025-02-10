# Configuration file for the Sphinx documentation builder.

project = 'Sample Sphinx Docs'
copyright = '2024, Your Name'
author = 'Your Name'

# The full version, including alpha/beta/rc tags
release = '1.0.0'

# Add any Sphinx extension module names here
extensions = [
    'sphinx_rtd_theme',
]

# Add any paths that contain templates here
templates_path = ['_templates']

# Add any paths that contain custom static files (such as style sheets) here
html_static_path = ['_static']

# These paths are either relative to html_static_path or fully qualified paths (eg. https://...)
html_js_files = ['gurubase-widget.js']

# List of patterns to exclude
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

# HTML theme settings
html_theme = 'sphinx_rtd_theme'

# Read the Docs theme options
html_theme_options = {
    'navigation_depth': 4,
    'collapse_navigation': True,
    'sticky_navigation': True,
    'includehidden': True,
    'titles_only': False,
    'display_version': True,
    'prev_next_buttons_location': 'bottom',
    'style_external_links': True,
}

# If true, links to the reST sources are added to the pages
html_show_sourcelink = True

# Language settings
language = 'en' 