import { TOKEN } from '@/utils/constantes'
import { httpClient } from '../http-client'

type Response = {
  _id: string
  patientId: string
  occurrences: string[]
  serviceName: string
  createdOn: string
  modifiedOn: string
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
