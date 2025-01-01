import { type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "API Reference - Documentation" },
    { description: "Complete API reference documentation" },
  ];
};

export default function Api() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">API Reference</h1>
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Methods</h2>
          
          <div className="border rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold mb-2">initialize()</h3>
            <p className="mb-2">Initializes the application with default settings.</p>
            <pre className="bg-gray-100 p-4 rounded">
              <code>{`// Example
await initialize({
  apiKey: 'your-api-key',
  environment: 'production'
});`}</code>
            </pre>
          </div>

          <div className="border rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold mb-2">configure(options)</h3>
            <p className="mb-2">Configures the application with custom settings.</p>
            <pre className="bg-gray-100 p-4 rounded">
              <code>{`// Example
configure({
  theme: 'dark',
  language: 'en',
  timeout: 5000
});`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Events</h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">
              <code className="bg-gray-100 px-2 py-1 rounded">onConnect</code> - Triggered when connection is established
            </li>
            <li className="mb-2">
              <code className="bg-gray-100 px-2 py-1 rounded">onDisconnect</code> - Triggered when connection is lost
            </li>
            <li className="mb-2">
              <code className="bg-gray-100 px-2 py-1 rounded">onError</code> - Triggered when an error occurs
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
} 