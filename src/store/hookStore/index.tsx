import React from 'react'

import { Provider as CountProvider } from './count'

export { useCountStore } from './count'

// // 使用数据reducer进行Provider整合，避免直接出现如下情况
// /**
//  * <Provider1>
//  *  <Provider2>
//  *      <Provider3>
//  *          <App/>
//  *      </Provider3>
//  *  </Provider2>
//  * </Provider1>
//  */
const providers = [CountProvider]

const Provider = (props: any) =>
  providers.reduceRight((children, Parent) => <Parent>{children}</Parent>, props.children)

export default Provider
