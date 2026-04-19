import { useRef } from "react";
import { useTheme, accentPresets, wallpaperPresets } from "@/contexts/ThemeContext";
import {
  Settings as SettingsIcon,
  Sun,
  Moon,
  Palette,
  Type,
  LayoutGrid,
  Image as ImageIcon,
  Upload,
  X,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/PageHeader";
import { toast } from "sonner";

export default function SettingsPage() {
  const {
    settings,
    setMode,
    setAccentColor,
    setFontSize,
    setDensity,
    setWallpaper,
    setCustomWallpaper,
    setWallpaperOpacity,
    setWallpaperBlur,
  } = useTheme();
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 4 * 1024 * 1024) {
      toast.error("Image too large — please use under 4 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setCustomWallpaper(reader.result as string);
      toast.success("Wallpaper updated");
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto animate-fade-in">
      <PageHeader
        icon={SettingsIcon}
        title="Settings"
        subtitle="Personalise the appearance, wallpaper and layout of your workspace."
      />

      <div className="space-y-6">
        {/* Theme Mode */}
        <div className="glass-card !p-5">
          <div className="flex items-center gap-2 mb-4">
            {settings.mode === "dark" ? (
              <Moon className="h-4 w-4 text-primary" />
            ) : (
              <Sun className="h-4 w-4 text-primary" />
            )}
            <h2 className="text-sm font-display font-semibold text-foreground">Theme Mode</h2>
          </div>
          <div className="flex items-center gap-3">
            <Label htmlFor="theme-toggle" className="text-sm text-muted-foreground">
              {settings.mode === "dark" ? "Dark Mode" : "Light Mode"}
            </Label>
            <Switch
              id="theme-toggle"
              checked={settings.mode === "light"}
              onCheckedChange={(checked) => setMode(checked ? "light" : "dark")}
            />
          </div>
        </div>

        {/* Wallpaper */}
        <div className="glass-card !p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4 text-primary" />
              <h2 className="text-sm font-display font-semibold text-foreground">App Wallpaper</h2>
            </div>
            <button
              onClick={() => fileRef.current?.click()}
              className="text-xs px-3 py-1.5 rounded-lg border border-border/60 hover:border-primary/40 hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <Upload className="h-3 w-3" /> Upload
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleUpload}
            />
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
            {wallpaperPresets.map((p) => {
              const active = settings.wallpaper === p.id && (p.id === "none" || settings.customWallpaper === null || true);
              const isActive = settings.wallpaper === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setWallpaper(p.id)}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all tap-scale ${
                    isActive ? "border-primary shadow-lg shadow-primary/30" : "border-border/40 hover:border-primary/40"
                  }`}
                  style={{ background: p.value, backgroundSize: "cover" }}
                  title={p.name}
                >
                  <span className="absolute inset-x-0 bottom-0 px-1.5 py-1 text-[10px] font-medium bg-black/50 text-white text-center backdrop-blur-sm">
                    {p.name}
                  </span>
                </button>
              );
            })}
            {settings.customWallpaper && (
              <button
                onClick={() => setWallpaper("custom")}
                className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all tap-scale ${
                  settings.wallpaper === "custom"
                    ? "border-primary shadow-lg shadow-primary/30"
                    : "border-border/40 hover:border-primary/40"
                }`}
                style={{
                  backgroundImage: `url(${settings.customWallpaper})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                title="Custom"
              >
                <span className="absolute inset-x-0 bottom-0 px-1.5 py-1 text-[10px] font-medium bg-black/50 text-white text-center backdrop-blur-sm">
                  Custom
                </span>
                <span
                  role="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCustomWallpaper(null);
                    setWallpaper("emerald-mesh");
                    toast.success("Custom wallpaper removed");
                  }}
                  className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-destructive transition-colors"
                >
                  <X className="h-3 w-3" />
                </span>
              </button>
            )}
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <Label className="text-xs text-muted-foreground">Overlay opacity</Label>
                <span className="text-[10px] text-muted-foreground">
                  {Math.round(settings.wallpaperOpacity * 100)}%
                </span>
              </div>
              <Slider
                value={[settings.wallpaperOpacity * 100]}
                onValueChange={([v]) => setWallpaperOpacity(v / 100)}
                min={0}
                max={95}
                step={5}
              />
              <p className="text-[10px] text-muted-foreground mt-1">
                Higher = darker overlay for better text readability.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <Label className="text-xs text-muted-foreground">Wallpaper blur</Label>
                <span className="text-[10px] text-muted-foreground">{settings.wallpaperBlur}px</span>
              </div>
              <Slider
                value={[settings.wallpaperBlur]}
                onValueChange={([v]) => setWallpaperBlur(v)}
                min={0}
                max={20}
                step={1}
              />
            </div>
          </div>
        </div>

        {/* Accent Color */}
        <div className="glass-card !p-5">
          <div className="flex items-center gap-2 mb-4">
            <Palette className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-display font-semibold text-foreground">Accent Color</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {accentPresets.map((preset) => (
              <button
                key={preset.name}
                onClick={() => setAccentColor(preset.value)}
                className={`flex flex-col items-center gap-1.5 p-2 rounded-lg border transition-all ${
                  settings.accentColor === preset.value
                    ? "border-primary bg-primary/10"
                    : "border-border/50 hover:border-primary/30"
                }`}
              >
                <div
                  className="w-8 h-8 rounded-full border-2 border-background"
                  style={{ backgroundColor: `hsl(${preset.value})` }}
                />
                <span className="text-[10px] text-muted-foreground">{preset.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Font Size */}
        <div className="glass-card !p-5">
          <div className="flex items-center gap-2 mb-4">
            <Type className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-display font-semibold text-foreground">Font Size</h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">A</span>
            <Slider
              value={[settings.fontSize]}
              onValueChange={([v]) => setFontSize(v)}
              min={12}
              max={20}
              step={1}
              className="flex-1"
            />
            <span className="text-lg text-muted-foreground">A</span>
            <span className="text-xs text-muted-foreground w-8 text-right">{settings.fontSize}px</span>
          </div>
        </div>

        {/* Layout Density */}
        <div className="glass-card !p-5">
          <div className="flex items-center gap-2 mb-4">
            <LayoutGrid className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-display font-semibold text-foreground">Layout Density</h2>
          </div>
          <div className="flex gap-2">
            {(["compact", "normal", "spacious"] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDensity(d)}
                className={`flex-1 py-2 px-3 rounded-lg border text-xs font-medium capitalize transition-all ${
                  settings.density === d
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border/50 text-muted-foreground hover:border-primary/30"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
