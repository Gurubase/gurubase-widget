# Example Remix Documentation

This is a basic Remix documentation site with GuruBase AI Chat Widget integration.

## Project Structure

```
examples/remix/
├── app/
│   ├── components/
│   │   └── GurubaseWidget.tsx     # GuruBase widget component
│   ├── routes/
│   │   ├── _index.tsx            # Homepage
│   │   └── docs.tsx              # Documentation page
│   └── root.tsx                  # Root layout
├── public/
│   └── assets/                   # Static assets
├── package.json                  # Project dependencies
├── remix.config.js              # Remix configuration
└── tsconfig.json                # TypeScript configuration
```

## Usage

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   npm start
   ```

## Customizing the GuruBase Widget

1. Open `app/components/GurubaseWidget.tsx`
2. Replace `YOUR_WIDGET_ID` with your actual GuruBase Widget ID
3. Adjust the widget settings as needed:
   ```typescript
   const widgetSettings = {
     widgetId: "YOUR_WIDGET_ID",
     text: "Ask AI",
     margins: { bottom: "20px", right: "20px" },
     lightMode: false
   };
   ```

## Project Files

- `app/components/GurubaseWidget.tsx`: GuruBase widget component
- `app/root.tsx`: Root layout with widget integration
- `app/routes/`: Application routes and documentation pages
- `remix.config.js`: Remix configuration file

## Development

The widget is loaded client-side using Remix's `useEffect` hook to ensure proper browser-only execution. The component is typically mounted in the root layout to make it available across all routes.
