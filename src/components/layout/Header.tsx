"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <header className="border-b border-neutral-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          João Vale
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link href="/about" className="text-neutral-400 hover:text-foreground">
            About
          </Link>
          <Link
            href="/projects"
            className="text-neutral-400 hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-neutral-400 hover:text-foreground"
          >
            Contact
          </Link>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md border border-neutral-700 px-3 py-1 text-xs transition hover:bg-neutral-900"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
    </header>
  );
}
