import { observable, action, computed } from 'mobx'
import { IMobxStore } from './IMobxStore'
import moment from 'moment'

// class MobxStore {
class MobxStore implements IMobxStore {
  @observable time = '2019'
  @observable todos: Array<any> = []
  @action addTodo = (todo: string) => {
    this.todos.push(todo)
  }
  @action deleteTodo = () => {
    this.todos.pop()
  }
  @action resetTodo = () => {
    this.todos = []
  }
  @action getNow = () => {
    this.time = moment().format('YYYY-MM-DD HH:mm:ss')
  }
  @computed get desc() {
    return `${this.time} 还有${this.todos.length} 条任务待完成`
  }
}
const storeA = new MobxStore()

export { storeA }
