"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "../../@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../@/components/ui/dropdown-menu";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {resolvedTheme === "light" && (
          <Button
            variant="themeSwitch"
            size="icon"
            onClick={() => setTheme("dark")}
          >
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          </Button>
        )}
        {resolvedTheme === "dark" && (
          <Button size="icon" onClick={() => setTheme("light")}>
            <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all" />
          </Button>
        )}
        {resolvedTheme === "system" && (
          <>
            {theme === "light" && (
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            )}
            {theme === "dark" && (
              <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all" />
            )}
          </>
        )}
        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
