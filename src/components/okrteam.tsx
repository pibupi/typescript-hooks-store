import React, { useContext, useState, useEffect, useRef } from 'react'
import './okrteam.less'
import { Collapse } from 'antd'
import { Table, Menu, Dropdown, Progress, Input, Form, Button } from 'antd'
// import { DownOutlined, SettingOutlined } from '@ant-design/icons'
const EditableContext = React.createContext<any>(null)
interface Item {
  key: string
  name: string
  age: string
  address: string
}
const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm()
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  )
}

interface EditableCellProps {
  title: React.ReactNode
  editable: boolean
  children: React.ReactNode
  dataIndex: string
  record: any
  handleSave: (record: any) => void
}
const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false)
  const inputRef = useRef(null)
  const form = useContext(EditableContext)

  useEffect(() => {
    if (editing) {
      inputRef.current.focus()
    }
  }, [editing])

  const toggleEdit = () => {
    setEditing(!editing)
    form.setFieldsValue({ [dataIndex]: record[dataIndex] })
  }

  const save = async () => {
    try {
      const values = await form.validateFields()

      toggleEdit()
      handleSave({ ...record, ...values })
    } catch (errInfo) {
      console.log('Save failed:', errInfo)
    }
  }

  let childNode = children

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
        {children}
      </div>
    )
  }

  return <td {...restProps}>{childNode}</td>
}

interface EditableRowProps {
  index: number
}
const { Panel } = Collapse
const menu = (
  <Menu>
    <Menu.Item>编辑</Menu.Item>
    <Menu.Item>删除</Menu.Item>
  </Menu>
)
function callback(key: any) {
  console.log(key)
}
const genExtra = () => (
  <div>
    <span className="table-operation">
      <span>权重 100%</span>
      <span>完成度 56%</span>
      <span>负责人 </span>
      <Dropdown.Button overlay={menu}></Dropdown.Button>
    </span>
  </div>
)
interface IState {
  dataSource: any
  count: number
}
class OkrTeam extends React.Component<{}, IState> {
  columns: (
    | {
        title: string
        dataIndex: string
        width: string
        editable: boolean
        render?: undefined
      }
    | {
        title: string
        dataIndex: string
        width?: undefined
        editable?: undefined
        render?: undefined
      }
    | {
        title: string
        dataIndex: string
        render: (text: any, record: any) => JSX.Element
        width?: undefined
        editable?: undefined
      }
  )[]
  constructor(props: any) {
    super(props)
    this.state = {
      dataSource: [
        {
          key: '0',
          name: 'KR2：根据测试环境绿灯雷达监测，展示测试环境作战地图上各组件的应用健康检查情况',
          age: '32',
          address: '李雷',
        },
        {
          key: '1',
          name: 'KR2：根据测试环境绿灯雷达监测，展示测试环境作战地图上各组件的应用健康检查情况',
          age: '32',
          address: 'London, Park Lane no. 1',
        },
      ],
      count: 2,
    }
    this.columns = [
      {
        title: 'name',
        dataIndex: 'name',
        width: '70%',
        editable: true,
      },
      {
        title: 'age',
        dataIndex: 'age',
      },
      {
        title: 'address',
        dataIndex: 'address',
        render: () => {
          return (
            <div style={{ width: 170 }}>
              <Progress percent={30} size="small" />
            </div>
          )
        },
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: () => <span>详情</span>,
      },
    ]
  }
  handleDelete = (key: any) => {
    const dataSource = [...this.state.dataSource]
    this.setState({ dataSource: dataSource.filter((item) => item.key !== key) })
  }

  handleAdd = () => {
    const { count, dataSource } = this.state
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    }
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    })
  }

  handleSave = (row: any) => {
    const newData = [...this.state.dataSource]
    const index = newData.findIndex((item) => row.key === item.key)
    const item = newData[index]
    newData.splice(index, 1, {
      ...item,
      ...row,
    })
    this.setState({ dataSource: newData })
  }
  render() {
    const { dataSource } = this.state
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    }
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col
      }
      return {
        ...col,
        onCell: (record: any) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      }
    })
    return (
      <div>
        <h1 className="title">实施平台化战略</h1>
        <Collapse
          bordered={false}
          defaultActiveKey={['1']}
          onChange={callback}
          expandIconPosition="right"
          accordion={false}
        >
          <Panel header="O1：配合智慧协同平台建设完成测试环境可视化展示" key="1" extra={genExtra()}>
            <Table
              showHeader={false}
              components={components}
              rowClassName={() => 'editable-row'}
              bordered
              dataSource={dataSource}
              columns={columns}
              style={{ marginLeft: '30px' }}
            />
            <Button onClick={this.handleAdd} type="default" style={{ marginBottom: 16, marginLeft: 30 }}>
              + 添加Key Results
            </Button>
          </Panel>
        </Collapse>
      </div>
    )
  }
}
export default OkrTeam
