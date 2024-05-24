import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from './pagination'

const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear()
  })

  it('should display the right amount of pages and results', () => {
    const { getByText } = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={vi.fn()}
      />,
    )

    const pageText = getByText('Página 1 de 20')
    const totalItemsText = getByText('Total de 200 item(s)')

    expect(pageText).toBeInTheDocument()
    expect(totalItemsText).toBeInTheDocument()
  })

  it('should navigate to the next page', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = getByRole('button', {
      name: 'Próxima página',
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(1)
  })

  it('should navigate to the previous page', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = getByRole('button', {
      name: 'Página anterior',
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(4)
  })

  it('should navigate to the first page', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = getByRole('button', {
      name: 'Primeira página',
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(0)
  })

  it('should navigate to the last page', async () => {
    const user = userEvent.setup()

    const { getByRole } = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = getByRole('button', {
      name: 'Última página',
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(19)
  })
})
