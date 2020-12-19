import React, { useState } from "react";
import AssetToolbox from "./components/asset-toolbox/toolbox";
import Canvas from "./components/canvas";
import CanvasContext from "./components/canvas-context";
import ModificationToolbox from "./components/modification-toolbox/toolbox";


export default function App() {

  const [canvasObjects, setCanvasObjects] = useState<any>([]);
  const addObject = (newObject: any) => {
    setCanvasObjects([...canvasObjects, newObject]);
  };
  return (
    <div className="App">
    <CanvasContext.Provider value={{ objects: canvasObjects, addObject }}>
        <AssetToolbox />
        <Canvas />
        <ModificationToolbox />
    </CanvasContext.Provider>
    </div>
  );
}
