export interface IMobxStore {
  addTodo(todo: string): void
  deleteTodo(): void
  resetTodo(): void
  getNow(): void
  time: string
  todos: any
  desc: string
}
