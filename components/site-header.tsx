'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'

const links = [
  { label: '¿Qué se hereda?', href: '#que-se-hereda', active: true },
  { label: 'Productos', href: '#propuestas' },
  { label: 'Servicios', href: '#propuestas' },
  { label: 'Comprar', href: '#contacto' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-5 md:h-[128px] md:px-10 xl:px-0">
        <a href="#" aria-label="Hereditario, inicio">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-7 lg:gap-8">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(
                    'text-[13px] font-medium uppercase tracking-[0.01em] transition-colors hover:text-primary',
                    link.active ? 'text-foreground' : 'text-muted-foreground',
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contacto"
          className="hidden h-[44px] items-center rounded-md bg-primary px-6 text-[14px] font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-foreground hover:shadow-md md:inline-flex"
        >
          Contactar
        </a>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Móvil" className="border-t border-border bg-background px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-3.5 text-sm font-medium uppercase text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-5 flex h-11 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent-foreground"
          >
            Contactar
          </a>
        </nav>
      )}
    </header>
  )
}
