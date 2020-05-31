import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { Button } from 'antd'
import RootStore from '../../store/mobxfunc/index'
import http from '../../service/http'
import logo from '../../assets/img/logo192.png'
import { StepBackwardOutlined } from '@ant-design/icons'
// import _ from 'lodash'
import classnames from 'classnames'
const MobxDemo = observer(({ history, location }: RouteComponentProps) => {
  const { indexStore } = useContext(RootStore)
  const { time } = indexStore
  // const addTodonum = () => {
  //   indexStore.addTodo(time + 1)
  // }
  useEffect(() => {
    // lodash 测试
    // console.log(_.defaults({ a: 1 }, { a: 3, b: 2 }))
    // 跨域接口
    http.get('/api').then((res) => {
      console.log(res)
    })
  })
  return (
    <div>
      <Link
        to={{
          pathname: 'edittable/22',
          state: {
            name: 'zh',
          },
        }}
      >
        Link点击跳转传参，动态路由传参及params传参数
      </Link>
      <br />
      <button onClick={() => history.push(`/edittable/111`)}>
        RouteComponentProps跳转传参数（需要在edietable组件使用RouteComponentProps）
      </button>
      <div
        className={classnames({
          class1: true,
          class2: false,
        })}
      >
        classname插件的使用
      </div>
      <p>
        antd 的icon使用
        <StepBackwardOutlined />
      </p>
      图片
      <img src={logo} alt="xxx" />
      <br />
      <Button onClick={() => indexStore.addTodo(time + 1)}>press</Button>
      <div>{time}</div>
    </div>
  )
})
export default MobxDemo
