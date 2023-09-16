
export default function InformationSection() {
  return (
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
  )
}
