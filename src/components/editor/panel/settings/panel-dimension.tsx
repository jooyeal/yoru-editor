import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TEditorContext } from "@/types/editor";
import React from "react";

export default function PanelDimension({
  selectedElement,
  editStyle,
}: NonNullable<TEditorContext>) {
  if (!selectedElement) return null;

  const handleChangeWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    editStyle(selectedElement, { width: e.target.value });
  };
  const handleChangeHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    editStyle(selectedElement, { height: e.target.value });
  };
  const handleChangeMargin = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "top" | "bottom" | "left" | "right"
  ) => {
    const property = (() => {
      switch (type) {
        case "top":
          return "marginTop";
        case "bottom":
          return "marginBottom";
        case "left":
          return "marginLeft";
        case "right":
          return "marginRight";
        default:
          return undefined;
      }
    })();
    if (property) editStyle(selectedElement, { [property]: e.target.value });
  };
  const handleChangePadding = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "top" | "bottom" | "left" | "right"
  ) => {
    const property = (() => {
      switch (type) {
        case "top":
          return "paddingTop";
        case "bottom":
          return "paddingBottom";
        case "left":
          return "paddingLeft";
        case "right":
          return "paddingRight";
        default:
          return undefined;
      }
    })();
    if (property) editStyle(selectedElement, { [property]: e.target.value });
  };

  return (
    <AccordionItem className="p-2" value="dimension">
      <AccordionTrigger>Dimension</AccordionTrigger>
      <AccordionContent className="p-1 space-y-3">
        <div className="space-y-1">
          <Label>Size</Label>
          <div className="flex space-x-1">
            <div className="space-y-1">
              <Label className="text-sm text-slate-500">Width</Label>
              <Input
                value={selectedElement.style?.width}
                onChange={handleChangeWidth}
              />
            </div>
            <div className="space-y-1">
              <Label className="text-sm text-slate-500">Height</Label>
              <Input
                value={selectedElement.style?.height}
                onChange={handleChangeHeight}
              />
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <Label>Margin</Label>
          <div className="flex space-x-1">
            <div className="space-y-1">
              <Label className="text-sm text-slate-500">Top</Label>
              <Input
                value={selectedElement.style?.marginTop}
                onChange={(e) => handleChangeMargin(e, "top")}
              />
            </div>
            <div className="space-y-1">
              <Label className="text-sm text-slate-500">Bottom</Label>
              <Input
                value={selectedElement.style?.marginBottom}
                onChange={(e) => handleChangeMargin(e, "bottom")}
              />
            </div>
          </div>
          <div className="flex space-x-1">
            <div className="space-y-1">
              <Label className="text-sm text-slate-500">Left</Label>
              <Input
                value={selectedElement.style?.marginLeft}
                onChange={(e) => handleChangeMargin(e, "left")}
              />
            </div>
            <div className="space-y-1">
              <Label className="text-sm text-slate-500">Right</Label>
              <Input
                value={selectedElement.style?.marginRight}
                onChange={(e) => handleChangeMargin(e, "right")}
              />
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <Label>Padding</Label>
          <div className="flex space-x-1">
            <div className="space-y-1">
              <Label className="text-sm text-slate-500">Top</Label>
              <Input
                value={selectedElement.style?.paddingTop}
                onChange={(e) => handleChangePadding(e, "top")}
              />
            </div>
            <div className="space-y-1">
              <Label className="text-sm text-slate-500">Bottom</Label>
              <Input
                value={selectedElement.style?.paddingBottom}
                onChange={(e) => handleChangePadding(e, "bottom")}
              />
            </div>
          </div>
          <div className="flex space-x-1">
            <div className="space-y-1">
              <Label className="text-sm text-slate-500">Left</Label>
              <Input
                value={selectedElement.style?.paddingLeft}
                onChange={(e) => handleChangePadding(e, "left")}
              />
            </div>
            <div className="space-y-1">
              <Label className="text-sm text-slate-500">Right</Label>
              <Input
                value={selectedElement.style?.paddingRight}
                onChange={(e) => handleChangePadding(e, "right")}
              />
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
