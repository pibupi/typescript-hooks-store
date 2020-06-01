import React, { useState } from 'react'
import { Button } from 'antd'
interface IProps {
  title: string
  age: number
  work?: string
  onMyClick: (num: number) => void
}

const Hello = ({ title, age, work, onMyClick }: IProps): any => {
  const [count, setCount] = useState<number>(0)
  const increament = (num: number) => {
    setCount(count + num)
  }
  const fatherClick = (num: number) => {
    onMyClick(num)
  }
  return (
    <div className="App">
      <p>
        {title}
        {age}
        {count}
        {work}
      </p>
      <Button type="primary" onClick={() => increament(1)}>
        加1
      </Button>
      <Button onClick={() => fatherClick(1)}>传值</Button>
    </div>
  )
}
export default Hello
