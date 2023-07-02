import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MessageForm from '@/components/MessageForm'

const mockedSetMessageInput = jest.fn()
const mockedHandleSubmit = jest.fn((e) => e.preventDefault())

const initalProps = {
  messageInput: '',
  setMessageInput: mockedSetMessageInput,
  submitText: 'Send',
  handleSubmit: mockedHandleSubmit,
}

it('should render the correct message within the input field', () => {
  const { rerender } = render(<MessageForm {...initalProps} />)
  expect(screen.getByRole('textbox')).toHaveValue('')

  rerender(
    <MessageForm {...initalProps} messageInput="this is my new message" />
  )
  expect(screen.getByRole('textbox')).toHaveValue('this is my new message')
})

it('should render the correct text within the submit button', () => {
  const { rerender } = render(<MessageForm {...initalProps} />)
  expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()

  rerender(<MessageForm {...initalProps} submitText="Edit" />)
  expect(screen.queryByRole('button', { name: 'Send' })).not.toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument()
})

it('should call the function passed through the setMessageInput prop on input change with input value', () => {
  render(<MessageForm {...initalProps} />)
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Hello!' } })
  expect(mockedSetMessageInput).toHaveBeenCalledWith('Hello!')
})

it('should call the function passed through the handleSubmit prop when the submit button is clicked', async () => {
  render(<MessageForm {...initalProps} />)
  await userEvent.click(screen.getByRole('button', { name: 'Send' }))
  expect(mockedHandleSubmit).toHaveBeenCalled()
})
