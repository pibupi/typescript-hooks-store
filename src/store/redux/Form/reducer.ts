import reducerCreator from './reducerUtil'
import { TYPES } from './actionTypes'
const initalState: IFormStore.State = {
  tel: '',
  name: '',
}
export default reducerCreator(TYPES, initalState)
