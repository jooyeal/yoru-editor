import { useEditorContext } from "@/providers/editor-provider";
import PanelSettingLabel from "./panel-setting-label";

export default function PanelSetting() {
  return (
    <div>
      <div className="border-b p-2">
        <h4 className="text-xl font-semibold tracking-tight">Setting</h4>
        <p className="text-sm text-muted-foreground">
          선택한 요소의 스타일 수정이 가능합니다
        </p>
      </div>
      <PanelSettingLabel />
    </div>
  );
}
