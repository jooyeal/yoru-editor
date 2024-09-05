import { TEditorContext, TElement } from "@/types/editor";
import { nanoid } from "nanoid";
import { CSSProperties } from "react";

const body = {
  id: nanoid(),
  elementType: "body",
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
} satisfies Pick<
  NonNullable<TEditorContext>,
  "viewport" | "panel" | "editorCanvasState"
>;

export const initialComponentStyle = {
  minHeight: "1.5rem",
  width: "400px",
  height: "auto",
} satisfies CSSProperties;
export const initialContainerStyle = {
  ...initialComponentStyle,
  width: "100%",
  padding: "0.5rem",
} satisfies CSSProperties;
export const initialLabelStyle = {
  ...initialComponentStyle,
  fontSize: 16,
  fontWeight: 400,
  textAlign: "initial",
  color: "#000",
  width: "fit-content",
  minWidth: "100px",
} satisfies CSSProperties;
export const initialImageStyle = {
  ...initialComponentStyle,
  width: "200px",
  height: "200px",
} satisfies CSSProperties;
