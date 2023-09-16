import * as React from 'react'

type InstructionModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


export const InstructionModal: React.FC<InstructionModalProps> = ({ setIsOpen }) => {
  return (
    <form className="bg-white px-4 py-3 sm:px-6">
      <div className="flex gap-x-4">
        <label className='block flex-1'>
          <span className="block text-sm font-medium text-gray-700">
            Instruction
          </span>
          <select name="name" className='w-full'>
            <option value="PUSH">PUSH</option>
            <option value="POP">POP</option>
          </select>
        </label>
        <label className='block flex-1'>
          <span className="block text-sm font-medium text-gray-700">
            Variable
          </span>
          <select name="variable" className='w-full'>
            <option value="PUSH">A</option>
            <option value="POP">B</option>
          </select>
        </label>
      </div>
      <div className="bg-gray-50 py-3 sm:flex sm:flex-row-reverse">
        <button
          type="submit"
          tabIndex={0}
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => setIsOpen(false)}
        >
          Add
        </button>
        <button
          type="button"
          tabIndex={0}
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
