import { atom } from "nanostores"

import { operationCodes } from '../utils/constant'

export type OperationCode = typeof operationCodes

export const $operationList = atom< OperationCode >(operationCodes)



type OperationCodeValues = typeof operationCodes[keyof typeof operationCodes];
type OperationCodeInstruction = keyof typeof operationCodes;
type IInstruction = {
  address: string,
  instruction: OperationCodeInstruction,
  instructionCode: OperationCodeValues,
}
export const $instructionList = atom< IInstruction[] >([])

export const addInstruction = (instruction: IInstruction) => {
  $instructionList.set([...$instructionList.get(), instruction])
}
