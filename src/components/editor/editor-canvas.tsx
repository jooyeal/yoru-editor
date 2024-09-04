import { useEditorContext } from "@/providers/editor-provider";
import React from "react";
import { TEditorElement } from "@/types/editor";
import CanvasElementConverter from "./canvas/canvas-element-converter";

export default function EditorCanvas() {
  const { viewport, editorCanvasState, addElement } = useEditorContext();

  const handleDrop = (e: React.DragEvent) => {
    e.stopPropagation();
    const elementType = e.dataTransfer.getData("elementType");
    if (elementType && addElement) {
      addElement(elementType as TEditorElement);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex justify-center bg-slate-800">
      <div
        className={`${
          viewport === "phone"
            ? "w-80"
            : viewport === "tablet"
            ? "w-[48rem]"
            : "flex-grow"
        } bg-white transition-all`}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {editorCanvasState
          .filter((element) => !element.parentId)
          .map((element) => (
            <CanvasElementConverter key={element.id} element={element} />
          ))}
      </div>
    </div>
  );
}
