import Image from 'next/image'
import { cn } from '@/lib/utils'

type LogoProps = {
  variant?: 'cafe' | 'blanco'
  className?: string
}

export function Logo({ variant = 'cafe', className }: LogoProps) {
  return (
    <Image
      src={variant === 'cafe' ? '/images/logo-cafe.png' : '/images/logo-blanco.png'}
      alt="Hereditario by Miliac"
      width={521}
      height={420}
      priority={variant === 'cafe'}
      className={cn('h-14 w-auto md:h-[84px]', className)}
    />
  )
}
