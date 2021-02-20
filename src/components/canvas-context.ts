import React from "react";

// set the defaults
const CanvasContext = React.createContext<any>({
  objects: [],
  addObject: () => {},
  updateObject: () => {}
});

export default CanvasContext;
