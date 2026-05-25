import { VentoPanel } from "../VentoPanel";
import { cn } from "@/lib/utils";

export function EmptyStateBento() {
  return (
    <section className="flex-1 p-4 md:p-12 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 grid-rows-6 gap-6 h-[600px] relative">
        
        {/* Bento Item 1: Greeting */}
        <VentoPanel className="md:col-span-4 md:row-span-2 bg-white/40 p-12 flex flex-col items-center justify-center text-center shadow-sm">
          <h2 className="text-4xl font-bold text-primary mb-2">Tu día está despejado</h2>
          <p className="text-lg text-vento-neutral-600">Relájate o añade una tarea para empezar</p>
        </VentoPanel>

        {/* Bento Item 2: Highlight */}
        <VentoPanel className="md:col-span-1 md:row-span-4 bg-primary/5 border-primary/10 p-8 flex flex-col justify-end gap-4 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">self_improvement</span>
          </div>
          <h3 className="font-semibold text-primary">Zen Moment</h3>
          <p className="text-sm text-vento-neutral-600">Encuentra foco en el silencio.</p>
        </VentoPanel>

        {/* Bento Item 3: Image Area */}
        <div className="md:col-span-2 md:row-span-3 rounded-3xl overflow-hidden shadow-xl border border-vento-neutral-200">
           <div className="w-full h-full bg-vento-neutral-200 flex items-center justify-center text-vento-neutral-400">
             Visual Zen Area
           </div>
        </div>

        {/* Bento Item 4: Stat */}
        <VentoPanel className="md:col-span-1 md:row-span-2 p-6 flex flex-col justify-between">
            <span className="text-xs uppercase tracking-widest text-vento-neutral-500">Productivity</span>
            <div className="text-4xl font-bold text-primary">100%</div>
        </VentoPanel>
      </div>
    </section>
  );
}
