import type { ReturnType } from '@/api/types/common'
import request from '@/utils/request'

export const getBar = () => {
  return request.get<any, ReturnType>('/getaaa')
}

export const postForm = (data: any) => {
  return request.post('/abc', data)
}
