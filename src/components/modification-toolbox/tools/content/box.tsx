import { useContext } from "react";
import CanvasContext from "../../../canvas-context";
import { ModificationSet } from "../../toolbox";


export default function Box(props: any) {
  const { selectedObject } = props;
  const { objects, updateObject } = useContext(CanvasContext);
  const objectIndex = objects.findIndex((o: { id: any; craftarType: ModificationSet; }) => o.id === selectedObject.id && o.craftarType === ModificationSet.Box);
  const workingObject = objects[objectIndex];

  const updateObjectColor = (e: any) => {
    updateObject(objectIndex, 'stroke', e.target.value);
  }
  return (
  <div>
     <span>Box config options </span>
   <div>
    <input type="color" id="head" name="head"
           value={workingObject.stroke} onChange={updateObjectColor} />
    <label htmlFor="head">Boarder</label>
</div>
  </div>
  );
}
