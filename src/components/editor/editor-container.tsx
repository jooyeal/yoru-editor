"use client";

import React from "react";
import EditorCanvas from "./editor-canvas";
import EditorControlPanel from "./editor-control-panel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EditorProvider } from "@/providers/editor-provider";
import EditorViewer from "./editor-viewer";
import Header from "../shared/header";

export default function EditorContainer() {
  return (
    <EditorProvider>
      <Header />
      <div className="flex space-x-1">
        <ScrollArea className="flex-grow h-[calc(100vh-6rem)] border rounded-md">
          <EditorCanvas />
        </ScrollArea>
        <ScrollArea className="h-[calc(100vh-6rem)] bg-white border rounded-md">
          <EditorControlPanel />
        </ScrollArea>
      </div>
      <EditorViewer />
    </EditorProvider>
  );
}
