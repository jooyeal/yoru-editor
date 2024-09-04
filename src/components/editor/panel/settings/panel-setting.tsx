import { Accordion } from "@/components/ui/accordion";
import PanelContent from "./panel-content";
import PanelTypography from "./panel-typography";
import PanelDimension from "./panel-dimension";
import PanelFlexbox from "./panel-flexbox";
import PanelBackground from "./panel-background";
import PanelOthers from "./panel-others";
import { useEditorContext } from "@/providers/editor-provider";

export default function PanelSetting() {
  const editorContext = useEditorContext();
  if (!editorContext.selectedElement) return null;

  return (
    <div>
      <div className="border-b p-2">
        <h4 className="text-xl font-semibold tracking-tight">Setting</h4>
        <p className="text-sm text-muted-foreground">
          선택한 요소의 스타일 수정이 가능합니다
        </p>
      </div>
      <Accordion type="multiple" className="p-2">
        <PanelContent {...editorContext} />
        <PanelTypography {...editorContext} />
        <PanelDimension {...editorContext} />
        <PanelFlexbox {...editorContext} />
        <PanelBackground {...editorContext} />
        <PanelOthers {...editorContext} />
      </Accordion>
    </div>
  );
}
