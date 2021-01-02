import React, { useState } from "react";
import AssetToolbox from "./components/asset-toolbox/toolbox";
import Canvas from "./components/canvas";
import CanvasContext from "./components/canvas-context";
import ModificationToolbox from "./components/modification-toolbox/toolbox";

interface selectedObject {
  id: string,
  type: string
}
export default function App() {

  const [canvasObjects, setCanvasObjects] = useState<any>([]);
  const [selectedObject, setSelectedObject] = useState<selectedObject>();
  const addObject = (newObject: any) => {
    setCanvasObjects([...canvasObjects, newObject]);
  };

  const onActiveObject = (id: any, type: any) => {
    setSelectedObject({id, type});
  };

  return (
    <div className="App">
    <CanvasContext.Provider value={{ objects: canvasObjects, addObject }}>
        <AssetToolbox />
        <Canvas onActiveObject={onActiveObject} />
        <ModificationToolbox selectedObject={selectedObject} />
    </CanvasContext.Provider>
    </div>
  );
}
