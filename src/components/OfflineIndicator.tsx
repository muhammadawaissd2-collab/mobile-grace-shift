import { WifiOff } from "lucide-react";
import { useOnline } from "@/hooks/use-online";

export function OfflineIndicator() {
  const online = useOnline();
  if (online) return null;
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-secondary/90 backdrop-blur-md border border-border/60 rounded-full px-4 py-2 text-xs font-medium text-foreground shadow-lg">
      <WifiOff className="h-3.5 w-3.5 text-amber-400" />
      Offline — clinical data still available, AI disabled
    </div>
  );
}
