"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface TogglableButtons {
  trigger: string;
  children?: React.ReactNode;
}
export default function ToggelableButtons({
  trigger,
  children,
}: TogglableButtons) {
  const [isOpen, setIsOpen] = useState(false);
  function toggleVisibility() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="flex flex-col gap-1">
      <Button
        className={`w-full justify-start ${isOpen && "bg-slate-100"}`}
        variant={"ghost"}
        onClick={toggleVisibility}
      >
        {trigger}
      </Button>
      {isOpen && <div className="flex flex-col gap-1">{children}</div>}
    </div>
  );
}
