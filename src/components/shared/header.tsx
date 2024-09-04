import React from "react";
import EditorViewportSelector from "../editor/editor-viewport-selector";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="flex justify-end">
      <EditorViewportSelector />
    </div>
  );
}
