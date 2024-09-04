import {
  Accordion,
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
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { isEmpty } from "@/lib/common";
import { useEditorContext } from "@/providers/editor-provider";
import {
  AlignCenterIcon,
  AlignHorizontalJustifyCenterIcon,
  AlignHorizontalJustifyEndIcon,
  AlignHorizontalJustifyStartIcon,
  AlignLeftIcon,
  AlignRightIcon,
  MenuIcon,
  SplitSquareHorizontalIcon,
} from "lucide-react";

export default function PanelSettingLabel() {
  const { selectedElement, editText, editLink, editStyle } = useEditorContext();

  if (!selectedElement) return null;

  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editText) editText(selectedElement, e.target.value);
  };
  const handleChangeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editLink) editLink(selectedElement, e.target.value);
  };
  const handleChangeTextAlign = (value: string) => {
    if (editStyle)
      editStyle(selectedElement, {
        textAlign: value as "initial" | "left" | "center" | "right",
      });
  };
  const handleChangeTextColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editStyle)
      editStyle(selectedElement, {
        color: e.target.value,
      });
  };
  const handleChangeFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editStyle && !isEmpty(e.target.value)) {
      editStyle(selectedElement, { fontSize: Number(e.target.value) });
    }
  };
  const handleChangeFontWeight = (value: string) => {
    if (editStyle) editStyle(selectedElement, { fontWeight: Number(value) });
  };
  const handleChangeWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editStyle) {
      editStyle(selectedElement, { width: e.target.value });
    }
  };
  const handleChangeHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editStyle) {
      editStyle(selectedElement, { height: e.target.value });
    }
  };
  const handleChangeMargin = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "top" | "bottom" | "left" | "right"
  ) => {
    if (editStyle) {
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
    }
  };
  const handleChangePadding = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "top" | "bottom" | "left" | "right"
  ) => {
    if (editStyle) {
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
    }
  };
  const handleChangeFlexMode = (chekced: boolean) => {
    if (editStyle)
      editStyle(selectedElement, {
        display: chekced ? "flex" : undefined,
      });
  };
  const handleChangeDirection = (value: string) => {
    if (editStyle)
      editStyle(selectedElement, {
        flexDirection: value as "column" | "row",
      });
  };
  const handleChangeJustify = (value: string) => {
    if (editStyle)
      editStyle(selectedElement, {
        justifyContent: value,
      });
  };
  const handleChangeSpacing = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editStyle && !isEmpty(e.target.value)) {
      editStyle(selectedElement, { gap: Number(e.target.value) });
    }
  };
  const handleChangeBackgroundColor = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (editStyle) {
      editStyle(selectedElement, {
        backgroundColor: e.target.value || undefined,
      });
    }
  };
  const handleChangeBackgroundImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (editStyle) {
      editStyle(selectedElement, {
        backgroundImage: e.target.value || undefined,
      });
    }
  };
  const handleChangeOpacity = (value: number[]) => {
    if (editStyle) {
      editStyle(selectedElement, {
        opacity: value[0] ? value[0] / 100 : 0,
      });
    }
  };
  const handleChangeBorderSize = (value: number[]) => {
    if (editStyle) {
      editStyle(selectedElement, { borderWidth: value[0] || undefined });
    }
  };
  const handleChangeBorderColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editStyle) {
      editStyle(selectedElement, { borderColor: e.target.value || undefined });
    }
  };
  const handleChangeRadius = (value: number[]) => {
    if (editStyle) {
      editStyle(selectedElement, { borderRadius: value[0] || undefined });
    }
  };

  return (
    <Accordion type="multiple" className="p-2">
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
            <Label className="text-sm text-slate-500">
              URL (image or link)
            </Label>
            <Input
              value={selectedElement.linkUrl ?? ""}
              onChange={handleChangeLink}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
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
    </Accordion>
  );
}
