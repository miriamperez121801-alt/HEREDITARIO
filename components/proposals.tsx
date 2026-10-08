import Image from 'next/image'
import { cn } from '@/lib/utils'

const items = [
  {
    eyebrow: 'Línea multiuso',
    title: 'Prendas Estándar',
    description:
      'Básicos indispensables con nuestra firma de caída y textura. Inspirados en la “Capa Infinita” del boceto original.',
    image: '/images/prenda-multiuso-capa.png',
    alt: 'Mujer con capa de gasa verde esmeralda de puntas asimétricas sobre pantalón azul marino',
  },
  {
    eyebrow: 'Recomendado',
    title: 'Prendas Personalizadas',
    description:
      'Boceto de pantalones y faldas adaptadas rigurosamente a tus proporciones exactas para garantizar el calce ideal.',
    image: '/images/prenda-personalizada.png',
    alt: 'Costurera tomando medidas sobre un patrón de pantalón en la mesa de trabajo',
    featured: true,
    badge: 'A medida',
  },
  {
    eyebrow: 'Piezas únicas',
    title: 'Prendas Exclusivas',
    description:
      'Vestidos y diseños únicos nacidos de tus ideas y nuestra dirección artística. El punto cúspide de la alta costura local.',
    image: '/images/prenda-exclusiva.jpg',
    alt: 'Poncho exclusivo con paneles geométricos en azul petróleo y gris sobre un maniquí en el taller Hereditario',
  },
]

export function Proposals() {
  return (
    <section id="propuestas" className="scroll-mt-24 bg-secondary px-5 py-16 md:px-10 md:py-[90px] xl:px-0">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.04em] text-primary md:text-xs">
            Nuestras propuestas
          </p>
          <h2 className="mt-3 text-balance font-serif text-[32px] leading-tight text-foreground md:text-[40px]">
            Productos y Servicios
          </h2>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 md:mt-[50px] lg:grid-cols-3 lg:gap-[30px]">
          {items.map((item) => (
            <li
              key={item.title}
              className={cn(
                'group flex flex-col rounded-xl border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
                item.featured
                  ? 'border-primary shadow-[0_12px_30px_-12px_rgba(179,90,58,0.35)] sm:col-span-2 lg:col-span-1'
                  : 'border-border',
              )}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted">
                <Image
                  src={item.image || '/placeholder.svg'}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-[center_40%] saturate-[0.8] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center justify-between gap-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.02em] text-primary">{item.eyebrow}</p>
                {item.badge && (
                  <span className="rounded bg-accent px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.02em] text-accent-foreground">
                    {item.badge}
                  </span>
                )}
              </div>
              <h3 className="mt-1.5 font-serif text-[24px] leading-tight text-foreground">{item.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.55] text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
