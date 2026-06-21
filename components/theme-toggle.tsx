"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!mounted) return <div className="w-10 h-10 rounded-xl border border-border bg-background"></div>;

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }
    document.startViewTransition(() => {
      setTheme(nextTheme);
    });
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-background text-foreground/70 hover:bg-foreground/5 hover:text-foreground active:scale-90 transition-all duration-300 cursor-pointer"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 transition-transform duration-500 hover:rotate-90" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-500 hover:-rotate-12" />
      )}
    </button>
  );
}
