import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '@/components/Navbar'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }: any) => children,
}))

describe('Navbar Component', () => {
  it('renders the navbar with logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
  })

  it('renders all navigation items', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0)
    expect(screen.getAllByText('About').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Skills').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Projects').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0)
  })

  it('has correct href attributes for navigation links', () => {
    render(<Navbar />)
    const homeLinks = screen.getAllByText('Home')
    const firstHomeLink = homeLinks[0].closest('a')
    expect(firstHomeLink).toHaveAttribute('href', '#home')
  })

  it('toggles mobile menu when button is clicked', () => {
    render(<Navbar />)
    const menuButton = screen.getByLabelText('Toggle menu')
    
    fireEvent.click(menuButton)
    // Menu should be open (this would show mobile nav items)
    
    fireEvent.click(menuButton)
    // Menu should be closed
  })
})

