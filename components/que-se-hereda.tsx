import Image from 'next/image'

export function QueSeHereda() {
  return (
    <section id="que-se-hereda" className="scroll-mt-20 bg-secondary/50 px-5 py-16 md:px-10 md:py-[88px] xl:px-0">
      <div className="mx-auto max-w-[1200px]">
        
        {/* Encabezado de la sección */}
        <div className="mb-10 text-center md:mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.05em] text-primary md:text-xs">
            Nuestra Historia
          </p>
          <h2 className="mt-2 text-balance font-serif text-[34px] leading-tight text-foreground sm:text-[40px] md:text-[46px]">
            ¿Qué se hereda?
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-primary/40 rounded-full" />
        </div>

        {/* Cuadrícula editorial: Imagen testimonial y relato */}
        <div className="grid items-center gap-10 lg:grid-cols-[440px_1fr] lg:gap-14 xl:grid-cols-[470px_1fr] xl:gap-16">
          
          {/* Fotografía de la abuelita Julia Inés */}
          <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-4">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/images/origen-hereditario.png"
                  alt="Julia Inés junto a su nieta el día de su graduación en diseño, inspiración y origen de Hereditario"
                  fill
                  sizes="(min-width: 1024px) 470px, (min-width: 640px) 420px, 90vw"
                  className="object-cover saturate-[0.88] contrast-[1.02] transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-3.5 px-1 pb-1 text-center">
                <p className="font-serif text-[15px] italic text-foreground">
                  Julia Inés y su nieta
                </p>
                <p className="mt-0.5 text-[12px] uppercase tracking-wider text-muted-foreground">
                  El verdadero origen de Hereditario
                </p>
              </div>
            </div>
          </div>

          {/* Texto de la historia */}
          <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground sm:text-[16px] md:space-y-6">
            <p className="font-serif text-[20px] italic leading-snug text-primary sm:text-[22px]">
              Hoy quiero contarles sobre mi abuelita y sobre el verdadero origen de Hereditario.
            </p>

            <p>
              Mi mamá y mi abuelita son las mujeres más fuertes, entregadas y justas que he conocido. Julia Inés, mi
              abue, era costurera, y gracias a ese oficio sacó adelante a sus hijos. Inés era incansable: jamás la vi
              parar. Siempre estaba trabajando para dar lo mejor de sí en casa y con sus clientes, incluso con su propio
              dolor a cuestas, profundamente devota a su fe y a la iglesia.
            </p>

            <p>
              De pronto, un día, mi roca inquebrantable empezó a olvidar cosas. El diagnóstico fue Alzheimer. Vimos cómo
              esa mujer tan independiente iba cambiando, convirtiéndose en alguien que ya no nos recordaba. El
              Alzheimer es un monstruo que te arrebata a quien amas de forma cruel e inminente, un monstruo que terminó
              con su vida un día de junio de 2020, tras once años de una lucha que se sintió como una derrota inevitable
              ante la enfermedad.
            </p>

            <p>
              Y ese fantasma, según el historial familiar, resulta ser hereditario. Una palabra que daba demasiado
              miedo; más que por mí, por mi familia y por mi mami.
            </p>

            <p>
              Sin embargo, no quiero que su vida y su amor queden marcados por aquello que se la llevó. Quiero heredar
              lo bueno: recordar, mientras pueda, su rostro, su ceño fruncido, su forma de suspirar de cansancio y el
              sabor de su cocina. Saber que, de alguna forma, cada trazo, cada miedo superado, la felicidad de ver que a
              alguien le gusta tu trabajo, el acto de cortar la tela, coser y descoser, o crear algo con las manos, fue un
              camino que ella transitó primero.
            </p>

            {/* Cita de cierre destacada */}
            <div className="rounded-xl border-l-4 border-primary bg-card/80 p-5 shadow-sm sm:p-6">
              <p className="font-serif text-[17px] italic leading-relaxed text-foreground sm:text-[19px]">
                “Hereditario es una forma de recordarla a ella y a quienes la amamos, de honrar su paso por este mundo.
                Porque el amor, al final de todo, también es hereditario.”
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
