import { Phone, Video } from 'lucide-react'
import type { ReactNode } from 'react'
import { Logo } from '@/components/logo'
import { WHATSAPP_PHONE_DISPLAY, WHATSAPP_URL } from '@/lib/constants'

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const contacts: { label: string; value: string; href: string; icon: ReactNode }[] = [
  { label: 'Instagram', value: '@hereditario.ec', href: 'https://instagram.com/hereditario.ec', icon: <InstagramIcon /> },
  { label: 'Facebook', value: 'Hereditario by Mili', href: 'https://www.facebook.com/profile.php?id=61584441505469', icon: <FacebookIcon /> },
  { label: 'TikTok', value: '@hereditario77', href: 'https://www.tiktok.com/@hereditario77', icon: <Video className="size-4" /> },
  { label: 'WhatsApp', value: WHATSAPP_PHONE_DISPLAY, href: WHATSAPP_URL, icon: <Phone className="size-4" /> },
]

export function SiteFooter() {
  return (
    <footer id="contacto" className="scroll-mt-24 bg-ink px-5 pb-8 pt-14 text-[#f3ece6] md:px-10 md:pt-[84px] xl:px-0">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_0.62fr] lg:gap-10">
          <div className="md:col-span-2 lg:col-span-1">
            <Logo variant="blanco" className="h-20 md:h-24" />
            <p className="mt-5 max-w-[330px] text-[13px] leading-[1.6] text-[#d7cdc5]">
              Moda consciente y sastrería a medida. Cada puntada hereda la paciencia y dedicación del verdadero oficio
              artesano.
            </p>
          </div>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.02em] text-primary">Contacto & Redes</h2>
            <ul className="mt-4 space-y-3">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
                    <span className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-[#f3e1d6] text-primary transition-all duration-200 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                      {c.icon}
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[9px] font-medium uppercase tracking-[0.04em] text-[#8f837b]">
                        {c.label}
                      </span>
                      <span className="text-[13px] font-medium text-[#f3ece6] transition-colors group-hover:text-primary">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-bold uppercase tracking-[0.02em] text-primary">Horarios de atención</h2>
            <p className="mt-4 text-[13px] font-medium">Lunes a Viernes</p>
            <p className="mt-2 text-[17px] font-semibold">9:00 am - 5:00 pm</p>
            <p className="mt-2 text-[10px] leading-snug text-[#b3a79f]">
              * Citas y consultas a medida disponibles previo aviso.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/15 pt-7 text-[11px] text-[#8f837b] sm:flex-row sm:items-center sm:justify-between md:mt-[72px]">
          <p>© 2025 Hereditario by Milca. Todos los derechos reservados.</p>
          <p>Ajuste impecable · Hecho a tu medida</p>
        </div>
      </div>
    </footer>
  )
}
