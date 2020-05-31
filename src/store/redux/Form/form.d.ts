export as namespace IFormStore

export interface State {
  name: string
  tel: string
}
export interface Types {
  UPDATE_NAME: string
  UPDATE_TEL: string
}
export type Action =
  | { type: Types.UPDATE_NAME; payload: { name: string } }
  | { type: Types.UPDATE_TEL; payload: { tel: string } }
