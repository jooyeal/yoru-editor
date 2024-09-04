import { CSSProperties } from "react";

export type TViewport = "laptop" | "tablet" | "phone";
export type TPanel = "components" | "attributes";
export type TEditorElement = "body" | "container" | "label" | "link" | "image";
export type TElement = {
  id: string;
  parentId?: string;
  elementType: TEditorElement;
  selected?: boolean;
  content?: string;
  linkUrl?: string;
  style?: CSSProperties;
};
export type TEditorCanvasState = TElement[];
export type TEditorAction =
  | { type: "ADD"; payload: TElement }
  | { type: "DELETE"; payload: string }
  | { type: "SELECT"; payload: string }
  | { type: "ADD_CHILD"; payload: TElement }
  | { type: "EDIT_TEXT"; payload: { element: TElement; content: string } }
  | { type: "EDIT_LINK"; payload: { element: TElement; link: string } }
  | {
      type: "EDIT_STYLE";
      payload: { element: TElement; style: CSSProperties };
    };

export type TEditorContext = {
  viewport: TViewport;
  panel: TPanel;
  editorCanvasState: TEditorCanvasState;
  selectedElement?: TElement;
  handleChangeViewport: (viewport: TViewport) => void;
  handleChangePanel: (panel: TPanel) => void;
  addElement: (elementType: TEditorElement) => void;
  selectElement: (id: string) => void;
  deleteElement: (id: string) => void;
  addChildElement: (parentId: string, elementType: TEditorElement) => void;
  editText: (element: TElement, content: string) => void;
  editLink: (element: TElement, link: string) => void;
  editStyle: (element: TElement, style: CSSProperties) => void;
} | null;
