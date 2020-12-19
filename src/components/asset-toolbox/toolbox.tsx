import React from "react";
import ToolboxSection from "../toolbox-section";
import Orientation from "./tools/setup/orientation";
import NameTag from "./tools/setup/name-tag";
import Dividers from "./tools/setup/divider";
import Background from "./tools/styling/background";
import Boarder from "./tools/styling/boarder";
import Heading from "./tools/content/heading"
import Text from "./tools/content/text";
import Box from "./tools/content/box";
import Image from "./tools/content/image";

export default function AssetToolbox() {

  return (

    <div className="asset-toolbox">
         <h3>Toolbox</h3>
         <ToolboxSection heading={'Setup'}>
            <Orientation />
            <NameTag />
            <Dividers />
         </ToolboxSection>
         <ToolboxSection heading={'Styling'}>
              <Background />
              <Boarder />
         </ToolboxSection>

         <ToolboxSection heading={'Content'}>
            <Heading />
            <Text />
            <Box />
            <Image />
         </ToolboxSection>


  

    </div>
  );
}
