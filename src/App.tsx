import './App.css'
import { Table } from 'antd'
import Api from './api/api.ts'
import { defaultColumns } from './constants'

const lotId = 1

function App() {
  const api = new Api()

  const users = (await api.getUsers(lotId)) || []

  const columns = [...defaultColumns]

  return (
    <>
      <header>
        Ход торгов <strong>Тестовые торги, лот {}</strong>
      </header>
      <Table showHeader={false} dataSource={columns} />
    </>
  )
}

export default App
