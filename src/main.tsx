import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// PWA service worker — register only in production AND not inside Lovable preview/iframe
const isInIframe = (() => { try { return window.self !== window.top; } catch { return true; } })();
const isPreviewHost =
  window.location.hostname.includes("id-preview--") ||
  window.location.hostname.includes("lovableproject.com") ||
  window.location.hostname.includes("lovable.app") && window.location.hostname.includes("id-preview");

if (isInIframe || isPreviewHost) {
  navigator.serviceWorker?.getRegistrations().then((rs) => rs.forEach((r) => r.unregister()));
} else if (import.meta.env.PROD && "serviceWorker" in navigator) {
  import("virtual:pwa-register").then(({ registerSW }) => {
    registerSW({ immediate: true });
  }).catch(() => {});
}

createRoot(document.getElementById("root")!).render(<App />);
