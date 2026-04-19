import {
  Home, Dumbbell, Users, AlertTriangle, BookOpen, Activity, Settings, Hand, ClipboardCheck, Bookmark, Brain, Moon, Sun, Stethoscope
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
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
  { title: "MSK Special Tests", url: "/special-tests", icon: Stethoscope },
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
  const { settings, setMode } = useTheme();

  const itemBase =
    "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 font-medium text-sm tap-scale";
  const itemIdle = "hover:bg-sidebar-accent text-sidebar-foreground/85 hover:text-sidebar-foreground";
  const itemActive =
    "bg-gradient-to-r from-primary/20 to-primary/5 text-primary shadow-[inset_0_0_0_1px_hsl(var(--primary)/0.25)]";

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-sidebar-border/60 bg-sidebar text-sidebar-foreground backdrop-blur-xl"
    >
      <SidebarHeader className="p-4 safe-top">
        {!collapsed ? (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-primary-foreground font-display font-bold text-sm leading-none">PT</span>
            </div>
            <div className="min-w-0">
              <h1 className="font-display font-bold tracking-tight text-base leading-tight text-sidebar-foreground truncate">
                PhysioPro
              </h1>
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/80 mt-0.5">
                Clinical reference
              </p>
            </div>
          </div>
        ) : (
          <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto shadow-lg shadow-primary/20">
            <span className="text-primary-foreground font-display font-bold text-sm leading-none">PT</span>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="px-2 py-3 flex flex-col">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 mb-1.5 px-3 font-semibold">
            AI Tools
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {aiTools.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={`${itemBase} ${itemIdle}`}
                      activeClassName={itemActive}
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!collapsed && <span className="leading-none">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70 mb-1.5 px-3 font-semibold">
            Clinical Reference
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {clinicalTools.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={`${itemBase} ${itemIdle}`}
                      activeClassName={itemActive}
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!collapsed && <span className="leading-none">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4 pt-3 border-t border-sidebar-border/60 safe-bottom">
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {generalTools.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={`${itemBase} ${itemIdle}`}
                      activeClassName={itemActive}
                    >
                      <item.icon className="h-5 w-5 shrink-0" />
                      {!collapsed && <span className="leading-none">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Toggle Theme">
                  <button
                    onClick={() => setMode(settings.mode === "dark" ? "light" : "dark")}
                    className={`${itemBase} ${itemIdle} w-full`}
                  >
                    {settings.mode === "dark" ? (
                      <Sun className="h-5 w-5 shrink-0" />
                    ) : (
                      <Moon className="h-5 w-5 shrink-0" />
                    )}
                    {!collapsed && <span className="leading-none">Theme</span>}
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
