// 1.mobx => class 需要provider包裹
// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.less'
// import { Provider } from 'mobx-react'
// import * as stores from './store/mobxclasstodos'
// import App from './App'
// import 'dayjs/locale/zh-cn'

// ReactDOM.render(
//   <Provider store={stores}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

// 2.mobx => func 不需要provider包裹,直接在组件内部contex接收即可
// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.less'
// import App from './App'
// import 'dayjs/locale/zh-cn'

// ReactDOM.render(<App />, document.getElementById('root'))

// 3.hooks-> useReducer && useContext
import React, { Component, ComponentProps } from 'react'
import ReactDOM from 'react-dom'
import Provider from './store/hookStore'
import './index.less'
import App from './App'
import 'dayjs/locale/zh-cn'
// 针对react16之后版本，若react本身报错的话需要使用该组件
class ErrorBoundary extends Component<
  ComponentProps<any>,
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error: Error, info: any) {
    this.setState({ hasError: true })
    // 将component中的报错发送到Fundebug
    // fundebug.notifyError(error, {
    //     metaData: {
    //         info
    //     }
    // })
  }

  render() {
    if (this.state.hasError) {
      return <div>123</div>
      // Note: 也可以在出错的component处展示出错信息，返回自定义的结果。
    }
    return this.props.children
  }
}
ReactDOM.render(
  <ErrorBoundary>
    <Provider>
      <App />
    </Provider>
  </ErrorBoundary>,
  document.getElementById('root')
)

// redux
// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import configureStore from './store/redux/store'
// import './index.less'
// import App from './App'
// import 'dayjs/locale/zh-cn'
// const store = configureStore()

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
