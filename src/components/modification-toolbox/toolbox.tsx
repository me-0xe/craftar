import Box from "./tools/content/box";
import NameTag from "./tools/setup/name-tag";

export enum ModificationSet {
  Box = "box",
  NameTag = "name-tag",
  Text = "text",
};


export default function ModificationToolbox(props: any) {
  const { selectedObject } = props;
  const renderModifications = () => {
    switch(selectedObject?.type) {
      case ModificationSet.Box:
        return <Box selectedObject={selectedObject}/>
      case ModificationSet.NameTag:
        return <NameTag />
      default:
        return 'some nice placeholder :)';
    }
  }
  return (

    <div className="modification-toolbox">
         <h3>Modification Toolbox</h3>
    {renderModifications()}
    </div>
  );
}
