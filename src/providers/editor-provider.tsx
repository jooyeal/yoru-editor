import {
  initialComponentStyle,
  initialContextValue,
  initialImageStyle,
  initialLabelStyle,
} from "@/constant/editor";
import {
  TEditorAction,
  TEditorContext,
  TEditorElement,
  TEditorCanvasState,
  TPanel,
  TViewport,
  TElement,
} from "@/types/editor";
import { nanoid } from "nanoid";
import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  CSSProperties,
} from "react";

export const EditorContext = createContext<TEditorContext>(initialContextValue);
export const useEditorContext = () => useContext(EditorContext);

const editorReducer = (
  state: TEditorCanvasState,
  action: TEditorAction
): TEditorCanvasState => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter(
        (element) =>
          element.id !== action.payload && element.parentId !== action.payload
      );
    case "SELECT":
      return state.map((element) =>
        element.id === action.payload
          ? { ...element, selected: true }
          : { ...element, selected: false }
      );
    case "ADD_CHILD":
      return [...state, action.payload];
    case "EDIT_TEXT":
      return state.map((element) =>
        element.id === action.payload.element.id
          ? { ...element, content: action.payload.content }
          : element
      );
    case "EDIT_LINK":
      return state.map((element) =>
        element.id === action.payload.element.id
          ? { ...element, linkUrl: action.payload.link }
          : element
      );
    case "EDIT_STYLE":
      return state.map((element) =>
        element.id === action.payload.element.id
          ? { ...element, style: { ...element.style, ...action.payload.style } }
          : element
      );
    default:
      return state;
  }
};

const getInitialStyle = (elementType: TEditorElement): CSSProperties => {
  switch (elementType) {
    case "container":
      return initialComponentStyle;
    case "label":
      return initialLabelStyle;
    case "link":
      return initialLabelStyle;
    case "image":
      return initialImageStyle;
    default:
      return initialComponentStyle;
  }
};

export function EditorProvider({ children }: { children: React.ReactNode }) {
  const [viewport, setViewport] = useState<TViewport>(
    initialContextValue.viewport
  );
  const [panel, setPanel] = useState<TPanel>(initialContextValue.panel);
  const [editorCanvasState, editorCanvasDispatch] = useReducer(
    editorReducer,
    initialContextValue.editorCanvasState
  );
  const selectedElement = editorCanvasState.find((element) => element.selected);

  const handleChangeViewport = (viewport: TViewport) => setViewport(viewport);
  const handleChangePanel = (panel: TPanel) => setPanel(panel);
  const addElement = (elementType: TEditorElement) => {
    const id = nanoid();
    editorCanvasDispatch({
      type: "ADD",
      payload: {
        id,
        elementType: elementType,
        style: getInitialStyle(elementType),
      },
    });
  };
  const selectElement = (id: string) => {
    editorCanvasDispatch({
      type: "SELECT",
      payload: id,
    });
  };
  const deleteElement = (id: string) => {
    editorCanvasDispatch({
      type: "DELETE",
      payload: id,
    });
  };
  const addChildElement = (parentId: string, elementType: TEditorElement) => {
    const id = nanoid();
    editorCanvasDispatch({
      type: "ADD_CHILD",
      payload: {
        id,
        parentId,
        elementType,
        style: getInitialStyle(elementType),
      },
    });
  };
  const editText = (element: TElement, content: string) => {
    editorCanvasDispatch({
      type: "EDIT_TEXT",
      payload: { element, content },
    });
  };
  const editLink = (element: TElement, link: string) => {
    editorCanvasDispatch({
      type: "EDIT_LINK",
      payload: { element, link },
    });
  };
  const editStyle = (element: TElement, style: CSSProperties) => {
    editorCanvasDispatch({
      type: "EDIT_STYLE",
      payload: { element, style },
    });
  };

  return (
    <EditorContext.Provider
      value={{
        viewport,
        panel,
        editorCanvasState,
        selectedElement,
        handleChangeViewport,
        handleChangePanel,
        addElement,
        selectElement,
        deleteElement,
        editText,
        editLink,
        addChildElement,
        editStyle,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}
