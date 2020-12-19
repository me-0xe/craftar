import React from "react";
import { fabric } from "fabric";

export default function ToolboxSection(props: any) {

  return (
    <div className="toolbox-section">
        <h3>{props.heading}</h3>
         {props.children}
    </div>
  );
}
