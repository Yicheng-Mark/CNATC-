import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface PageHeroProps {
  image: string
  title: string
  subtitle?: string
  cta?: { text: string; href: string }
  children?: React.ReactNode
}

export default function PageHero({ image, title, subtitle, cta, children }: PageHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Step 1: Image fade in with scale
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.3 },
        { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' }
      )

      // Step 2: Title entrance
      const titleEls = contentRef.current?.querySelectorAll('.hero-title-line')
      if (titleEls) {
        gsap.fromTo(
          titleEls,
          { opacity: 0, filter: 'blur(40px)', y: 50 },
          {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 0.8,
            stagger: 0.3,
            ease: 'power2.out',
            delay: 0.5,
          }
        )
      }

      // Step 3: Subtitle and CTA
      const otherEls = contentRef.current?.querySelectorAll('.hero-other')
      if (otherEls) {
        gsap.fromTo(
          otherEls,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out', delay: 1.5 }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] flex items-end justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0 }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1] hero-overlay" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-[2] section-container pb-20 md:pb-28 text-center"
      >
        <h1 className="hero-title-line font-impact text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] text-white tracking-[0.05em] leading-tight"
          style={{ opacity: 0 }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="hero-other mt-4 md:mt-6 text-lg md:text-xl lg:text-2xl text-[#f6f6f6] max-w-[700px] mx-auto leading-relaxed"
            style={{ opacity: 0 }}
          >
            {subtitle}
          </p>
        )}
        {children}
        {cta && (
          <div className="hero-other mt-8" style={{ opacity: 0 }}>
            <a href={cta.href} className="btn-primary">
              {cta.text}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
