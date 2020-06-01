import React, { useEffect } from 'react'
import { useCountStore } from '../../store/hookStore'

const Count = (): JSX.Element => {
  const {
    count: { num },
  } = useCountStore()
  useEffect(() => {
    console.log(num)
  }, [num])
  return (
    <div>
      <p>{num}</p>
    </div>
  )
}

export default Count
