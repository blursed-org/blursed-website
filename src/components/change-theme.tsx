"use client";

import { useTheme } from "next-themes";

import { RiMoonClearLine as MoonStars } from "react-icons/ri";
import { LuSun as Sun } from "react-icons/lu";

import { Button } from "./ui/button";

import { cn } from "@/lib/utils";

export function ChangeTheme({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant={"ghost"}
      size="icon"
      className={cn("hover:bg-transparent", className)}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <MoonStars className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
