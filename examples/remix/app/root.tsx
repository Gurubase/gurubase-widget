import type { LinksFunction } from "@remix-run/node";
import { GurubaseWidget } from './components/GurubaseWidget';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import globalStylesHref from "./styles/global.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStylesHref },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      <GurubaseWidget 
          widgetId="YOUR_WIDGET_ID" // Replace with your actual widget ID
          // Optional props:
          // text="Ask AI"
          // margins={{ bottom: "20px", right: "20px" }}
          // lightMode={false}
          // tooltip="This is a tooltip."
          // tooltipWidth="300"
        />        
        <div className="min-h-screen">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
