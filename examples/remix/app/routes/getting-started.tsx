import { type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Getting Started - Documentation" },
    { description: "Learn how to get started with our platform" },
  ];
};

export default function GettingStarted() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">Getting Started</h1>
      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Installation</h2>
        <pre className="bg-gray-100 p-4 rounded">
          <code>npm install your-package-name</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Basic Usage</h2>
        <p className="mb-4">
          Here's a simple example of how to use our platform:
        </p>
        <pre className="bg-gray-100 p-4 rounded">
          <code className="language-javascript">{`import { YourComponent } from 'your-package-name';

function App() {
  return <YourComponent />;
}`}</code>
        </pre>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Next Steps</h2>
        <p>
          Check out our <a href="/api" className="text-blue-600 hover:underline">API documentation</a> for more detailed information.
        </p>
      </div>
    </main>
  );
} 