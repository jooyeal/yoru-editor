import { TEditorContext, TElement } from "@/types/editor";
import { nanoid } from "nanoid";
import { CSSProperties } from "react";

const body = {
  id: nanoid(),
  elementType: "container",
  style: {
    padding: "0.5rem",
    width: "100%",
    height: "100vh",
  },
} satisfies TElement;

export const initialContextValue = {
  viewport: "laptop",
  panel: "components",
  editorCanvasState: [body],
} satisfies TEditorContext;

export const initialComponentStyle = {
  minHeight: "1.5rem",
  width: "400px",
  height: "auto",
} satisfies CSSProperties;
export const initialLabelStyle = {
  ...initialComponentStyle,
  fontSize: 16,
  fontWeight: 400,
  textAlign: "initial",
  color: "#000",
  width: "200px",
} satisfies CSSProperties;
export const initialImageStyle = {
  ...initialComponentStyle,
  width: "200px",
  height: "200px",
} satisfies CSSProperties;
