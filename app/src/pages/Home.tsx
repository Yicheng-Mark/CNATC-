import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useScrollReveal, useNumberCounter } from '@/hooks/useScrollReveal'

/* ───────── Hero Section ───────── */
function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background scale + fade
      gsap.fromTo(
        bgRef.current,
        { opacity: 0, scale: 1.5 },
        { opacity: 1, scale: 1, duration: 2, ease: 'power2.out', delay: 0.3 }
      )

      // Title lines stagger
      const titles = contentRef.current?.querySelectorAll('.hero-line')
      if (titles) {
        gsap.fromTo(
          titles,
          { opacity: 0, filter: 'blur(40px)', y: 50 },
          {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 0.8,
            stagger: 0.3,
            ease: 'power2.out',
            delay: 0.8,
          }
        )
      }

      // CTA
      gsap.fromTo(
        '.hero-cta',
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power2.out', delay: 2 }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 z-0" style={{ opacity: 0 }}>
        <img
          src="/images/hero-athletic-training.jpg"
          alt="CNATC运动防护"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute inset-0 z-[1] hero-overlay" />

      {/* Content */}
      <div ref={contentRef} className="relative z-[2] text-center section-container pt-32">
        <p className="hero-line text-[#b6dd38] font-impact text-3xl md:text-4xl lg:text-5xl tracking-wider mb-2"
          style={{ opacity: 0 }}>
          ATc<sup className="text-lg">&reg;</sup>
        </p>
        <h1 className="hero-line font-impact text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] text-white tracking-[0.05em] leading-tight"
          style={{ opacity: 0 }}>
          超越预期
        </h1>
        <h2 className="hero-line font-impact text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-white tracking-[0.05em] leading-tight mt-2"
          style={{ opacity: 0 }}>
          服务你想不到
        </h2>
        <p className="hero-line mt-6 md:mt-8 text-base md:text-lg text-[#f6f6f6] max-w-[600px] mx-auto leading-relaxed"
          style={{ opacity: 0 }}>
          CNATC&trade;运动防护与运康学习网。专门从事运动急救、运动防护及康复体能训练专业服务与器材提供商。
        </p>
        <div className="hero-cta mt-8 md:mt-10" style={{ opacity: 0 }}>
          <Link to="/contact" className="btn-primary">
            联系我们
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ───────── Core Business Section ───────── */
const businesses = [
  {
    image: '/images/service-first-aid-cert.jpg',
    title: '急救认证',
    desc: '致力于提供先进的美国心脏协会（AHA）与中国医疗救援协会急救认证，培养专业急救人才。',
    link: '/services',
    reverse: false,
  },
  {
    image: '/images/service-fitness-training.jpg',
    title: '体能训练',
    desc: '提供专业的体能训练和运动防护技术服务，推广国际化功能性训练与体能康复理念，助力运动员突破极限。',
    link: '/services',
    reverse: true,
  },
  {
    image: '/images/service-event-protection.jpg',
    title: '赛事防护',
    desc: '为各类体育赛事提供全方位防护保障服务，从赛前评估到赛中应急处理再到赛后康复，全程守护运动员安全。',
    link: '/services',
    reverse: false,
  },
  {
    image: '/images/service-education.jpg',
    title: '防护学堂',
    desc: '开展运动防护师培训认证，线上线下学习引流。从初级到高级，系统化培养运动防护专业人才。',
    link: '/academy',
    reverse: true,
  },
]

function CoreBusiness() {
  const titleRef = useScrollReveal<HTMLDivElement>({ type: 'slideUp' })
  const descRef = useScrollReveal<HTMLParagraphElement>({ type: 'fadeIn' })
  const gridRef = useScrollReveal<HTMLDivElement>({ type: 'staggerFadeIn', stagger: 0.1 })

  return (
    <section className="py-20 md:py-28 bg-[#202429]">
      <div className="section-container">
        <div ref={titleRef}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-white tracking-[0.05em] text-center">
            核心业务
          </h2>
        </div>
        <p ref={descRef} className="mt-4 text-[#989898] text-center max-w-[700px] mx-auto text-base md:text-lg">
          运动防护、急救推广和运动专项训练 — Athletic therapist and first aid and Sports-Specific Training
        </p>

        <div ref={gridRef} className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {businesses.map((biz, i) => (
            <Link
              key={i}
              to={biz.link}
              className={`group flex flex-col ${biz.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} bg-[#1d2126] rounded-xl overflow-hidden card-hover`}
            >
              <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden">
                <img
                  src={biz.image}
                  alt={biz.title}
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{biz.title}</h3>
                <p className="text-[#989898] text-sm md:text-base leading-relaxed">{biz.desc}</p>
                <span className="mt-4 text-[#b6dd38] text-sm font-medium group-hover:underline inline-flex items-center gap-1">
                  了解更多 <span className="text-lg">&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── Excellent Services Section ───────── */
const services = [
  {
    image: '/images/service-first-aid-cert.jpg',
    title: '急救认证',
    desc: '美国心脏协会（AHA）Heartsaver急救认证 & 中国医疗救援协会急救认证，面向教练、运动员、体育爱好者开放。',
  },
  {
    image: '/images/service-fitness-training.jpg',
    title: '体能训练',
    desc: '专业体能评估与训练方案定制，涵盖力量、速度、耐力、柔韧性等全方位体能素质提升。',
  },
  {
    image: '/images/service-event-protection.jpg',
    title: '赛事防护',
    desc: '从赛前风险评估、赛中医疗保障到赛后损伤管理，为马拉松、足球、篮球等各类赛事提供全程防护服务。',
  },
]

function ExcellentServices() {
  const titleRef = useScrollReveal<HTMLDivElement>({ type: 'slideUp' })
  const gridRef = useScrollReveal<HTMLDivElement>({ type: 'staggerFadeIn', stagger: 0.1 })

  return (
    <section className="py-20 md:py-28 bg-[#202429]">
      <div className="section-container">
        <div ref={titleRef} className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-white tracking-[0.05em]">
            卓越服务
          </h2>
          <p className="mt-4 text-[#989898] text-base md:text-lg">
            三大主营业务，覆盖运动防护全链条
          </p>
        </div>

        <div ref={gridRef} className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {services.map((svc, i) => (
            <div key={i} className="group bg-[#1d2126] rounded-xl overflow-hidden card-hover">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{svc.title}</h3>
                <p className="text-[#989898] text-sm leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── Video Section ───────── */
function VideoSection() {
  const contentRef = useScrollReveal<HTMLDivElement>({ type: 'staggerFadeIn', stagger: 0.2 })

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/service-sports-guard.jpg"
          alt="品牌理念"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(rgba(29,33,38,0) 40%, #1d2126 90%)' }} />

      {/* Content */}
      <div ref={contentRef} className="relative z-[2] h-full flex flex-col items-center justify-center text-center section-container px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-white tracking-[0.05em]">
          运动防护为每一次挑战护航
        </h2>
        <p className="mt-6 text-[#f6f6f6] text-base md:text-lg max-w-[700px] leading-relaxed">
          CNATC致力于推广国际化的运动防护、功能性训练与体能康复理念和方法，助力中国体能训练及运动防护专业水平不断提升。
        </p>
        <Link to="/academy" className="btn-primary mt-8">
          了解更多
        </Link>
      </div>
    </section>
  )
}

/* ───────── Data Performance Section ───────── */
function DataItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const counterRef = useNumberCounter(value, suffix)
  return (
    <div className="text-center md:text-left">
      <span
        ref={counterRef}
        className="font-impact text-4xl md:text-5xl lg:text-6xl text-[#b6dd38] tracking-[0.05em]"
      >
        0{suffix}
      </span>
      <p className="mt-2 text-[#989898] text-base md:text-lg">{label}</p>
    </div>
  )
}

function DataPerformance() {
  const titleRef = useScrollReveal<HTMLDivElement>({ type: 'slideUp' })
  const dataRef = useScrollReveal<HTMLDivElement>({ type: 'staggerFadeIn', stagger: 0.15 })

  return (
    <section className="py-24 md:py-32 bg-[#202429]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* Left - Data */}
          <div className="lg:col-span-3">
            <div ref={titleRef}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-white tracking-[0.05em]">
                数据表现
              </h2>
            </div>
            <div ref={dataRef} className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
              <DataItem value={500} suffix="+" label="场赛事服务" />
              <DataItem value={50000} suffix="+" label="名运动员" />
              <DataItem value={200} suffix="+" label="个合作俱乐部" />
            </div>
          </div>

          {/* Right - Image */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/images/hero-athletic-training.jpg"
                alt="运动员"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────── Service Network Section ───────── */
const cities = [
  { name: '北京', size: 'text-4xl md:text-5xl', opacity: 1, highlight: true },
  { name: '上海', size: 'text-3xl md:text-4xl', opacity: 0.9, highlight: true },
  { name: '广州', size: 'text-5xl md:text-6xl', opacity: 1, highlight: true },
  { name: '深圳', size: 'text-3xl md:text-4xl', opacity: 0.85, highlight: false },
  { name: '南昌', size: 'text-2xl md:text-3xl', opacity: 0.6, highlight: false },
  { name: '贵阳', size: 'text-xl md:text-2xl', opacity: 0.5, highlight: false },
  { name: '长沙', size: 'text-2xl md:text-3xl', opacity: 0.7, highlight: false },
  { name: '武汉', size: 'text-3xl md:text-4xl', opacity: 0.8, highlight: false },
  { name: '西安', size: 'text-xl md:text-2xl', opacity: 0.5, highlight: false },
  { name: '郑州', size: 'text-2xl md:text-3xl', opacity: 0.65, highlight: false },
  { name: '温州', size: 'text-lg md:text-xl', opacity: 0.4, highlight: false },
  { name: '太原', size: 'text-lg md:text-xl', opacity: 0.4, highlight: false },
  { name: '哈尔滨', size: 'text-xl md:text-2xl', opacity: 0.5, highlight: false },
  { name: '长春', size: 'text-lg md:text-xl', opacity: 0.4, highlight: false },
  { name: '福州', size: 'text-2xl md:text-3xl', opacity: 0.7, highlight: false },
  { name: '厦门', size: 'text-xl md:text-2xl', opacity: 0.55, highlight: false },
  { name: '泉州', size: 'text-lg md:text-xl', opacity: 0.45, highlight: false },
  { name: '漳州', size: 'text-base md:text-lg', opacity: 0.35, highlight: false },
  { name: '三明', size: 'text-base md:text-lg', opacity: 0.35, highlight: false },
  { name: '莆田', size: 'text-base md:text-lg', opacity: 0.35, highlight: false },
  { name: '龙岩', size: 'text-base md:text-lg', opacity: 0.35, highlight: false },
  { name: '宁德', size: 'text-base md:text-lg', opacity: 0.35, highlight: false },
]

function ServiceNetwork() {
  const titleRef = useScrollReveal<HTMLDivElement>({ type: 'slideUp' })
  const citiesRef = useScrollReveal<HTMLDivElement>({ type: 'staggerFadeIn', stagger: 0.05 })

  return (
    <section className="py-24 md:py-32 bg-[#202429]">
      <div className="section-container">
        <div ref={titleRef} className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-white tracking-[0.05em]">
            服务网络
          </h2>
          <p className="mt-4 text-[#989898] text-base md:text-lg">
            CNATC运动防护服务已覆盖全国主要城市
          </p>
        </div>

        <div ref={citiesRef} className="mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-x-6 md:gap-x-10 gap-y-4 md:gap-y-6">
          {cities.map((city, i) => (
            <span
              key={i}
              className={`${city.size} font-bold transition-all duration-300 hover:text-[#b6dd38] hover:opacity-100 cursor-default ${
                city.highlight ? 'text-[#b6dd38]' : 'text-white'
              }`}
              style={{ opacity: city.opacity }}
            >
              {city.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────── Home Page Export ───────── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <CoreBusiness />
      <ExcellentServices />
      <VideoSection />
      <DataPerformance />
      <ServiceNetwork />
    </>
  )
}
