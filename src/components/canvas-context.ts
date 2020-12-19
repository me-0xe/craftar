import React from "react";

// set the defaults
const CanvasContext = React.createContext<any>({
  objects: [],
  addObject: () => {}
});

export default CanvasContext;
