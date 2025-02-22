import Link from 'next/link'
import { MobileNav } from './MobileNav'
import { ThemeToggle } from '../ThemeToggle'

export function Navigation() {
  const links = [
    { href: '/about', label: 'About' },
    { href: '/consulting', label: 'Consulting' },
    { href: '/research', label: 'Research' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Girbani Dutta</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </nav>
  )
} 