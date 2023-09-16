import { useState } from "react";
import { Modal } from "../components/Modal/Modal";
import InstructionList from "../components/InstructionList";

export default function App() {
	const [isOpen, setIsOpen] = useState(false)
  
  return (
    <main className="min-h-screen flex items-center justify-center py-4">
      <div className="flex gap-x-4">
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
        </section>
        <section className="program max-w-[350px] w-[90%]">
          <h1 className="text-2xl font-bold mb-2">Simular de Pila - AMC2</h1>
          <form className="grid grid-cols-3 gap-y-4 gap-x-2">
            <input className="col-span-3 p-2" type="text" placeholder="0000 = NOP" />
            <label className="flex flex-col gap-y-2">
              <span>MAR</span>
              <input type="text" placeholder="01013" className="p-2" />
            </label>
            <label className="flex flex-col gap-y-2">
              <span>MDR</span>
              <input type="text" placeholder="0000 = NOP" className="p-2" />
            </label>
            <label className="flex flex-col gap-y-2">
              <span>SP</span>
              <input type="text" placeholder="0000 = NOP" className="p-2" />
            </label>
            <label className="flex flex-col gap-y-2">
              <span>X</span>
              <input type="text" placeholder="0000 = NOP" className="p-2" />
            </label>
            <label className="flex flex-col gap-y-2">
              <span>Y</span>
              <input type="text" placeholder="0000 = NOP" className="p-2" />
            </label>
            <label className="flex flex-col gap-y-2">
              <span>PC</span>
              <input type="text" placeholder="0000 = NOP" className="p-2" />
            </label>
            <div className="alu col-span-2 gap-y-2 flex flex-col items-center">
              <img className="w-full" src="/vector-blanco.svg" alt="" />
              <label>
                <input type="text" placeholder="11" />
                <span className="ml-2">Z</span>
              </label>
            </div>
            <div className="col-span-1"></div>
          </form>
        </section>
        <section className="flex gap-x-2">
          {/* variables */}
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

                <li className="p-2 border border-collapse">0000</li>
                <li className="p-2 border border-collapse">A</li>
                <li className="p-2 border border-collapse">4</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <button className="border">Add variable</button>
            </div>
          </div>
          {/* Stack */}
          <div className="flex-1 border">
            <h2 className="text-center border">Pila</h2>
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

              <li className="p-2 border border-collapse">0000</li>
              <li className="p-2 border border-collapse">A</li>
              <li className="p-2 border border-collapse">4</li>
            </ul>
          </div>
        </section>
      </div>
      <Modal 
        title="Add a new instruction"
        description="In stack architecture, you can use PUSH to add to the stack and POP to remove the last added element."
        iconName="add"
        isOpen={isOpen}
        setIsOpen={setIsOpen} />
    </main>
  )
}
