import { api } from '@/lib/axios'

interface GetOrdersQuery {
  pageIndex: number
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

interface GetOrdersResponse {
  orders: {
    orderId: string
    customerName: string
    total: number
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    createdAt: string
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({
  pageIndex,
  orderId,
  customerName,
  status,
}: GetOrdersQuery) {
  const { data } = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
      orderId,
      customerName,
      status,
    },
  })

  return data
}
