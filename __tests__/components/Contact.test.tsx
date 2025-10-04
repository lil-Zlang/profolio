import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Contact from '@/components/Contact'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  },
}))

// Mock react-intersection-observer
jest.mock('react-intersection-observer', () => ({
  useInView: () => [null, true],
}))

describe('Contact Component', () => {
  it('renders the contact form', () => {
    render(<Contact />)
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
  })

  it('allows user to type in form fields', () => {
    render(<Contact />)
    
    const nameInput = screen.getByLabelText(/Name/i) as HTMLInputElement
    const emailInput = screen.getByLabelText(/Email/i) as HTMLInputElement
    const subjectInput = screen.getByLabelText(/Subject/i) as HTMLInputElement
    const messageInput = screen.getByLabelText(/Message/i) as HTMLTextAreaElement

    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } })
    fireEvent.change(messageInput, { target: { value: 'Test message' } })

    expect(nameInput.value).toBe('John Doe')
    expect(emailInput.value).toBe('john@example.com')
    expect(subjectInput.value).toBe('Test Subject')
    expect(messageInput.value).toBe('Test message')
  })

  it('submits the form and shows success message', async () => {
    render(<Contact />)
    
    const nameInput = screen.getByLabelText(/Name/i)
    const emailInput = screen.getByLabelText(/Email/i)
    const subjectInput = screen.getByLabelText(/Subject/i)
    const messageInput = screen.getByLabelText(/Message/i)
    const submitButton = screen.getByRole('button', { name: /Send Message/i })

    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    fireEvent.change(subjectInput, { target: { value: 'Test' } })
    fireEvent.change(messageInput, { target: { value: 'Message' } })
    
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/Message sent successfully/i)).toBeInTheDocument()
    })
  })

  it('displays contact information', () => {
    render(<Contact />)
    expect(screen.getByText(/hello@example.com/i)).toBeInTheDocument()
    expect(screen.getByText(/\+1 \(555\) 123-4567/i)).toBeInTheDocument()
    expect(screen.getByText(/San Francisco, CA/i)).toBeInTheDocument()
  })
})

