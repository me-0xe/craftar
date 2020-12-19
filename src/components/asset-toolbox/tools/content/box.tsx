import { fabric } from "fabric";
import React, { useContext } from "react";
import CanvasContext from "../../../canvas-context";

export default function Box() {
  const { addObject } = useContext(CanvasContext);
  const box = new fabric.Rect({
    width: 50,
    height: 50,
    stroke: 'blue',
    fill: "white",
    strokeWidth: 3,
    top: 20,
    left: 20
  });
  return (

    <button onClick= {() => { addObject(box)}}>
    Box
    </button>
  );
}
