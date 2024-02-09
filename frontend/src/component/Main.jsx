import React from "react";
import { ToolBar } from "./ToolBar";
import { Displaycards } from "./Displaycards";

export const Main = () => {
  return (
    <div className="flex">
      <ToolBar />
      <Displaycards />
    </div>
  );
};
