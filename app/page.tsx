import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { QueSeHereda } from '@/components/que-se-hereda'
import { Proposals } from '@/components/proposals'
import { Philosophy } from '@/components/philosophy'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <QueSeHereda />
        <Proposals />
        <Philosophy />
      </main>
      <SiteFooter />
    </>
  )
}
