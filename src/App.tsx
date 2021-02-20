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
  const updateObject = (newObjectIndex: number, key:any, value: number) => {
    setCanvasObjects(Object.assign([], canvasObjects, {[newObjectIndex]: {...canvasObjects[newObjectIndex], [key]: value }}));
  };

  const onActiveObject = (id: any, type: any) => {
    setSelectedObject({id, type});
  };

  return (
    <div className="App">
    <CanvasContext.Provider value={{ objects: canvasObjects, addObject, updateObject }}>
        <AssetToolbox />
        <Canvas onActiveObject={onActiveObject} />
        <ModificationToolbox selectedObject={selectedObject} />
    </CanvasContext.Provider>
    </div>
  );
}
