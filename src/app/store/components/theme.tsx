"use client";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import Icon from "@/components/ui/icon";
export default function Theme() {
  const [darkTheme, setDarkTheme] = useState(false);
  function handleTheme() {
    if (darkTheme) {
      setDarkTheme(false);
    } else {
      setDarkTheme(true);
    }
  }
  return (
    <>
      {darkTheme ? (
        <Icon onClick={handleTheme}>
          <Sun />
        </Icon>
      ) : (
        <Icon onClick={handleTheme}>
          <Moon />
        </Icon>
      )}
    </>
  );
}
