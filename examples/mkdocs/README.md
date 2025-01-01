# MkDocs Example Project

This is a basic MkDocs documentation project that demonstrates a typical documentation structure. It uses the Material theme and shows common MkDocs features.

## Project Structure

```
examples/mkdocs/
├── docs/
│   ├── index.md              # Homepage
│   ├── about.md              # About page
│   └── user-guide/           # User guide section
│       ├── getting-started.md
│       └── configuration.md
├── mkdocs.yml                # MkDocs configuration file
└── README.md                 # This file
```

## Setup Instructions

1. Install the required packages:
   ```bash
   pip install mkdocs mkdocs-material
   ```

2. Navigate to this directory:
   ```bash
   cd examples/mkdocs
   ```

3. Start the development server:
   ```bash
   mkdocs serve
   ```

4. Open your browser and visit `http://127.0.0.1:8000`

## Building the Documentation

To build the static site:

```bash
mkdocs build
```

This will create a `site` directory containing the built documentation.

