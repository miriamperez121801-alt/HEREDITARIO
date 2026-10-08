'use client'

import { useState } from 'react'
import Image from 'next/image'

export function Hero() {
  const [videoError, setVideoError] = useState(false)

  return (
    <section className="px-4 pb-12 pt-6 sm:px-6 md:px-10 md:pb-16 md:pt-10 xl:px-0">
      <div className="mx-auto max-w-[1200px]">
        {/* Banner principal con video de fondo */}
        <div className="relative min-h-[520px] sm:min-h-[560px] md:min-h-[620px] w-full overflow-hidden rounded-2xl border border-border shadow-xl flex items-center justify-center text-center">
          
          {/* Video en reproducción automática, bucle, sin sonido y con playsInline para móviles */}
          {!videoError ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/taller-minimal.png"
              onError={() => setVideoError(true)}
              className="absolute inset-0 h-full w-full object-cover scale-105"
            >
              <source
                src="/My_first_board_In_a_craftsman_style_a_persons_hands_AMsuCqlf (1).mp4"
                type="video/mp4"
              />
              {/* Imagen alternativa para navegadores que no soportan video */}
              <img
                src="/images/taller-minimal.png"
                alt="Taller de sastrería artesanal Hereditario"
                className="h-full w-full object-cover"
              />
            </video>
          ) : (
            /* Imagen alternativa si el video no puede reproducirse */
            <Image
              src="/images/taller-minimal.png"
              alt="Taller de sastrería artesanal Hereditario"
              fill
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover saturate-[0.85]"
            />
          )}

          {/* Capa de oscurecimiento y gradiente para garantizar legibilidad del texto */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/65 backdrop-brightness-[0.85]"
            aria-hidden="true"
          />

          {/* Contenido: Textos en español y botones con contraste optimizado */}
          <div className="relative z-10 mx-auto max-w-[850px] px-5 py-12 sm:px-8 md:py-16">
            <span className="inline-block rounded-full border border-white/25 bg-black/30 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#f2eae3] backdrop-blur-sm sm:text-xs">
              Prendas a medida & Moda consciente
            </span>

            <h1 className="mt-4 text-balance font-serif text-[32px] italic leading-[1.15] text-[#fcf9f6] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] sm:text-[44px] md:text-[54px] lg:text-[58px]">
              {'“La ropa debe adaptarse a ti, no tú a la ropa”'}
            </h1>

            <p className="mx-auto mt-5 max-w-[660px] text-pretty text-[15px] font-medium leading-relaxed text-[#f0e6de] drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] sm:text-[17px] md:mt-6 md:text-[18px]">
              Diseñamos para celebrar tu silueta única. En Hereditario transformamos la forma en que vives la moda con un
              ajuste impecable hecho a tu medida.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4 md:mt-10">
              <a
                href="#propuestas"
                className="inline-flex h-[48px] w-full items-center justify-center rounded-md bg-primary px-7 text-[15px] font-semibold text-primary-foreground shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-foreground hover:shadow-xl sm:w-auto"
              >
                Personalizar Ahora
              </a>
              <a
                href="#filosofia"
                className="inline-flex h-[48px] w-full items-center justify-center rounded-md border-2 border-white/80 bg-white/10 px-7 text-[15px] font-semibold text-white backdrop-blur-sm shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-foreground sm:w-auto"
              >
                Ver Proceso
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

