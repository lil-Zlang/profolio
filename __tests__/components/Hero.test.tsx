import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero Component', () => {
  it('displays the main heading with name', () => {
    render(<Hero />)
    expect(screen.getByText(/Zhilang Gui/i)).toBeInTheDocument()
  })

  it('displays the role title', () => {
    render(<Hero />)
    expect(screen.getByText(/Solution Engineer/i)).toBeInTheDocument()
  })

  it('displays the description', () => {
    render(<Hero />)
    expect(screen.getByText(/I build intelligent systems that bridge complex algorithms/i)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('has correct links for CTA buttons', () => {
    render(<Hero />)
    const githubButton = screen.getByText('GitHub').closest('a')
    const contactButton = screen.getByText('Contact').closest('a')

    expect(githubButton).toHaveAttribute('href', 'https://github.com/lil-Zlang')
    expect(contactButton).toHaveAttribute('href', 'mailto:lang.gui.bu@gmail.com')
  })
})

