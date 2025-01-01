import { Outlet } from "@remix-run/react";
import SidebarNav from "~/components/SidebarNav";

export default function DocsLayout() {
  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
} 