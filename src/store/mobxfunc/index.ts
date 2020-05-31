import { createContext } from 'react'
import indexStore from './indexStore'
import okrStore from './okrStore'

const RootStoreContext = createContext({
  indexStore,
  okrStore,
})
export default RootStoreContext
