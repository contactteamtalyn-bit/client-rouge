'use client'

import { useState, type CSSProperties } from 'react'
import { Camera } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SmartImageProps {
  src: string
  alt: string
  className?: string
  style?: CSSProperties
}

/** <img> with an elegant "Photo à venir" fallback (dark, on-brand). No Unsplash.
 *  `className` is applied to BOTH the img and the fallback box, so size it from the caller. */
export function SmartImage({ src, alt, className, style }: SmartImageProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center gap-2.5 border border-[#B22333]/25 bg-[#2A1510]',
          className
        )}
        style={style}
        aria-label={alt}
      >
        <Camera size={22} strokeWidth={1.5} className="text-[#C4862A]/60" />
        <span className="px-4 text-center font-outfit text-[11px] font-medium uppercase leading-relaxed tracking-[0.14em] text-[#FBF7F2]/55">
          Photo à venir
          <span className="mt-1 block font-outfit text-[9px] tracking-normal text-[#FBF7F2]/35">{src.split('/').pop()}</span>
        </span>
      </div>
    )
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} onError={() => setError(true)} className={className} style={style} />
}
