import { api } from '@/lib/axios'

interface GetOrderDetailsParams {
  orderId: string
}

interface GetOrderDetailsResponse {
  id: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  totalInCents: number
  createdAt: string
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const { data } = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`)

  return data
}
