import { defineStore } from 'pinia'
import { getToken } from '@/utils/auth'
export const useUser = defineStore('user', () => {
  const token = ref(getToken())
  const phone = useLocalStorage('phone', '')

  return {
    token,
    phone,
  }
})
