import { useEditorContext } from "@/providers/editor-provider";
import { TElement } from "@/types/editor";
import React from "react";
import EditorElementConverter from "./canvas-element-converter";

export default function CanvasContainer({
  element: { id },
  isViewer,
}: {
  element: TElement;
  isViewer?: boolean;
}) {
  const { editorCanvasState } = useEditorContext();

  return editorCanvasState
    .filter((element) => element.parentId === id)
    ?.map((child) => (
      <EditorElementConverter
        key={child.id}
        element={child}
        isViewer={isViewer}
      />
    ));
}
