import React from "react";
import EditorControlPanelSelector from "./editor-control-panel-selector";
import { useEditorContext } from "@/providers/editor-provider";
import PanelSetting from "./panel/settings/panel-setting";
import PanelComponent from "./panel/component/panel-component";

export default function EditorControlPanel() {
  const { panel } = useEditorContext();
  return (
    <div className="w-80">
      <div className="flex">
        <div className="flex-grow">
          {panel === "components" ? <PanelComponent /> : <PanelSetting />}
        </div>
        <EditorControlPanelSelector />
      </div>
    </div>
  );
}
