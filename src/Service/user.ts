import { httpClient } from './http-client'

type Response = {
  id: string
  name: string
  email: string
}

export const GetLogin = async (): Promise<Response> => {
  const response = await httpClient.request<Response>({
    url: '/user',
    method: 'get'
  })

  return response.data
}
