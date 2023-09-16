import { atom } from "nanostores"

import { operationCodes } from '../utils/constant'

export type OperationCode = typeof operationCodes
export const $operationList = atom< OperationCode >(operationCodes)
export const $variableList = atom< string[] >([])


export type OperationCodeValues = typeof operationCodes[keyof typeof operationCodes];
export type OperationCodeInstruction = keyof typeof operationCodes;
type IInstruction = {
  address: string,
  variable: string,
  instruction: OperationCodeInstruction,
  instructionCode: OperationCodeValues,
}
export const $instructionList = atom< IInstruction[] >([])


export const addInstruction = (instruction: IInstruction) => {
  $instructionList.set([...$instructionList.get(), instruction])
}
