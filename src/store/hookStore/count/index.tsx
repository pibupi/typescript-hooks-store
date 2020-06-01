import React, { createContext, useReducer, useContext, ComponentType } from 'react'
import reducer from './reducer'
export const initState: countStore.State = {
  num: 1,
}
export const countContext = createContext(null)

export const Provider: ComponentType = (props: any): any => {
  const [count, dispatch] = useReducer(reducer, initState)
  return <countContext.Provider value={{ count, dispatch }}>{props.children}</countContext.Provider>
}
export const useCountStore = () => useContext(countContext)
