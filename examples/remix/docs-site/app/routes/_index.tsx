import { type MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Documentation Home" },
    { description: "Welcome to our documentation" },
  ];
};

export default function Index() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Documentation</h1>
      <p className="mb-4">
        Get started with our comprehensive documentation to learn everything you need to know.
      </p>
      <div className="grid gap-4">
        <a href="/getting-started" className="p-4 border rounded hover:bg-gray-50">
          Getting Started Guide →
        </a>
        <a href="/api" className="p-4 border rounded hover:bg-gray-50">
          API Reference →
        </a>
      </div>
    </main>
  );
}
