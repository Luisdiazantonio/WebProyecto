import { Barra } from "../componentes";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-100 w-screen h-screen antialiased text-slate-900 selection:bg-blue-400 selection:text-white">
      {/* Barra superior */}
      <Barra />
      
      <div className="pt-16 p-4 w-full h-full overflow-y-auto bg-[#fddea8]">
        {children}
      </div>
    </div>
  );
}