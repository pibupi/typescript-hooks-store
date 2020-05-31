import { action, configure, observable } from 'mobx'

configure({ enforceActions: 'observed' })

export default observable.object(
  {
    time: 2019,
    addTodo(todo: number) {
      console.log(222)
      console.log(this)
      this.time = todo
    },
  },
  {
    addTodo: action,
  }
)
