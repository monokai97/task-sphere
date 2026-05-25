import { SideNavBar } from "@/components/vento/layout/SideNavBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-vento-neutral-50 flex">
      <SideNavBar />
      <main className="md:ml-[288px] flex-1 flex flex-col relative">
        {children}
      </main>
    </div>
  );
}
