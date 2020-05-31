import { TYPES } from './actionTypes'
export const updateTel = (tel: string): IFormStore.Action => ({
  type: TYPES.UPDATE_TEL,
  payload: { tel },
})
export const updateName = (name: string): IFormStore.Action => ({
  type: TYPES.UPDATE_NAME,
  payload: { name },
})
