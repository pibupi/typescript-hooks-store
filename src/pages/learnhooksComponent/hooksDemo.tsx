import React, { useEffect, useState } from 'react'
import { getArticle } from '../../service/api'
// 请求接口示例
const List = () => {
  const [data, setdataInfo] = useState<Array<any>>([])
  useEffect(() => {
    const getarticle = async () => {
      const res = await getArticle()
      setdataInfo(res.data.list)
    }
    getarticle()
  }, [])
  return (
    <div>
      <p>hooks小练习</p>
      {data.map((item: any) => {
        return (
          <div key={item.title}>
            <p>{item.age}</p>
            <p>{item.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default List
