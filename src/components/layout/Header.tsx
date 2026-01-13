"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-foreground">
          João Vale
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/about"
            className="text-neutral-600 dark:text-neutral-400 hover:text-foreground transition"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="text-neutral-600 dark:text-neutral-400 hover:text-foreground transition"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="text-neutral-600 dark:text-neutral-400 hover:text-foreground transition"
          >
            Contact
          </Link>

          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="
              rounded-md px-3 py-1 text-xs font-medium
              border border-neutral-300 dark:border-neutral-700
              text-neutral-800 dark:text-neutral-200
              hover:bg-neutral-100 dark:hover:bg-neutral-800
              transition
            "
          >
            {isDark ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </nav>
    </header>
  );
}
