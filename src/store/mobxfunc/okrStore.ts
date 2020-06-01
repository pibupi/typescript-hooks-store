import { action, configure, observable } from 'mobx'

configure({ enforceActions: 'observed' })
const rowlist = [
  {
    id: 1,
    title: '标题1',
    content: '10',
    conname: '姓名1',
    edit: false,
    titlevalid: false,
    contentvalid: false,
    connamevalid: false,
  },
]
export default observable.object(
  {
    rowlist,
    saveRowList(addrow: any) {
      this.rowlist = [...this.rowlist, addrow]
    },
    updaterowlist(row: any) {
      this.rowlist = row
    },
    saveTable() {
      const copydata = JSON.parse(JSON.stringify(this.rowlist))
      let flag = false
      copydata.forEach((item: any) => {
        if (item.title === '') {
          item.titlevalid = true
          flag = true
        }
        if (item.content === '') {
          item.contentvalid = true
          flag = true
        }
        if (item.conname === '') {
          item.connamevalid = true
          flag = true
        }
      })
      if (flag) {
        this.updaterowlist(copydata)
        return
      }
      let result = 0
      copydata.forEach((item: any) => {
        result += item.content
      })
      if (result > 100) {
        alert('权重大于100')
        return
      }
      copydata.forEach((item: any) => {
        item.edit = false
      })
      this.updaterowlist(copydata)
    },
    editall() {
      const copydata = JSON.parse(JSON.stringify(this.rowlist))
      copydata.forEach((item: any, index: number) => {
        item.edit = true
      })
      this.updaterowlist(copydata)
    },
  },
  {
    saveRowList: action,
    updaterowlist: action,
    saveTable: action,
  }
)
