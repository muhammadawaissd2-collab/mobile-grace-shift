import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useLocation } from "react-router-dom";

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <SidebarProvider>
      <div className="dynamic-bg" />
      <div className="min-h-screen flex w-full relative">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0 relative">
          {/* Top app bar — sticky, glassy, with safe-area top inset */}
          <header className="sticky top-0 z-30 safe-top">
            <div className="h-14 flex items-center gap-2 px-3 backdrop-blur-xl bg-background/70 border-b border-border/60">
              <SidebarTrigger className="text-muted-foreground hover:text-foreground rounded-lg h-9 w-9 tap-scale" />
              <div className="flex items-center gap-2 ml-1">
                <div className="w-7 h-7 rounded-lg bg-gradient-primary flex items-center justify-center shadow-md">
                  <span className="text-primary-foreground font-display font-bold text-[11px]">PT</span>
                </div>
                <span className="font-display font-semibold text-foreground tracking-tight">PhysioPro</span>
              </div>
            </div>
          </header>

          <main
            className={`flex-1 overflow-auto scroll-smooth-mobile safe-bottom relative ${
              isHome ? "" : "px-4 py-5 md:px-6 md:py-7"
            }`}
          >
            <div className={isHome ? "" : "animate-fade-in max-w-5xl mx-auto"}>
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
