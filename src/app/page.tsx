import { EmptyStateBento } from "@/components/vento/dashboard/EmptyStateBento";
import { SideNavBar } from "@/components/vento/layout/SideNavBar";

export default function Page() {
  return (
    <div className="min-h-screen bg-vento-neutral-50 flex">
      <SideNavBar />
      <main className="md:ml-[288px] flex-1 flex flex-col relative">
        <EmptyStateBento />
      </main>
    </div>
  );
}
