import React, { FC } from 'react'

import HooksDemo from './pages/learnhooksComponent/hooksDemo' // hooks练习
import Mobxrouteparam from './pages/mobxFuncComponent/mobxrouteparam' // 路由传参示例
import OkrTeam from './components/okrteam' // 项目首页，未完成
// import EditTable from './pages/editEdit'
import Father from './pages/mobxFuncComponent/father' // mobx store 父子组件案例
import Wrap from './pages/hookStoreComponent/wrap' //hooks store 示例
import MobxDemo from './pages/mobxClassComponent/mobxclassdemo' //hooks store 示例
import ReduxForm from './pages/reduxhooks/form'
import Layout from './pages/layout'

import { Route, HashRouter, Switch } from 'react-router-dom'

// @observer
const App: FC = () => {
  // const [agenum, setagenum] = useState<number>(20)
  // const myclick = (num: number) => {
  //   setagenum(agenum + num)
  // }
  return (
    <div className="App">
      {/* <Button type="primary">Button</Button>
      <Hello title="标题" age={agenum} onMyClick={(num) => myclick(num)} /> */}
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route path="/HooksDemo" component={HooksDemo} />
          <Route path="/Mobxrouteparam" component={Mobxrouteparam} />
          <Route path="/MobxDemo" component={MobxDemo} />
          <Route path="/okrteam" component={OkrTeam} />
          <Route path="/edittable/:id" component={Father} />
          <Route path="/Wrap" component={Wrap} />
          <Route path="/ReduxForm" component={ReduxForm} />
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
