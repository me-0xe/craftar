import React, { useState } from "react";
import { fabric } from "fabric";

export enum ModificationSet {
  Box = "rect",
  NameTag = "name-tag",
  Text = "text",
};


export default function ModificationToolbox(props: any) {
  const { selectedObject } = props;
  const renderModifications = () => {
    switch(selectedObject?.type) {
      case ModificationSet.Box:
        return 'box component';
      default:
        return 'some nice placeholder :)';
    }
  }
  return (

    <div className="modification-toolbox">
         <h3>Modification Toolbox</h3>
    {renderModifications()}
    </div>
  );
}
