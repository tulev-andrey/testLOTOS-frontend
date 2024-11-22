import { data } from '../types'
import { ColumnsType } from 'antd/es/table'

export const defaultColumns: ColumnsType = [
  {
    dataIndex: 'title',
    key: 'title',
    width: '300px'
  }
]

export const defaultData: data[] = [
  {
    id: 1,
    title: 'ХОД'
  },
  {
    id: 2,
    title: 'ПАРАМЕТРЫ И ТРЕБОВАНИЯ'
  },
  {
    id: 3,
    title: 'Срок изготовления лота, дней'
  },
  {
    id: 4,
    title: 'Гарантийные обязательства, мес'
  },
  {
    id: 5,
    title: 'Условия оплаты'
  },
  {
    id: 6,
    title: 'Стоимость изготовления лота, руб'
  },
  {
    id: 7,
    title: 'Действия'
  }
]
