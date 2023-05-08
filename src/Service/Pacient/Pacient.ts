import { TOKEN } from '@/utils/constantes'
import { httpClient } from '../http-client'

type Response = {
  _id: string
  userId: string
  name: string
  birthdate: string
  profession: string
  schooling: string
  demands: string
  personalAnnotations: string
}

export const PacientService = async (): Promise<Response[]> => {
  const response = await httpClient.request<Response[]>({
    url: '/patient/64348d31d1f55efc1d6dcdda',
    method: 'get',
    headers: {
      Authorization: TOKEN
    }
  })

  return response.data
}
