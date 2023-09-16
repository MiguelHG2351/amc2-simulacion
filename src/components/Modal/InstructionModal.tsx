import * as React from 'react'
import { useStore } from '@nanostores/react';
import { $operationList, $variableList } from '../../store';
import type { OperationCodeInstruction } from '../../store';
import { useForm } from 'react-hook-form'

type InstructionModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


export const InstructionModal: React.FC<InstructionModalProps> = ({ setIsOpen }) => {
  const operationList = useStore($operationList);
  const variableList = useStore($variableList);
  console.log(operationList);

  const { handleSubmit, register, formState: { errors }, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data, errors)
    if(errors.name || errors.variable) return console.log(errors)
    setIsOpen(false)
  };
  
  return (
    <form className="bg-white px-4 py-3 sm:px-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-x-4">
        <label className='block flex-1'>
          <span className="block text-sm font-medium text-gray-700">
            Instruction
          </span>
          <select {...register('name', {required: true})} className='w-full'>
            <option value="PUSH">PUSH</option>
            {
              Object.keys(operationList).map((value, index) => (
                <option value={value} key={operationList[value as OperationCodeInstruction]!}>{value}</option>
              ))
            }
          </select>
        </label>
        <label className='block flex-1'>
          <span className="block text-sm font-medium text-gray-700">
            Variable
          </span>
          <select {...register('variable', {required: true})} className='w-full'>
            {variableList.map(variable => (
              <option value="PUSH">A</option>
            ))}
          </select>
        </label>
      </div>
      <div className="error">
        {(errors.name || errors.variable) && (
          <span className='text-red-600 font-bold'>
            There fields is required: {errors.name && 'name'} {errors.variable && 'variable'}
          </span>
        )}
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
  );
};
