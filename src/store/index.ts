import { atom } from "nanostores"

import { operationCodes } from '../utils/constant'

export type OperationCode = typeof operationCodes
export const $operationList = atom< OperationCode >(operationCodes)

export type IVariable = {
  name: string,
  value: string,
  address: number,
}
export const $variableList = atom< IVariable[] >([])


export type OperationCodeValues = typeof operationCodes[keyof typeof operationCodes];
export type OperationCodeInstruction = keyof typeof operationCodes;
type IInstruction = {
  address: string,
  variable: string,
  instruction: OperationCodeInstruction,
  instructionCode: OperationCodeValues,
}
export const $instructionList = atom< IInstruction[] >([])


export const addVariable = (variable: IVariable) => {
  $variableList.set([...$variableList.get(), variable])
}

export const addInstruction = (instruction: IInstruction) => {
  $instructionList.set([...$instructionList.get(), instruction])
}
