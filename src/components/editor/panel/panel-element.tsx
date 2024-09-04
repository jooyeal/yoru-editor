import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TEditorElement } from "@/types/editor";
import { ContainerIcon, ImageIcon, LinkIcon, TextIcon } from "lucide-react";
import React from "react";

export default function PanelElement({ type }: { type: TEditorElement }) {
  const handleDragStart = (e: React.DragEvent, type: TEditorElement | null) => {
    if (type === null) return;
    e.dataTransfer.setData("elementType", type);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            className="border w-10 h-10 flex justify-center items-center rounded-md cursor-pointer hover:bg-slate-200"
            draggable
            onDragStart={(e) => handleDragStart(e, type)}
          >
            {type === "container" ? (
              <ContainerIcon />
            ) : type === "label" ? (
              <TextIcon />
            ) : type === "link" ? (
              <LinkIcon />
            ) : type === "image" ? (
              <ImageIcon />
            ) : null}
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>
            {type === "container"
              ? "Container"
              : type === "label"
              ? "Label"
              : type === "link"
              ? "Link"
              : type === "image"
              ? "Image"
              : null}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
