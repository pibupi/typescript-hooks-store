import React, { useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'
// import { withRouter, RouteComponentProps } from 'react-router-dom'
import { observer } from 'mobx-react'
import { Button, Input } from 'antd'
import './editEdit.less'
import RootStore from '../../store/mobxfunc/index'

const RemoveValByIndex = (arr: [], index: number) => {
  arr.splice(index, 1)
}
// 接收参数：
// 1.使用RouteComponentProps解构出match进行取参
// const EditTable = observer(({ match }: RouteComponentProps<{ id: number }>) => {
// 2.直接使用props取参
const EditTable = observer((props: any) => {
  useEffect(() => {
    // const { id } = match.params // 取动态路由参数, state参数这种方式还不会取
    // console.log('路由参数为:', id)
    const { state } = props.location
    console.log(props.match.params.id) // 取动态路由参数
    console.log(state.name) // 取state参数
  }, [props])
  const { okrStore } = useContext(RootStore)
  const { rowlist } = okrStore
  // const [rowlist, okrStore.saveRowList] = useState<Array<any>>(rowlist)
  const addRow = () => {
    okrStore.saveRowList({
      id: rowlist.length + Math.random(),
      title: '',
      content: '',
      conname: '',
      edit: true,
      titlevalid: false,
      contentvalid: false,
      connamevalid: false,
    })
  }
  const deleRow = (index: number) => {
    let copydata = JSON.parse(JSON.stringify(rowlist))
    RemoveValByIndex(copydata, index)
    okrStore.updaterowlist(copydata)
  }
  const saveRow = (id: number) => {
    let copydata = JSON.parse(JSON.stringify(rowlist))
    let index = rowlist.findIndex((item) => item.id === id)
    let flag = false
    if (copydata[index].title === '') {
      copydata[index].titlevalid = true
      flag = true
    }
    if (copydata[index].content === '') {
      copydata[index].contentvalid = true
      flag = true
    }
    if (copydata[index].conname === '') {
      copydata[index].connamevalid = true
      flag = true
    }
    if (flag) {
      okrStore.updaterowlist(copydata)
      return
    }
    copydata[index] = Object.assign(copydata[index], {
      edit: false,
    })
    okrStore.updaterowlist(copydata)
  }
  const getContent = (value: string, index: number) => {
    let copydata = JSON.parse(JSON.stringify(rowlist))
    copydata[index].content = value
    copydata[index].contentvalid = false
    okrStore.updaterowlist(copydata)
  }
  const getConname = (value: string, index: number) => {
    let copydata = JSON.parse(JSON.stringify(rowlist))
    copydata[index].conname = value
    copydata[index].connamevalid = false
    okrStore.updaterowlist(copydata)
  }
  const getTitle = (value: string, index: number) => {
    let copydata = JSON.parse(JSON.stringify(rowlist))
    copydata[index].title = value
    copydata[index].titlevalid = false
    okrStore.updaterowlist(copydata)
  }
  // const saveTable = () => {
  // let copydata = JSON.parse(JSON.stringify(rowlist))
  // let flag = false
  // copydata.forEach((item: any) => {
  //   if (item.title === '') {
  //     item.titlevalid = true
  //     flag = true
  //   }
  //   if (item.content === '') {
  //     item.contentvalid = true
  //     flag = true
  //   }
  //   if (item.conname === '') {
  //     item.connamevalid = true
  //     flag = true
  //   }
  // })
  // if (flag) {
  //   okrStore.updaterowlist(copydata)
  //   return
  // }
  // let result = 0
  // copydata.forEach((item: any) => {
  //   result += item.content
  // })
  // if (result > 100) {
  //   alert('权重大于100')
  //   return
  // }
  // copydata.forEach((item: any) => {
  //   item.edit = false
  // })
  // okrStore.updaterowlist(copydata)
  // }
  // const editall = () => {
  //   let copydata = JSON.parse(JSON.stringify(rowlist))
  //   copydata.forEach((item: any, index: number) => {
  //     item.edit = true
  //   })
  //   okrStore.updaterowlist(copydata)
  // }
  return (
    <div>
      <p>子组件</p>
      <Button type="primary" onClick={addRow}>
        添加一行
      </Button>
      {/* <Button onClick={saveTable}>保存</Button>
      <Button onClick={editall}>全体编辑</Button> */}
      {rowlist.map((item: any, index: number) => {
        if (item.edit) {
          return (
            <div key={item.id}>
              <div className="wrap">
                <Input
                  placeholder="1"
                  value={item.title}
                  style={{ width: '200px' }}
                  onChange={(e) => getTitle(e.target.value, index)}
                />
                <span className={item.titlevalid ? 'block' : 'none'}>请输入标题</span>
                <Input
                  placeholder="2"
                  value={item.content}
                  style={{ width: '200px' }}
                  onChange={(e) => getContent(e.target.value, index)}
                />
                <span className={item.contentvalid ? 'block' : 'none'}>请输入内容</span>
                <Input
                  placeholder="3"
                  value={item.conname}
                  style={{ width: '200px' }}
                  onChange={(e) => getConname(e.target.value, index)}
                />
                <span className={item.connamevalid ? 'block' : 'none'}>请输入名字</span>
                <Button onClick={() => saveRow(item.id)}>保存</Button>
                <Button onClick={() => deleRow(index)}>删除</Button>
              </div>
            </div>
          )
        } else {
          return (
            <div key={item.id}>
              <div className="wrap">
                <span className="tit">{item.title}</span>
                <span>{item.content}</span>
                <span>{item.conname}</span>
                <Button onClick={() => deleRow(index)}>删除</Button>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
})

export default withRouter(EditTable)
