# Configuration

The configuration file (`mkdocs.yml`) is the heart of your MkDocs project.

## Basic Configuration

```yaml
site_name: My Docs
theme: material

nav:
  - Home: index.md
  - About: about.md
```

## Theme Customization

You can customize the theme by adding theme-specific options:

```yaml
theme:
  name: material
  palette:
    primary: indigo
    accent: indigo
  features:
    - navigation.tabs
    - navigation.sections
``` 