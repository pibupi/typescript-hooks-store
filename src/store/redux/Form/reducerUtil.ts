export default (TYPES: IFormStore.Types, initialState: IFormStore.State) => {
  return (state: IFormStore.State, action: IFormStore.Action) => {
    const { type, payload } = action
    if (Object.values(TYPES).includes(type)) return { ...state, ...payload }
    return state || initialState
  }
}
