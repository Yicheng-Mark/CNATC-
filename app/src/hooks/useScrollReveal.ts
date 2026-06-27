import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type AnimationType = 'fadeIn' | 'slideUp' | 'staggerFadeIn' | 'numberCounter' | 'heroScale'

interface ScrollRevealOptions {
  type?: AnimationType
  duration?: number
  delay?: number
  stagger?: number
  y?: number
  threshold?: number
}

export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null)
  const {
    type = 'fadeIn',
    duration = 1,
    delay = 0,
    stagger = 0.1,
    y = 50,
    threshold = 0.1,
  } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let ctx = gsap.context(() => {
      switch (type) {
        case 'fadeIn':
          gsap.fromTo(
            element,
            { opacity: 0 },
            {
              opacity: 1,
              duration,
              delay,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: element,
                start: `top ${100 - threshold * 100}%`,
                toggleActions: 'play none none none',
              },
            }
          )
          break

        case 'slideUp':
          gsap.fromTo(
            element,
            { opacity: 0, y },
            {
              opacity: 1,
              y: 0,
              duration,
              delay,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: element,
                start: `top ${100 - threshold * 100}%`,
                toggleActions: 'play none none none',
              },
            }
          )
          break

        case 'staggerFadeIn':
          const children = element.children
          gsap.fromTo(
            children,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger,
              delay,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: element,
                start: `top ${100 - threshold * 100}%`,
                toggleActions: 'play none none none',
              },
            }
          )
          break

        case 'heroScale':
          gsap.fromTo(
            element,
            { scale: 1.5 },
            {
              scale: 1,
              duration: 2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: element,
                start: `top ${100 - threshold * 100}%`,
                toggleActions: 'play none none none',
              },
            }
          )
          break

        default:
          break
      }
    }, element)

    return () => ctx.revert()
  }, [type, duration, delay, stagger, y, threshold])

  return ref
}

export function useNumberCounter(
  targetValue: number,
  suffix: string = '',
  duration: number = 2.5
) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const ctx = gsap.context(() => {
      const obj = { value: 0 }
      gsap.to(obj, {
        value: targetValue,
        duration,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (element) {
            element.textContent = Math.round(obj.value).toLocaleString() + suffix
          }
        },
      })
    }, element)

    return () => ctx.revert()
  }, [targetValue, suffix, duration])

  return ref
}
