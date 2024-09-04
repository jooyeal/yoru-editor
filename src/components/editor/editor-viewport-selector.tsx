import { Button } from "@/components/ui/button";
import { useEditorContext } from "@/providers/editor-provider";
import { TViewport } from "@/types/editor";
import { LaptopIcon, SmartphoneIcon, TabletIcon } from "lucide-react";
import React from "react";

export default function EditorViewportSelector() {
  const { viewport, handleChangeViewport } = useEditorContext();

  const handleClick = (viewport: TViewport) => {
    if (handleChangeViewport) {
      handleChangeViewport(viewport);
    }
  };

  return (
    <div className="p-2 space-x-1 border-b">
      <Button
        size="icon"
        variant={viewport === "laptop" ? "default" : "ghost"}
        onClick={() => handleClick("laptop")}
      >
        <LaptopIcon />
      </Button>
      <Button
        size="icon"
        variant={viewport === "tablet" ? "default" : "ghost"}
        onClick={() => handleClick("tablet")}
      >
        <TabletIcon />
      </Button>
      <Button
        size="icon"
        variant={viewport === "phone" ? "default" : "ghost"}
        onClick={() => handleClick("phone")}
      >
        <SmartphoneIcon />
      </Button>
    </div>
  );
}
