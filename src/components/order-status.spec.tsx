import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('should display the right text for status pending', () => {
    const { getByText, getByTestId } = render(<OrderStatus status="pending" />)

    const statusText = getByText('Pendente')
    const badgeElement = getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-slate-400')
  })

  it('should display the right text for status canceled', () => {
    const { getByText, getByTestId } = render(<OrderStatus status="canceled" />)

    const statusText = getByText('Cancelado')
    const badgeElement = getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-rose-500')
  })

  it('should display the right text for status processing', () => {
    const { getByText, getByTestId } = render(
      <OrderStatus status="processing" />,
    )

    const statusText = getByText('Em preparo')
    const badgeElement = getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text for status delivering', () => {
    const { getByText, getByTestId } = render(
      <OrderStatus status="delivering" />,
    )

    const statusText = getByText('Em entrega')
    const badgeElement = getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-amber-500')
  })

  it('should display the right text for status delivered', () => {
    const { getByText, getByTestId } = render(
      <OrderStatus status="delivered" />,
    )

    const statusText = getByText('Entregue')
    const badgeElement = getByTestId('badge')

    expect(statusText).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-emerald-500')
  })
})
