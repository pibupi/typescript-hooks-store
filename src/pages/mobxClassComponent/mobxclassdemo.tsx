import React from 'react'
import { inject, observer } from 'mobx-react'
// import { IMobxStore } from '../../store/mobxclasstodos/IMobxStore'
import { Button } from 'antd'

// interface IAppProps {
//   store?: IMobxStore //  这里比较关键 ？表示可或缺，如果没有就会报错。
// }
interface IState {
  time: number
  stores: any
}

@inject('store')
@observer
class MobxDemo extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      time: null,
      stores: props.store.storeA,
    }
  }
  handleTodo = (type: string): void => {
    let { addTodo, deleteTodo, resetTodo } = this.state.stores
    switch (type) {
      case 'add':
        addTodo('一条新任务')
        break
      case 'delete':
        deleteTodo()
        break
      case 'reset':
        resetTodo()
        break
      default:
    }
  }
  componentDidMount() {
    console.log(this.props)
    let { getNow } = this.state.stores
    this.setState({
      time: setInterval(() => {
        getNow()
      }),
    })
  }
  componentWillUnmount() {
    clearInterval(this.state.time)
  }
  render() {
    let { todos, desc } = this.state.stores
    return (
      <div>
        <div>123</div>
        <div>{desc}</div>
        <Button onClick={() => this.handleTodo('add')}>添加一条任务</Button>
        <Button onClick={() => this.handleTodo('delete')}>删除一条任务</Button>
        <Button onClick={() => this.handleTodo('reset')}>重置任务</Button>
        {todos.map((ele: string, index: number) => {
          return <div key={index}>{ele}</div>
        })}
      </div>
    )
  }
}
export default MobxDemo
