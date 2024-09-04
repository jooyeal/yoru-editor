import { Button } from "@/components/ui/button";
import { useEditorContext } from "@/providers/editor-provider";
import { TPanel } from "@/types/editor";
import { PlusIcon, SettingsIcon } from "lucide-react";
import React from "react";

export default function EditorControlPanelSelector() {
  const { panel, handleChangePanel } = useEditorContext();

  const handleClick = (panel: TPanel) => {
    if (handleChangePanel) handleChangePanel(panel);
  };

  return (
    <div className="flex flex-col p-2 space-y-1 border-l h-[calc(100vh-10rem)]">
      <Button
        size="icon"
        variant={panel === "components" ? "default" : "ghost"}
        onClick={() => handleClick("components")}
      >
        <PlusIcon />
      </Button>
      <Button
        size="icon"
        variant={panel === "attributes" ? "default" : "ghost"}
        onClick={() => handleClick("attributes")}
      >
        <SettingsIcon />
      </Button>
    </div>
  );
}
