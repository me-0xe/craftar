import {fabric} from "fabric";
import React, { useContext } from "react";
import CanvasContext from "../../../canvas-context";

export default function Text() {

  const { addObject } = useContext(CanvasContext);
  const text = new fabric.Textbox("Text...", {
    fontSize: 20,
    left: 50,
    top: 100,
    width: 200
  })
  return (

   <p>
      <button onClick= {() => { addObject(text)}}>
    Text
    </button>
   </p>
  );
  
}
