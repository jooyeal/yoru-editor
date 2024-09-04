import { TEditorElement, TElement } from "@/types/editor";
import React from "react";
import CanvasContainer from "./canvas-container";
import CanvasLabel from "./canvas-label";
import CanvasLink from "./canvas-link";
import CanvasImage from "./canvas-image";
import { useEditorContext } from "@/providers/editor-provider";
import { TrashIcon } from "lucide-react";

export default function CanvasElementConverter({
  element,
  isViewer,
}: {
  element: TElement;
  isViewer?: boolean;
}) {
  const { selectedElement, deleteElement, selectElement, addChildElement } =
    useEditorContext();

  const convert = () => {
    switch (element.elementType) {
      case "body":
      case "container":
        return <CanvasContainer element={element} isViewer={isViewer} />;
      case "label":
        return <CanvasLabel {...element} />;
      case "link":
        return <CanvasLink element={element} isViewer={isViewer} />;
      case "image":
        return <CanvasImage {...element} />;
      default:
        return null;
    }
  };
  const handleClickTrash = () => {
    if (deleteElement) deleteElement(element.id);
  };
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectElement) selectElement(element.id);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.stopPropagation();
    const elementType = e.dataTransfer.getData("elementType");
    if (
      (element.elementType === "container" || element.elementType === "body") &&
      addChildElement &&
      elementType
    ) {
      addChildElement(element.id, elementType as TEditorElement);
    }
  };

  return (
    <div draggable>
      {isViewer ? (
        <div style={element.style}>{convert()}</div>
      ) : (
        <div
          draggable
          className={`relative ${
            element.elementType === "body" ? "w-full" : "w-fit"
          } ${
            selectedElement?.id === element.id
              ? "border border-purple-600"
              : "border border-dashed border-slate-700"
          }`}
          onClick={handleClick}
          onDrop={handleDrop}
        >
          <div style={element.style}>{convert()}</div>
          {selectedElement?.id === element.id ? (
            <div className="absolute w-full flex justify-between left-0 top-0 bg-opacity-100 opacity-100">
              <div className=" font-normal bg-purple-400 text-white p-1 rounded-b-md z-10 text-[8px] uppercase hover:opacity-100 m-0">
                <p>{selectedElement.elementType}</p>
              </div>
              <div
                className=" bg-purple-400 hover:bg-purple-600 text-white p-1 rounded-b-md cursor-pointer z-10"
                onClick={handleClickTrash}
              >
                <TrashIcon size={12} />
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
