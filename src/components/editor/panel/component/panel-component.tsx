import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PanelElement from "../panel-element";

export default function PanelComponent() {
  return (
    <div>
      <div className="border-b p-2">
        <h4 className="text-xl font-semibold tracking-tight">Components</h4>
        <p className="text-sm text-muted-foreground">
          드래그 앤 드랍으로 레이아웃과 요소를 추가하세요
        </p>
      </div>
      <Accordion type="multiple">
        <AccordionItem className="p-2" value="layout">
          <AccordionTrigger>레이아웃</AccordionTrigger>
          <AccordionContent>
            <PanelElement type="container" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="p-2" value="element">
          <AccordionTrigger>요소</AccordionTrigger>
          <AccordionContent className="space-x-1">
            <PanelElement type="label" />
            <PanelElement type="link" />
            <PanelElement type="image" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
