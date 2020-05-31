export as namespace countStore

export interface State {
  num: number
}
export interface Types {
  INCREMENT: string
  DECREMENT: string
}
export type Action =
  | { type: INCREMENT; payload: { countnum: number } }
  | { type: INCREMENT; payload: { countnum: number } }
