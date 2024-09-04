import { TElement } from "@/types/editor";
import Link from "next/link";
import React from "react";

export default function CanvasLink({
  element: { content, linkUrl },
  isViewer,
}: {
  element: TElement;
  isViewer?: boolean;
}) {
  return isViewer ? (
    <Link href={linkUrl ?? "#"}>{content}</Link>
  ) : (
    <div>{content}</div>
  );
}
