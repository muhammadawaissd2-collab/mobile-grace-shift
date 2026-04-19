import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type ThemeMode = "dark" | "light";
type LayoutDensity = "compact" | "normal" | "spacious";

export interface WallpaperPreset {
  id: string;
  name: string;
  /** Any valid CSS background value (gradient, image url, etc.) */
  value: string;
}

interface ThemeSettings {
  mode: ThemeMode;
  accentColor: string;
  fontSize: number;
  density: LayoutDensity;
  /** "none" | preset id | "custom" */
  wallpaper: string;
  /** Data URL when wallpaper === "custom" */
  customWallpaper: string | null;
  /** 0..1 — overlay darkness on top of wallpaper for readability */
  wallpaperOpacity: number;
  /** 0..20 px blur on the wallpaper layer */
  wallpaperBlur: number;
}

interface ThemeContextType {
  settings: ThemeSettings;
  setMode: (mode: ThemeMode) => void;
  setAccentColor: (color: string) => void;
  setFontSize: (size: number) => void;
  setDensity: (density: LayoutDensity) => void;
  setWallpaper: (id: string) => void;
  setCustomWallpaper: (dataUrl: string | null) => void;
  setWallpaperOpacity: (opacity: number) => void;
  setWallpaperBlur: (blur: number) => void;
}

export const wallpaperPresets: WallpaperPreset[] = [
  { id: "none", name: "None", value: "transparent" },
  {
    id: "emerald-mesh",
    name: "Emerald Mesh",
    value:
      "radial-gradient(circle at 20% 20%, hsl(158 90% 45% / 0.55), transparent 55%), radial-gradient(circle at 80% 30%, hsl(190 90% 50% / 0.45), transparent 55%), radial-gradient(circle at 50% 90%, hsl(280 70% 55% / 0.35), transparent 55%), linear-gradient(135deg, #06121a, #0d1f2d)",
  },
  {
    id: "midnight-aurora",
    name: "Midnight Aurora",
    value:
      "radial-gradient(ellipse at top, hsl(168 90% 45% / 0.4), transparent 60%), radial-gradient(ellipse at bottom, hsl(248 90% 60% / 0.35), transparent 60%), linear-gradient(180deg, #050a14, #0a1424)",
  },
  {
    id: "clinical-fog",
    name: "Clinical Fog",
    value:
      "radial-gradient(circle at 30% 40%, hsl(200 40% 75% / 0.18), transparent 60%), linear-gradient(180deg, #0e1418, #141b21)",
  },
  {
    id: "carbon-grid",
    name: "Carbon Grid",
    value:
      "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(180deg, #0a0d10, #14181d)",
  },
  {
    id: "sunset-rose",
    name: "Sunset Rose",
    value:
      "radial-gradient(circle at 20% 80%, hsl(346 90% 55% / 0.45), transparent 55%), radial-gradient(circle at 80% 20%, hsl(25 95% 55% / 0.4), transparent 55%), linear-gradient(135deg, #150a14, #1f0e16)",
  },
  {
    id: "deep-ocean",
    name: "Deep Ocean",
    value:
      "radial-gradient(ellipse at 50% 0%, hsl(200 90% 55% / 0.45), transparent 60%), linear-gradient(180deg, #021018, #03212e)",
  },
];

const accentPresets = [
  { name: "Emerald", value: "158 78% 48%" },
  { name: "Teal", value: "168 80% 42%" },
  { name: "Blue", value: "217 91% 60%" },
  { name: "Purple", value: "262 83% 58%" },
  { name: "Rose", value: "346 77% 50%" },
  { name: "Orange", value: "25 95% 53%" },
];

const defaultSettings: ThemeSettings = {
  mode: "dark",
  accentColor: "158 78% 48%",
  fontSize: 14,
  density: "normal",
  wallpaper: "emerald-mesh",
  customWallpaper: null,
  wallpaperOpacity: 0.6,
  wallpaperBlur: 0,
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export { accentPresets };
export type { ThemeSettings, ThemeMode, LayoutDensity };

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<ThemeSettings>(() => {
    try {
      const saved = localStorage.getItem("pt-blueprint-settings");
      return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
    } catch {
      return defaultSettings;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("pt-blueprint-settings", JSON.stringify(settings));
    } catch {
      // Likely quota exceeded with a huge custom wallpaper data URL — ignore.
    }
  }, [settings]);

  useEffect(() => {
    const root = document.documentElement;

    if (settings.mode === "light") root.classList.remove("dark");
    else root.classList.add("dark");

    root.style.setProperty("--primary", settings.accentColor);
    root.style.setProperty("--ring", settings.accentColor);
    root.style.setProperty("--sidebar-primary", settings.accentColor);
    root.style.setProperty("--sidebar-ring", settings.accentColor);

    root.style.fontSize = `${settings.fontSize}px`;

    const densityMap = { compact: "0.5rem", normal: "0.85rem", spacious: "1.1rem" };
    root.style.setProperty("--radius", densityMap[settings.density]);

    // Wallpaper
    let bg = "transparent";
    if (settings.wallpaper === "custom" && settings.customWallpaper) {
      bg = `center / cover no-repeat url("${settings.customWallpaper}")`;
    } else if (settings.wallpaper && settings.wallpaper !== "none") {
      const preset = wallpaperPresets.find((p) => p.id === settings.wallpaper);
      bg = preset ? preset.value : "transparent";
    }
    root.style.setProperty("--app-wallpaper", bg);
    root.style.setProperty("--app-wallpaper-opacity", String(settings.wallpaperOpacity));
    root.style.setProperty("--app-wallpaper-blur", `${settings.wallpaperBlur}px`);
  }, [settings]);

  const setMode = (mode: ThemeMode) => setSettings((s) => ({ ...s, mode }));
  const setAccentColor = (accentColor: string) => setSettings((s) => ({ ...s, accentColor }));
  const setFontSize = (fontSize: number) => setSettings((s) => ({ ...s, fontSize }));
  const setDensity = (density: LayoutDensity) => setSettings((s) => ({ ...s, density }));
  const setWallpaper = (wallpaper: string) => setSettings((s) => ({ ...s, wallpaper }));
  const setCustomWallpaper = (customWallpaper: string | null) =>
    setSettings((s) => ({ ...s, customWallpaper, wallpaper: customWallpaper ? "custom" : s.wallpaper }));
  const setWallpaperOpacity = (wallpaperOpacity: number) =>
    setSettings((s) => ({ ...s, wallpaperOpacity }));
  const setWallpaperBlur = (wallpaperBlur: number) =>
    setSettings((s) => ({ ...s, wallpaperBlur }));

  return (
    <ThemeContext.Provider
      value={{
        settings,
        setMode,
        setAccentColor,
        setFontSize,
        setDensity,
        setWallpaper,
        setCustomWallpaper,
        setWallpaperOpacity,
        setWallpaperBlur,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
