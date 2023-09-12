
export default function App() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="flex gap-x-4">
        <section className="code">
          <ul className="grid grid-cols-3">
            {/* headers table */}
            <li className="p-2 border border-collapse">
              Adreess
            </li>
            <li className="p-2 border border-collapse">
              Instruction
            </li>
            <li className="p-2 border border-collapse">
              No se
            </li>
            {/* end headers table */}

            <li className="p-2 border border-collapse">0001</li>
            <li className="p-2 border border-collapse">PUSH B</li>
            <li className="p-2 border border-collapse">0001</li>
            {/* end rows table */}
          </ul>
        </section>
        <section className="program max-w-[450px] w-[90%]">
          <h1 className="text-2xl font-bold mb-2">Simular de Pila - AMC2</h1>
          <form className="grid grid-cols-3 gap-y-4 gap-x-2">
            <input className="col-span-3" type="text" placeholder="0000 = NOP" />
            <label className="flex flex-col gap-y-2">
              <span>MAR</span>
              <input type="text" placeholder="01013" />
            </label>
            <label className="flex flex-col gap-y-2">
              <span>MDR</span>
              <input type="text" placeholder="0000 = NOP" />
            </label>
            <label className="flex flex-col gap-y-2">
              <span>SP</span>
              <input type="text" placeholder="0000 = NOP" />
            </label>
            <label className="flex flex-col gap-y-2">
              <span>X</span>
              <input type="text" placeholder="0000 = NOP" />
            </label>
            <label className="flex flex-col gap-y-2">
              <span>Y</span>
              <input type="text" placeholder="0000 = NOP" />
            </label>
            <label className="flex flex-col gap-y-2">
              <span>SP</span>
              <input type="text" placeholder="0000 = NOP" />
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
        <section className="flex flex-col">
          <h2 className="text-center border">Datos</h2>
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
        </section>
      </div>
    </main>
  )
}
