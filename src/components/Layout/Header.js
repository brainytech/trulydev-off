'use client'
import { useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import { Button } from '../ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <header className='fixed top-0 w-full z-50 glass-card border-b border-white/10'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          {/* Logo */}
          <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center'>
              <Code2 className='w-6 h-6 text-primary-foreground' />
            </div>
            <span className='text-xl font-bold gradient-text'>TechCraft</span>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navigation.map(item => (
              <a
                key={item.name}
                href={item.href}
                className='text-foreground hover:text-primary transition-colors duration-300 font-medium'
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className='hidden md:flex'>
            <Button variant='hero' size='lg'>
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden py-4 animate-fade-in-up'>
            <nav className='flex flex-col space-y-4'>
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-foreground hover:text-primary transition-colors duration-300 font-medium py-2'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant='hero' size='lg' className='mt-4'>
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
