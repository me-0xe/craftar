import React from "react";
import AssetToolbox from "./components/asset-toolbox/toolbox";
import Canvas from "./components/canvas";
import ModificationToolbox from "./components/modification-toolbox/toolbox";


export default function App() {

  return (
    <div className="App">
      <AssetToolbox />
      <Canvas />
      <ModificationToolbox />
    </div>
  );
}
