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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { isNumber } from "@/lib/common";
import { TEditorContext } from "@/types/editor";
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  MenuIcon,
} from "lucide-react";
import React from "react";

export default function PanelTypography({
  selectedElement,
  editStyle,
}: NonNullable<TEditorContext>) {
  if (!selectedElement) return null;

  const handleChangeTextAlign = (value: string) => {
    editStyle(selectedElement, {
      textAlign: value as "initial" | "left" | "center" | "right",
    });
  };
  const handleChangeTextColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    editStyle(selectedElement, {
      color: e.target.value,
    });
  };
  const handleChangeFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNumber(e.target.value)) {
      editStyle(selectedElement, { fontSize: Number(e.target.value) });
    }
  };
  const handleChangeFontWeight = (value: string) => {
    editStyle(selectedElement, { fontWeight: Number(value) });
  };

  return (
    <AccordionItem
      className="p-2"
      value="typography"
      hidden={selectedElement.elementType === "container"}
    >
      <AccordionTrigger>Typography</AccordionTrigger>
      <AccordionContent className="p-1 space-y-3">
        <div className="space-y-1">
          <Label className="text-sm text-slate-500">Text Align</Label>
          <ToggleGroup
            type="single"
            value={selectedElement.style?.textAlign}
            onValueChange={handleChangeTextAlign}
          >
            <ToggleGroupItem value="initial" aria-label="Toggle bold">
              <MenuIcon className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="left" aria-label="Toggle italic">
              <AlignLeftIcon className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Toggle underline">
              <AlignCenterIcon className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Toggle underline">
              <AlignRightIcon className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="space-y-1">
          <Label className="text-sm text-slate-500">Color</Label>
          <Input
            value={selectedElement.style?.color}
            onChange={handleChangeTextColor}
          />
        </div>
        <div className="space-y-1">
          <Label className="text-sm text-slate-500">Size</Label>
          <Input
            type="number"
            value={selectedElement.style?.fontSize}
            onChange={handleChangeFontSize}
          />
        </div>

        <div className="space-y-1">
          <Label className="text-sm text-slate-500">Weight</Label>
          <Select
            value={String(selectedElement.style?.fontWeight)}
            onValueChange={handleChangeFontWeight}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a font weight" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="100">thin</SelectItem>
                <SelectItem value="200">extra-light</SelectItem>
                <SelectItem value="300">light</SelectItem>
                <SelectItem value="400">normal</SelectItem>
                <SelectItem value="500">medium</SelectItem>
                <SelectItem value="600">semi-bold</SelectItem>
                <SelectItem value="700">bold</SelectItem>
                <SelectItem value="800">extra-bold</SelectItem>
                <SelectItem value="900">black</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
