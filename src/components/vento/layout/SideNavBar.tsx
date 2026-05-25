import { cn } from "@/lib/utils";

const navItems = [
  { label: "My Day", icon: "sunny", href: "#" },
  { label: "Important", icon: "star", href: "#" },
  { label: "Planned", icon: "calendar_month", href: "#" },
  { label: "Tasks", icon: "task_alt", href: "#" },
];

export function SideNavBar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-[288px] border-r border-vento-neutral-200 bg-white/80 backdrop-blur-md z-50 flex flex-col py-8 hidden md:flex">
      <div className="px-6 mb-10">
        <h1 className="text-2xl font-bold text-primary">Ethereal Focus</h1>
        <p className="text-sm text-vento-neutral-500">Stay productive</p>
      </div>
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            className={cn(
              "flex items-center gap-3 px-4 py-3 font-medium transition-colors",
              item.label === "My Day" 
                ? "bg-primary/10 text-primary border-l-4 border-primary" 
                : "text-vento-neutral-600 hover:bg-vento-neutral-100"
            )}
            href={item.href}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="px-4 mt-auto space-y-4">
        <button className="w-full py-3 px-4 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
          <span className="material-symbols-outlined">add</span>
          New List
        </button>
      </div>
    </aside>
  );
}
