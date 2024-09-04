import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TEditorContext } from "@/types/editor";
import React from "react";

export default function PanelBackground({
  selectedElement,
  editStyle,
}: NonNullable<TEditorContext>) {
  if (!selectedElement) return null;

  const handleChangeBackgroundColor = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    editStyle(selectedElement, {
      backgroundColor: e.target.value || undefined,
    });
  };
  const handleChangeBackgroundImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    editStyle(selectedElement, {
      backgroundImage: e.target.value || undefined,
    });
  };

  return (
    <AccordionItem className="p-2" value="background">
      <AccordionTrigger>Background</AccordionTrigger>
      <AccordionContent className="p-1 space-y-3">
        <div className="space-y-2">
          <Label className="text-sm text-slate-500">Color</Label>
          <Input
            value={selectedElement.style?.backgroundColor ?? ""}
            onChange={handleChangeBackgroundColor}
          />
        </div>
        <div className="space-y-2">
          <Label className="text-sm text-slate-500">Image</Label>
          <Input
            value={selectedElement.style?.backgroundImage ?? ""}
            onChange={handleChangeBackgroundImage}
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
