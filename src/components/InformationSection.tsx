import VariablesSection from "./VariablesSection"

export default function InformationSection() {
  return (
    <section className="flex gap-x-2">
      {/* variables */}
      <VariablesSection />
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
