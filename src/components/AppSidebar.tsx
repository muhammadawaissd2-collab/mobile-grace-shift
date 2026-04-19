import {
  Home, Dumbbell, Users, AlertTriangle, BookOpen, Activity, Settings, Hand, ClipboardCheck, Bookmark, Brain, Moon, Sun
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const clinicalTools = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Exercises", url: "/exercises", icon: Dumbbell },
  { title: "Muscles", url: "/muscles", icon: Users },
  { title: "Disorders", url: "/disorders", icon: AlertTriangle },
  { title: "Differential Diagnosis", url: "/differential-diagnosis", icon: ClipboardCheck },
  { title: "Sports Injuries", url: "/sports-injuries", icon: Activity },
  { title: "Manual Therapy", url: "/manual-therapy", icon: Hand },
  { title: "MSK Special Tests", url: "/special-tests", icon: ClipboardCheck },
  { title: "EBP Guidelines", url: "/ebp", icon: BookOpen },
];

const aiTools = [
  { title: "AI Assistant", url: "/ai-search", icon: Brain },
];

const generalTools = [
  { title: "Bookmarks", url: "/bookmarks", icon: Bookmark },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const { settings, setMode } = useTheme();

  return (
    <Sidebar collapsible="icon" className="border-r border-transparent bg-background text-foreground shadow-[4px_0_24px_var(--shadow-1)] transition-all duration-300 z-20">
      <SidebarHeader className="p-4">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center elevated-icon">
              <span className="text-primary-foreground font-display font-semibold text-base leading-none">PT</span>
            </div>
            <div className="min-w-0">
              <h1 className="font-display font-semibold tracking-tight text-base leading-tight text-foreground truncate">PhysioPro</h1>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/70 mt-0.5">Clinical reference</p>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center mx-auto elevated-icon">
            <span className="text-primary-foreground font-display font-semibold text-base leading-none">PT</span>
          </div>
        )}
      </SidebarHeader>
      <SidebarContent className="px-2 py-4 flex flex-col h-full">
        
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70 mb-2 px-3 font-semibold">
            AI Tools
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {aiTools.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300 font-light hover:bg-secondary"
                      activeClassName="elevated shadow-none text-primary"
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!collapsed && <span className="text-sm leading-none pl-1">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-5">
          <SidebarGroupLabel className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70 mb-2 px-3 font-semibold">
            Clinical Reference
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {clinicalTools.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300 font-light hover:bg-secondary mt-1"
                      activeClassName="elevated shadow-none text-primary"
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!collapsed && <span className="text-sm leading-none pl-1">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto pt-4 border-t border-border/40">
          <SidebarGroupContent>
            <SidebarMenu>
              {generalTools.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300 font-light hover:bg-secondary mt-1"
                      activeClassName="elevated text-primary"
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!collapsed && <span className="text-sm leading-none pl-1">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
              <SidebarMenuItem className="mt-2">
                <SidebarMenuButton asChild tooltip="Toggle Theme">
                  <button 
                    onClick={() => setMode(settings.mode === 'dark' ? 'light' : 'dark')}
                    className="flex w-full items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300 font-light hover:bg-secondary mt-1"
                  >
                    {settings.mode === 'dark' ? <Sun className="h-5 w-5 shrink-0 text-foreground/80" /> : <Moon className="h-5 w-5 shrink-0 text-foreground/80" />}
                    {!collapsed && <span className="text-sm leading-none pl-1 text-foreground/80">Theme</span>}
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  );
}
