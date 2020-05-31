import React, { useEffect } from 'react'
import { useCountStore } from '../../store/hookStore'

const Count = () => {
  const {
    count: { num },
  } = useCountStore()
  useEffect(() => {}, [num])
  return (
    <div>
      <p>{num}</p>
    </div>
  )
}

export default Count
