import { fabric } from "fabric";
import React, { useContext } from "react";
import CanvasContext from "../../../canvas-context";

export default function NameTag() {
  const { addObject } = useContext(CanvasContext);
  const nameTag = new fabric.Textbox("Name:____________", {
    fontSize: 20,
    left: 50,
    top: 100,
    width: 200
  });
  
  return (
    <button onClick= {() => { addObject(nameTag)}}>
    Name Tag  
    </button>
 ); 
}
