import { TElement } from "@/types/editor";
import React from "react";

export default function CanvasImage({ linkUrl, style }: TElement) {
  return <img src={linkUrl} style={style} />;
}
