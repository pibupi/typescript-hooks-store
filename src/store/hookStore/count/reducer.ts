import Types from './constant'

const reducer = (state: countStore.State, action: countStore.Action) => {
  switch (action.type) {
    case Types.INCREMENT:
      return { num: state.num + action.payload.countnum }
    case Types.DECREMENT:
      return { num: state.num - action.payload.countnum }
    default:
      return state
  }
}
export default reducer
