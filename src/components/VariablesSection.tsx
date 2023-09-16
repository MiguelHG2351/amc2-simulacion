import * as React from 'react'
import { useState } from "react"
import { Modal } from "./Modal/Modal"
import VariableModal from "./Modal/VariableModal"
import { $variableList } from "../store"
import { useStore } from "@nanostores/react"

export default function VariablesSection() {
	const [isOpen, setIsOpen] = useState(false)
  const variableList = useStore($variableList)
  
  return (
    <div className="flex-1 flex flex-col border">
      <h2 className="text-center border">Datos</h2>

      <div className="flex-1 border">
        <ul className="grid grid-cols-3">
          <li className="p-2 border border-collapse">
            Adreess
          </li>
          <li className="p-2 border border-collapse">
            Var
          </li>
          <li className="p-2 border border-collapse">
            Value
          </li>

          {variableList.map(variable => (
            <React.Fragment key={variable.address}>
              <li className="p-2 border border-collapse">{`${variable.address}`.padStart(4, '0')}</li>
              <li className="p-2 border border-collapse">{variable.name}</li>
              <li className="p-2 border border-collapse">{variable.value}</li>
            </React.Fragment>
          ))}
        </ul>
      </div>
      <div className="flex flex-col">
        <button className="border" onClick={() => setIsOpen(!isOpen)}>Add variable</button>
      </div>
      <Modal 
        title="Add a new variable"
        description="In stack architecture, you can use PUSH to add to the stack and POP to remove the last added element."
        iconName="add"
        isOpen={isOpen}
        setIsOpen={setIsOpen}>
          <VariableModal setIsOpen={setIsOpen} />
      </Modal>
    </div>
  )
}
