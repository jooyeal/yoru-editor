import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { isNumber } from "@/lib/common";
import { TEditorContext } from "@/types/editor";
import {
  AlignHorizontalJustifyCenterIcon,
  AlignHorizontalJustifyEndIcon,
  AlignHorizontalJustifyStartIcon,
  SplitSquareHorizontalIcon,
} from "lucide-react";
import React from "react";

export default function PanelFlexbox({
  selectedElement,
  editStyle,
}: NonNullable<TEditorContext>) {
  if (!selectedElement) return null;

  const handleChangeFlexMode = (chekced: boolean) => {
    editStyle(selectedElement, {
      display: chekced ? "flex" : undefined,
    });
  };
  const handleChangeDirection = (value: string) => {
    editStyle(selectedElement, {
      flexDirection: value as "column" | "row",
    });
  };
  const handleChangeJustify = (value: string) => {
    editStyle(selectedElement, {
      justifyContent: value,
    });
  };
  const handleChangeSpacing = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      editStyle(selectedElement, { gap: Number(e.target.value) });
    }
  };

  return (
    <AccordionItem className="p-2" value="flexbox">
      <AccordionTrigger>Flex box</AccordionTrigger>
      <AccordionContent className="p-1 space-y-3">
        <div className="flex items-center space-x-1">
          <Switch
            checked={selectedElement.style?.display === "flex"}
            onCheckedChange={handleChangeFlexMode}
          />
          <Label className="text-sm text-slate-500">Flex mode</Label>
        </div>
        <div className="flex space-x-1">
          <div className="space-y-1">
            <Label className="text-sm text-slate-500">Direction</Label>
            <Select
              value={String(selectedElement.style?.flexDirection)}
              onValueChange={handleChangeDirection}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a direction" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="row">horizontal</SelectItem>
                  <SelectItem value="column">vertical</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label className="text-sm text-slate-500">Spacing</Label>
            <Input
              type="number"
              value={selectedElement.style?.gap}
              onChange={handleChangeSpacing}
            />
          </div>
        </div>
        <div className="space-y-1">
          <Label className="text-sm text-slate-500">Justify</Label>
          <ToggleGroup
            type="single"
            value={selectedElement.style?.justifyContent}
            onValueChange={handleChangeJustify}
          >
            <ToggleGroupItem value="flex-start" aria-label="Toggle bold">
              <AlignHorizontalJustifyStartIcon className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Toggle italic">
              <AlignHorizontalJustifyCenterIcon className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="flex-end" aria-label="Toggle underline">
              <AlignHorizontalJustifyEndIcon className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="space-between"
              aria-label="Toggle underline"
            >
              <SplitSquareHorizontalIcon className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
