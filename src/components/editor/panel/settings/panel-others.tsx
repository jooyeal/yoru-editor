import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { TEditorContext } from "@/types/editor";
import React from "react";

export default function PanelOthers({
  selectedElement,
  editStyle,
}: NonNullable<TEditorContext>) {
  if (!selectedElement) return null;

  const handleChangeOpacity = (value: number[]) => {
    editStyle(selectedElement, {
      opacity: value[0] ? value[0] / 100 : 0,
    });
  };
  const handleChangeBorderSize = (value: number[]) => {
    editStyle(selectedElement, { borderWidth: value[0] || undefined });
  };
  const handleChangeBorderColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    editStyle(selectedElement, { borderColor: e.target.value || undefined });
  };
  const handleChangeRadius = (value: number[]) => {
    editStyle(selectedElement, { borderRadius: value[0] || undefined });
  };

  return (
    <AccordionItem className="p-2" value="others">
      <AccordionTrigger>Others</AccordionTrigger>
      <AccordionContent className="p-1 space-y-3">
        <div className="space-y-2">
          <Label className="text-sm text-slate-500">Opacity</Label>
          <Slider
            value={
              selectedElement.style?.opacity !== undefined
                ? [Number(selectedElement.style?.opacity) * 100]
                : [100]
            }
            max={100}
            min={0}
            onValueChange={handleChangeOpacity}
          />
        </div>
        <div className="space-y-1">
          <Label>Border</Label>
          <div className="space-y-2">
            <div className="space-y-2">
              <Label className="text-sm text-slate-500">Color</Label>
              <Input
                value={selectedElement.style?.borderColor}
                onChange={handleChangeBorderColor}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm text-slate-500">Size</Label>
              <Slider
                value={[Number(selectedElement.style?.borderWidth ?? 0)]}
                max={50}
                min={0}
                onValueChange={handleChangeBorderSize}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm text-slate-500">Radius</Label>
              <Slider
                value={[Number(selectedElement.style?.borderRadius ?? 0)]}
                max={50}
                min={0}
                onValueChange={handleChangeRadius}
              />
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
