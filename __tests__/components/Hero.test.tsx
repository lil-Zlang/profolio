import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  },
}))

describe('Hero Component', () => {
  it('renders the hero section', () => {
    render(<Hero />)
    expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument()
  })

  it('displays the main heading with name', () => {
    render(<Hero />)
    expect(screen.getByText(/Your Name/i)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText(/View My Work/i)).toBeInTheDocument()
    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument()
  })

  it('has correct links for CTA buttons', () => {
    render(<Hero />)
    const viewWorkButton = screen.getByText(/View My Work/i).closest('a')
    const contactButton = screen.getByText(/Get In Touch/i).closest('a')
    
    expect(viewWorkButton).toHaveAttribute('href', '#projects')
    expect(contactButton).toHaveAttribute('href', '#contact')
  })

  it('renders scroll down indicator', () => {
    render(<Hero />)
    expect(screen.getByText(/Scroll Down/i)).toBeInTheDocument()
  })
})

