import { fabric } from "fabric";
import React, { useContext } from "react";
import CanvasContext from "../../../canvas-context";

export interface CraftarTextBoxOptions extends fabric.Textbox {
  id: string,
  craftarType: string

}

export default function NameTag() {
  const type = 'name-tag';
  const { addObject, objects } = useContext(CanvasContext);

  const nameTag = new fabric.Textbox("Name:____________", {
    fontSize: 20,
    left: 50,
    top: 100,
    width: 200,
    id: objects.filter((o: any)=> o.craftarType === type).length++,
    craftarType: type,
  } as unknown as CraftarTextBoxOptions);
  
  return (
    <button onClick= {() => { addObject(nameTag)}}>
    Name Tag  
    </button>
 ); 
}
