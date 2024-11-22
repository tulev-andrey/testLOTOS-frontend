import { Dayjs } from 'dayjs'

export interface User {
  id: number
  name: string
  hod: { start: Dayjs; stop: Dayjs }
  lotDay: number
  guaranteeDay: number
  payConditions: number
  price: number
}

export interface column {
  dataIndex: string
  key: string
  width?: string
  align?: string
}

export interface data {
  id: number
  title: string
  [key: string]: any
}
