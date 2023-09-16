import { useForm } from 'react-hook-form';
import { useStore } from '@nanostores/react';
import { $variableList, addVariable } from '../../store';

type VariablesModalProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function VariableModal({ setIsOpen }: VariablesModalProps) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const variableList = useStore($variableList)

  const onSubmit = (data: any) => {

    if(errors.value || errors.variable) return console.log(errors)
    let variable = data.variable

    if (variable.indexOf(' ') >= 0) {
      variable = variable.slice(0, variable.indexOf(' '))
    }
    
    addVariable({
      name: variable,
      value: data.value,
      address: variableList.length > 0 ? variableList[variableList.length - 1].address + 1 : 0
   })

    setIsOpen(false)
    console.log(data)
  }

  return (
    <form className="bg-white px-4 py-3 sm:px-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-x-4">
        <label className='block flex-1'>
          <span className="block text-sm font-medium text-gray-700">
            Instruction
          </span>
          <input type="text" {...register('variable', { required: true })} placeholder='A' />
        </label>
        <label className='block flex-1'>
          <span className="block text-sm font-medium text-gray-700">
            Value
          </span>
          <input type="text" {...register('value', { required: true })} placeholder='12' />
        </label>
      </div>
      <div className="bg-gray-50 py-3 sm:flex sm:flex-row-reverse">
        <button
          type="submit"
          tabIndex={0}
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
          Add
        </button>
        <button
          type="button"
          tabIndex={0}
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => {reset();setIsOpen(false);}}
          >
          Cancel
        </button>
      </div>
    </form>
  )
}
