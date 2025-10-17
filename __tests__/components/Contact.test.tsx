import { render, screen } from '@testing-library/react'
import Contact from '@/components/Contact'

describe('Contact Component', () => {
  it('renders the contact section', () => {
    render(<Contact />)
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('displays contact information', () => {
    render(<Contact />)
    expect(screen.getByText(/lang.gui.bu@gmail.com/i)).toBeInTheDocument()
    expect(screen.getByText(/San Francisco, CA/i)).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Contact />)
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
  })

  it('displays availability information', () => {
    render(<Contact />)
    expect(screen.getByText(/Available for freelance projects/i)).toBeInTheDocument()
    expect(screen.getByText(/Open to collaboration/i)).toBeInTheDocument()
    expect(screen.getByText(/Response within 24 hours/i)).toBeInTheDocument()
  })

  it('has correct email link', () => {
    render(<Contact />)
    const emailLink = screen.getByText(/lang.gui.bu@gmail.com/i)
    expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:lang.gui.bu@gmail.com')
  })
})

