"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/components/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 
                     hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-sky-500" />
      )}
    </button>
  );
}
