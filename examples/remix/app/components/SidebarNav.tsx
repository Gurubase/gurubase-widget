import { NavLink } from "@remix-run/react";

const navigation = [
  {
    title: "Getting Started",
    links: [
      { href: "/docs/getting-started", label: "Introduction" },
      { href: "/docs/installation", label: "Installation" },
      { href: "/docs/quick-start", label: "Quick Start" },
    ],
  },
  {
    title: "Guides",
    links: [
      { href: "/docs/guides/basics", label: "Basics" },
      { href: "/docs/guides/advanced", label: "Advanced" },
      { href: "/docs/guides/deployment", label: "Deployment" },
    ],
  },
  {
    title: "API Reference",
    links: [
      { href: "/docs/api/overview", label: "Overview" },
      { href: "/docs/api/endpoints", label: "Endpoints" },
      { href: "/docs/api/authentication", label: "Authentication" },
    ],
  },
];

export default function SidebarNav() {
  return (
    <nav className="w-64 bg-gray-50 p-6">
      <div className="space-y-8">
        {navigation.map((section) => (
          <div key={section.title}>
            <h5 className="mb-3 font-semibold text-gray-900">{section.title}</h5>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2 text-sm ${
                        isActive
                          ? "bg-gray-200 text-blue-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
} 