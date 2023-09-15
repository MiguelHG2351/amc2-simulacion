import { atom } from "nanostores"

import { operationCode } from '../utils/constant'

export type OperationCode = typeof operationCode

export const operationList = atom< OperationCode >(operationCode)