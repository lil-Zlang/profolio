import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar Component', () => {
  it('renders the navbar with logo', () => {
    render(<Navbar />)
    expect(screen.getByText('ZG')).toBeInTheDocument()
  })

  it('renders all navigation items', () => {
    render(<Navbar />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Navbar />)
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('toggles mobile menu when button is clicked', () => {
    render(<Navbar />)
    const menuButton = screen.getByText('☰')

    fireEvent.click(menuButton)
    expect(screen.getByText('✕')).toBeInTheDocument()

    fireEvent.click(screen.getByText('✕'))
    expect(screen.getByText('☰')).toBeInTheDocument()
  })

  it('calls onSectionClick when navigation item is clicked', () => {
    const mockOnSectionClick = jest.fn()
    render(<Navbar onSectionClick={mockOnSectionClick} />)

    const aboutButton = screen.getByText('About')
    fireEvent.click(aboutButton)

    expect(mockOnSectionClick).toHaveBeenCalledWith('about')
  })
})

