import axios, { AxiosInstance } from 'axios'
import qs from 'qs'
import { User } from '../types'

export default class Api {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3000',
      paramsSerializer: params => qs.stringify(params)
    })
  }

  async getUsers(lotId: number): Promise<User[]> {
    return await this.api.get(`/users/${lotId}`)
  }
}
