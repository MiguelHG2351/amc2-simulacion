import { atom } from "nanostores"

import { operationCode } from '../utils/constant'

export type OperationCode = typeof operationCode

export const operationList = atom< OperationCode >(operationCode)



type OperationCodeValues = typeof operationCode[keyof typeof operationCode];
type OperationCodeInstruction = keyof typeof operationCode
type OperationCodeList = {
  address: string,
  instruction: OperationCodeInstruction,
  operand: OperationCodeValues,
}
export const $operationCodeList = atom< OperationCodeList[] >([])

export const addOperationCode = (operationCode: OperationCodeList) => {
  $operationCodeList.set([...$operationCodeList.get(), operationCode])
}
