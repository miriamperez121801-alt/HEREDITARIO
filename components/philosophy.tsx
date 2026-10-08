import Image from 'next/image'
import { WHATSAPP_URL } from '@/lib/constants'

export function Philosophy() {
  return (
    <section id="filosofia" className="scroll-mt-24 px-5 py-16 md:px-10 md:py-[94px] xl:px-0">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[525px_1fr] lg:gap-[75px]">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image
            src="/images/filosofia-manos.png"
            alt="Manos de una costurera tomando la medida de cintura a un pantalón de pinzas marrón"
            fill
            sizes="(min-width: 1024px) 525px, 100vw"
            className="object-cover saturate-[0.8]"
          />
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.02em] text-primary md:text-xs">
            La filosofía de Hereditario por Mili
          </p>
          <h2 className="mt-3 text-balance font-serif text-[32px] leading-[1.18] text-foreground md:mt-4 md:text-[42px]">
            Tu silueta única merece comodidad y elegancia impecable
          </h2>
          <div className="mt-6 space-y-5 text-[15px] leading-[1.65] text-muted-foreground md:mt-8 md:text-[16px]">
            <p>
              En Hereditario transformamos la forma en que vives la moda: creemos que la ropa debe adaptarse a tu
              cuerpo, nunca tu cuerpo a la ropa.
            </p>
            <p>
              Nuestra propuesta combina lo mejor de las tendencias contemporáneas y los básicos indispensables con un
              ajuste impecable hecho a tu medida. Diseñamos para celebrar tu silueta única, garantizando comodidad,
              elegancia y una caída perfecta en cada prenda.
            </p>
          </div>
          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[46px] w-full items-center justify-center rounded-md bg-primary px-7 text-[15px] font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-foreground hover:shadow-md sm:w-auto"
            >
              Hacer Pedido Personalizado
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              Consultar Guía de Medidas
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
