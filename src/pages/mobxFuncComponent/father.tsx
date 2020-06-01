import React, { useContext, lazy, Suspense } from 'react'
import { Button } from 'antd'
import RootStore from '../../store/mobxfunc/index'
// import EditTable from './editEdit'
const EditTable = lazy(() => import(/* webpackChunkName: "edittable" */ './editEdit'))

const Father = () => {
  const { okrStore } = useContext(RootStore)
  const saveTablefather = () => {
    okrStore.saveTable()
  }
  const editallfather = () => {
    okrStore.editall()
  }
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div>
        <p>父组件</p>
        <Button onClick={saveTablefather}>保存</Button>
        <Button onClick={editallfather}>全体编辑</Button>
        <EditTable />
      </div>
    </Suspense>
  )
}
export default Father
