
export default function App() {
  return (
    <main className="h-screen flex items-center justify-center">
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
            <img className="w-full" src="/public/vector-blanco.svg" alt="" />
            <label>
              <input type="text" placeholder="11" />
              <span className="ml-2">Z</span>
            </label>
          </div>
          <div className="col-span-1"></div>
        </form>
      </section>
    </main>
  )
}
