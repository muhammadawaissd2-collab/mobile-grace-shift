import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type ThemeMode = "dark" | "light";
type LayoutDensity = "compact" | "normal" | "spacious";

interface ThemeSettings {
  mode: ThemeMode;
  accentColor: string;
  fontSize: number;
  density: LayoutDensity;
}

interface ThemeContextType {
  settings: ThemeSettings;
  setMode: (mode: ThemeMode) => void;
  setAccentColor: (color: string) => void;
  setFontSize: (size: number) => void;
  setDensity: (density: LayoutDensity) => void;
}

const defaultSettings: ThemeSettings = {
  mode: "dark",
  accentColor: "158 78% 48%", // Emerald
  fontSize: 14,
  density: "normal",
};

const accentPresets = [
  { name: "Emerald", value: "158 78% 48%" },
  { name: "Teal", value: "168 80% 42%" },
  { name: "Blue", value: "217 91% 60%" },
  { name: "Purple", value: "262 83% 58%" },
  { name: "Rose", value: "346 77% 50%" },
  { name: "Orange", value: "25 95% 53%" },
];

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
    localStorage.setItem("pt-blueprint-settings", JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    const root = document.documentElement;

    if (settings.mode === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }

    // Apply accent color (overrides default --primary from CSS)
    root.style.setProperty("--primary", settings.accentColor);
    root.style.setProperty("--ring", settings.accentColor);
    root.style.setProperty("--sidebar-primary", settings.accentColor);
    root.style.setProperty("--sidebar-ring", settings.accentColor);

    // Font size
    root.style.fontSize = `${settings.fontSize}px`;

    // Density => radius
    const densityMap = { compact: "0.5rem", normal: "0.85rem", spacious: "1.1rem" };
    root.style.setProperty("--radius", densityMap[settings.density]);
  }, [settings]);

  const setMode = (mode: ThemeMode) => setSettings(s => ({ ...s, mode }));
  const setAccentColor = (accentColor: string) => setSettings(s => ({ ...s, accentColor }));
  const setFontSize = (fontSize: number) => setSettings(s => ({ ...s, fontSize }));
  const setDensity = (density: LayoutDensity) => setSettings(s => ({ ...s, density }));

  return (
    <ThemeContext.Provider value={{ settings, setMode, setAccentColor, setFontSize, setDensity }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
