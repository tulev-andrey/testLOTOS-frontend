import './App.css'
import { Table, Tag } from 'antd'
// import Api from './api/api.ts'
import { defaultColumns, defaultData } from './constants'
import dayjs from 'dayjs'
import { User } from './types'
import { useState } from 'react'

const hod1 = {
  start: dayjs(),
  stop: dayjs().add(30, 's')
}
const hod2 = {
  start: dayjs().add(30, 's'),
  stop: dayjs().add(60, 's')
}

function App() {
  const lotId = 1

  // const api = new Api()

  const users: User[] = [
    {
      id: 123,
      hod: hod1,
      name: '123',
      lotDay: 1,
      guaranteeDay: 24,
      payConditions: 30,
      price: 10
    },
    {
      id: 321,
      hod: hod2,
      name: '321',
      lotDay: 2,
      guaranteeDay: 48,
      payConditions: 60,
      price: 120
    }
  ]

  const columns = [...defaultColumns]

  for (const user of users) {
    columns.push({
      dataIndex: user.id.toString(),
      key: user.id.toString(),
      align: 'center'
    })
  }

  const [now, setNow] = useState(dayjs())

  setInterval(() => setNow(dayjs()), 1000)

  const getHodTime = (user: User) => {
    if (now.isAfter(user.hod.start) && now.isBefore(user.hod.stop)) return user.hod.stop.diff(now, 'second') + 1
  }

  const data = defaultData.map(defData => {
    for (const user of users) {
      switch (defData.id) {
        case 1:
          defData[user.id] = getHodTime(user) ? <Tag color="red">{getHodTime(user)}</Tag> : null
          break
        case 2:
          defData[user.id] = user.name
          break
        case 3:
          defData[user.id] = user.lotDay
          break
        case 4:
          defData[user.id] = user.guaranteeDay
          break
        case 5:
          defData[user.id] = user.payConditions
          break
        case 6:
          defData[user.id] = user.price
          break
        case 7:
          defData[user.id] = null
          break
      }
    }
    return defData
  })

  return (
    <>
      <h1 className="header">
        Ход торгов <strong>Тестовые торги, лот {lotId}</strong>
      </h1>
      <Tag color="red">
        Уважаемые Участники, во время вашего хода вы можете изменить параметры торгов, указанных в таблице
      </Tag>
      <Table pagination={false} showHeader={false} columns={columns} dataSource={data} />
    </>
  )
}

export default App
