import React, { useContext } from "react";
import { fabric } from "fabric";
import { initAligningGuidelines } from "./canvas-alignment";
import CanvasContext from "./canvas-context";

export default function Canvas(props: any) {
  const { objects } = useContext(CanvasContext);
  const { onActiveObject } = props;
  
  React.useEffect(() => {
    const canvas = new fabric.Canvas("craftar-canvas");
    initAligningGuidelines(canvas);

    canvas.setHeight(900);
    canvas.setWidth(700);

    objects.forEach((object: fabric.Object, key: number) => {
      canvas.add(object);
      if (Object.is(objects.length - 1, key)) {
        canvas.setActiveObject(object);
        onActiveObject((object as any).id,(object as any).craftarType );
      }
        
    });


    canvas.on('mouse:up', (e) => {
      if (e.target) {
        onActiveObject((e.target as any).id, ((e.target as any).craftarType));
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
