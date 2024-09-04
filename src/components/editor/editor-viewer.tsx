import { useEditorContext } from "@/providers/editor-provider";
import React from "react";
import CanvasElementConverter from "./canvas/canvas-element-converter";

export default function EditorViewer() {
  const { editorCanvasState } = useEditorContext();
  return (
    <div>
      {editorCanvasState
        .filter((element) => !element.parentId)
        .map((element) => (
          <CanvasElementConverter key={element.id} element={element} isViewer />
        ))}
    </div>
  );
}
