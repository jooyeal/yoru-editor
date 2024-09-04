import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TEditorContext } from "@/types/editor";
import React from "react";

export default function PanelContent({
  selectedElement,
  editText,
  editLink,
}: NonNullable<TEditorContext>) {
  if (!selectedElement) return null;

  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    editText(selectedElement, e.target.value);
  };
  const handleChangeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    editLink(selectedElement, e.target.value);
  };

  return (
    <AccordionItem
      className="p-2"
      value="contents"
      hidden={selectedElement.elementType === "container"}
    >
      <AccordionTrigger>Contents</AccordionTrigger>
      <AccordionContent className="p-1 space-y-1">
        <div className="space-y-1">
          <Label className="text-sm text-slate-500">Content</Label>
          <Input
            value={selectedElement.content ?? ""}
            onChange={handleChangeContent}
          />
        </div>
        <div className="space-y-1">
          <Label className="text-sm text-slate-500">URL (image or link)</Label>
          <Input
            value={selectedElement.linkUrl ?? ""}
            onChange={handleChangeLink}
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
