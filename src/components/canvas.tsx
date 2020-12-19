import React from "react";
import { fabric } from "fabric";

export default function Canvas() {
  React.useEffect(() => {
    const canvas = new fabric.Canvas("craftar-canvas");

    canvas.setHeight(900);
    canvas.setWidth(700);

    const rect = new fabric.Rect({
      width: 50,
      height: 50,
      fill: "blue",
      angle: 10,
      top: 20,
      left: 20
    });
    const textbox = new fabric.Textbox("Click on the Rectangle to move it.", {
      fontSize: 20,
      left: 50,
      top: 100,
      width: 200
    });
    canvas.add(textbox);
    canvas.add(rect);

    // UseEffect's cleanup function
    return () => {
      canvas.dispose();
    };
  }, []);

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
