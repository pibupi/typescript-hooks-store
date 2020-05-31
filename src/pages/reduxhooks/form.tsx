import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateName, updateTel } from '../../store/redux/Form/action'
const Form = () => {
  const formdata = useSelector((state: any) => {
    return state.formReducer
  })
  console.log(formdata)
  const dispatch = useDispatch()
  return (
    <div>
      姓名：
      <input
        type="text"
        onChange={(e) => {
          dispatch(updateName(e.target.value))
        }}
      />
      <br />
      电话
      <input
        type="text"
        onChange={(e) => {
          dispatch(updateTel(e.target.value))
        }}
      />
    </div>
  )
}
export default Form
