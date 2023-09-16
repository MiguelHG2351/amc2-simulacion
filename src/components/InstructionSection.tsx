import InstructionList from "../components/InstructionList";
import { Modal } from "../components/Modal/Modal";
import { useState, useCallback } from "react";
import { InstructionModal } from "./Modal/InstructionModal";

export default function InstructionSection() {
	const [isOpen, setIsOpen] = useState(false)

  const addinstruction = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return (
    <section className="flex flex-col">
      <div className="border flex-1">
        <ul className="grid grid-cols-3 flex-1">
          {/* headers table */}
          <li className="p-2 border border-collapse">
            Adreess
          </li>
          <li className="p-2 border border-collapse">
            Instruction
          </li>
          <li className="p-2 border border-collapse">
            Code. Op
          </li>
          {/* end headers table */}

          <li className="p-2 border border-collapse">0001</li>
          <li className="p-2 border border-collapse">PUSH B</li>
          <li className="p-2 border border-collapse">0001</li>
          
          <InstructionList />
          
          {/* end rows table */}
        </ul>
      </div>
      <div className="flex flex-col border">
        <button
          className="border"
          onClick={() => setIsOpen(!isOpen)}
        >
          Add instruction
        </button>
      </div>
      <Modal 
        title="Add a new instruction"
        description="In stack architecture, you can use PUSH to add to the stack and POP to remove the last added element."
        iconName="add"
        isOpen={isOpen}
        setIsOpen={setIsOpen}>
          <InstructionModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </Modal>
    </section>
  )
}
