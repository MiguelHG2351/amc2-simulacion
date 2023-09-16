import * as React from "react"
import { useStore } from "@nanostores/react";
import { $instructionList } from '../store'

export default function InstructionList() {
  const instructionList = useStore($instructionList);
  
  return (
    <>
      {
        instructionList.map((instruction) => (
          <React.Fragment key={instruction.address}>
            <li className="p-2 border border-collapse">{instruction.address}</li>
            <li className="p-2 border border-collapse">{instruction.instruction}</li>
            <li className="p-2 border border-collapse">0001</li>
          </React.Fragment>
        ))
      }
    </>
  );
}
