import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Documentation Overview" },
    { name: "description", content: "Overview of the documentation" },
  ];
};

export default function DocsIndex() {
  return (
    <div className="prose lg:prose-xl mx-auto px-4 py-8">
      <h1>Documentation Overview</h1>
      <p>
        Welcome to our comprehensive documentation. Here you'll find everything you
        need to get started, along with detailed guides and API references.
      </p>
      
      <h2>Quick Links</h2>
      <ul>
        <li>Getting Started Guide</li>
        <li>API Reference</li>
        <li>Examples</li>
        <li>Tutorials</li>
      </ul>

      <h2>Latest Updates</h2>
      <p>
        Stay up to date with our latest documentation updates and improvements.
        We regularly add new content and examples to help you make the most of our platform.
      </p>
    </div>
  );
} 