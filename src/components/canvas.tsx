import React, { useContext } from "react";
import { fabric } from "fabric";
import { initAligningGuidelines } from "./canvas-alignment";
import CanvasContext from "./canvas-context";

export default function Canvas() {
  const { objects } = useContext(CanvasContext);
  console.log(objects);
  
  React.useEffect(() => {
    const canvas = new fabric.Canvas("craftar-canvas");

    canvas.setHeight(900);
    canvas.setWidth(700);

    objects.forEach((object: fabric.Object, key: number) => {
      canvas.add(object);
      if (Object.is(objects.length - 1, key)) {
        canvas.setActiveObject(object);
      }
        
    });


    canvas.on('mouse:up', (e) => {
      if (e.target) {
        console.log(e.target)
      }
    })
    
    // UseEffect's cleanup function
    return () => {
      canvas.dispose();
    };
  }, [objects]);

  return (

        <div className="book">
          <div className="page">
              <div className="subpage">
                <canvas id="craftar-canvas"/>
              </div>    
          </div>
    </div>
  );
}
