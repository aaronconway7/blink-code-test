import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Message from '@/components/Message'

const mockedHandleTestClick = jest.fn()

beforeEach(() => {
  render(
    <Message
      text="this is my message"
      lastUpdated="2020-08-18T11:16:45"
      handleTextClick={mockedHandleTestClick}
    />
  )
})

it('should render the correct message', () => {
  expect(screen.getByText('this is my message')).toBeInTheDocument()
})

it('should render the correctly formatted date/time', () => {
  expect(screen.getByText('18 Aug 2020, 11:16')).toBeInTheDocument()
})

it('should call the function passed through the handleTextClick prop', async () => {
  await userEvent.click(screen.getByText('this is my message'))
  expect(mockedHandleTestClick).toHaveBeenCalled()
})
