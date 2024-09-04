import { Accordion } from "@/components/ui/accordion";
import { useEditorContext } from "@/providers/editor-provider";
import PanelContent from "./panel-content";
import PanelTypography from "./panel-typography";
import PanelDimension from "./panel-dimension";
import PanelFlexbox from "./panel-flexbox";
import PanelBackground from "./panel-background";
import PanelOthers from "./panel-others";

export default function PanelSettingLabel() {
  const editorContext = useEditorContext();
  if (!editorContext.selectedElement) return null;

  return (
    <Accordion type="multiple" className="p-2">
      <PanelContent {...editorContext} />
      <PanelTypography {...editorContext} />
      <PanelDimension {...editorContext} />
      <PanelFlexbox {...editorContext} />
      <PanelBackground {...editorContext} />
      <PanelOthers {...editorContext} />
    </Accordion>
  );
}
