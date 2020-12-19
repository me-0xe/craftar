import { fabric } from "fabric";
import { useContext } from "react";
import CanvasContext from "../../../canvas-context";

export interface CraftarRectOptions extends fabric.IRectOptions {
  id: string,
  craftarType: string

}
export default function Box() {
  const id = 'box';
  const { addObject, objects } = useContext(CanvasContext);
  const box = new fabric.Rect({
      width: 50,
      height: 50,
      stroke: 'blue',
      fill: 'white',
      strokeWidth: 3,
      top: 20,
      left: 20,
      id: objects.filter((o: any)=> o.craftarType === id).length++,
      craftarType: id,
    } as unknown as CraftarRectOptions);

    box.on('mousedown', function() { 
      console.log('Im a box')
  });

  return (

    <button onClick= {() => { addObject(box)}}>
    Box
    </button>
  );
}
