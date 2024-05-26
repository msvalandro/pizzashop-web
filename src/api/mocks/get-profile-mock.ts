import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'user-id',
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '51999999999',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  },
)
