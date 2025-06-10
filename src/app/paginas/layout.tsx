import { Barra } from "../componentes";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center">
      {/* Barra superior */}
      {/* <Barra /> */}
      
      <div className="pt-16 p-4 w-full h-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}