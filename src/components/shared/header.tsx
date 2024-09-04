import React from "react";
import EditorViewportSelector from "../editor/editor-viewport-selector";

export default function Header() {
  return (
    <div className="flex justify-end">
      <EditorViewportSelector />
    </div>
  );
}
