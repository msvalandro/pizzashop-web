import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'user-id',
    name: 'Pizza Shop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, obcaecati!',
    managerId: 'manager-id',
    createdAt: new Date(),
    updatedAt: new Date(),
  })
})
