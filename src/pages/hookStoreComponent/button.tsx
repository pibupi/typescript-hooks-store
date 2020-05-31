import React from 'react'
import { useCountStore } from '../../store/hookStore'
function Buttons() {
  const { dispatch } = useCountStore()
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT', payload: { countnum: 1 } })
        }}
      >
        增加
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'DECREMENT', payload: { countnum: 1 } })
        }}
      >
        减少
      </button>
    </div>
  )
}

export default Buttons
