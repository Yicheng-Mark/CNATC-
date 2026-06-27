import { useState } from 'react'
import PageHero from '@/components/PageHero'
import { useScrollReveal } from '@/hooks/useScrollReveal'

/* ─── News Data ─── */
const newsItems = [
  {
    image: '/images/news-marathon-guangzhou.jpg',
    date: '2024-12-15',
    title: 'CNATC圆满完成2024广州马拉松全程医疗保障',
    excerpt: '本次广马，CNATC派出30名专业运动防护师，在42.195公里的赛道上设置了12个医疗保障点...',
  },
  {
    image: '/images/service-event-protection.jpg',
    date: '2024-11-28',
    title: '运动防护师：马拉松赛道上的隐形守护者',
    excerpt: '从起点到终点，运动防护师用专业知识和丰富经验，为每一位跑者保驾护航...',
  },
  {
    image: '/images/service-fitness-training.jpg',
    date: '2024-11-10',
    title: 'CNATC为CBA联赛提供赛季全程医疗保障',
    excerpt: '从季前赛到总决赛，CNATC团队随队出征，为球员提供赛前热身、赛中应急和赛后康复的全方位服务...',
  },
  {
    image: '/images/service-education.jpg',
    date: '2024-10-22',
    title: '第15期运动防护师认证培训圆满结业',
    excerpt: '来自全国各地的40名学员经过为期三个月的系统培训，顺利通过考核，获得CNATC运动防护师认证...',
  },
  {
    image: '/images/service-rehab.jpg',
    date: '2024-09-15',
    title: '运动康复新技术研讨会在广州成功举办',
    excerpt: '汇聚国内外运动康复领域专家学者，共同探讨运动损伤康复的最新技术与方法...',
  },
  {
    image: '/images/service-first-aid-cert.jpg',
    date: '2024-08-20',
    title: 'AHA Heartsaver急救认证课程招生中',
    excerpt: '美国心脏协会官方认证，两天密集培训，掌握专业急救技能...',
  },
  {
    image: '/images/news-marathon-guangzhou.jpg',
    date: '2024-07-10',
    title: 'CNATC签约成为省运会官方医疗保障机构',
    excerpt: '凭借专业的服务能力和丰富的赛事保障经验，CNATC成功签约成为本届省运会官方合作伙伴...',
  },
  {
    image: '/images/course-basic-guard.jpg',
    date: '2024-06-01',
    title: '2024年度运动防护师职称评审政策发布',
    excerpt: '中国运动防护师职称评审新政策正式发布，为行业发展带来新的机遇...',
  },
]

const courses = [
  { image: '/images/course-basic-guard.jpg', tag: '初级', name: '初级运动防护师认证', time: '2025年3月开班', desc: '为期6周的基础课程，涵盖运动解剖学、常见运动损伤识别与急救处理。' },
  { image: '/images/course-advanced-guard.jpg', tag: '高级', name: '高级运动防护师认证', time: '2025年4月开班', desc: '为期12周的进阶课程，深入损伤评估、康复方案设计和随队保障实务。' },
  { image: '/images/course-online-learning.jpg', tag: '线上', name: '运动防护理论线上课程', time: '随时报名', desc: '灵活的学习节奏，覆盖全部理论知识模块，支持反复观看。' },
  { image: '/images/course-basic-guard.jpg', tag: '冲刺', name: '认证考试冲刺班', time: '考前2周开班', desc: '高强度集中复习，模拟考试训练，助你一次通过认证考核。' },
  { image: '/images/course-advanced-guard.jpg', tag: '强化', name: '实操技能强化班', time: '每月滚动开班', desc: '专注于实操技能的反复训练，由资深讲师一对一指导。' },
  { image: '/images/service-education.jpg', tag: '定制', name: '企业/团队定制培训', time: '按需定制', desc: '根据企业或运动队的特定需求，量身定制培训内容和周期。' },
]

const events = [
  {
    image: '/images/news-marathon-guangzhou.jpg',
    tag: '马拉松',
    title: 'CNATC护航2024广州马拉松：三万跑者的安全防线',
    excerpt: '2024年12月8日清晨，广州塔下，三万跑者冲出起点。在这壮观的场景背后，CNATC的30名运动防护师分布在42.195公里的赛道上，构成了这道赛事的安全防线...',
  },
  {
    image: '/images/service-event-protection.jpg',
    tag: '篮球联赛',
    title: 'CBA赛场上的隐形守护者：一个赛季的坚守',
    excerpt: '从2024年10月的季前赛到2025年4月的总决赛，CNATC团队全程跟随，在每一场比赛的场边，都有他们专注的目光和随时准备冲入场内的身影...',
  },
]

/* ─── News Cards Section ─── */
function NewsCards() {
  const [visibleCount, setVisibleCount] = useState(4)
  const titleRef = useScrollReveal<HTMLDivElement>({ type: 'slideUp' })
  const gridRef = useScrollReveal<HTMLDivElement>({ type: 'staggerFadeIn', stagger: 0.1 })

  return (
    <section className="py-20 md:py-28 bg-[#202429]">
      <div className="section-container">
        <div ref={titleRef}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-white tracking-[0.05em]">
            最新资讯
          </h2>
        </div>

        <div ref={gridRef} className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {newsItems.slice(0, visibleCount).map((news, i) => (
            <div key={i} className="group bg-[#1d2126] rounded-xl overflow-hidden card-hover cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover img-zoom" />
              </div>
              <div className="p-5">
                <p className="text-[#989898] text-xs">{news.date}</p>
                <h3 className="mt-2 text-white font-semibold text-base leading-snug line-clamp-2 group-hover:text-[#b6dd38] transition-colors">
                  {news.title}
                </h3>
                <p className="mt-2 text-[#989898] text-sm line-clamp-2">{news.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < newsItems.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount(visibleCount + 4)}
              className="px-8 py-3 border border-white/50 rounded-full text-white font-medium transition-all duration-300 hover:bg-white hover:text-[#202429]"
            >
              加载更多
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

/* ─── Certification Courses Section ─── */
function CertificationCourses() {
  const titleRef = useScrollReveal<HTMLDivElement>({ type: 'slideUp' })
  const scrollRef = useScrollReveal<HTMLDivElement>({ type: 'staggerFadeIn', stagger: 0.1 })

  return (
    <section className="py-20 md:py-28 bg-[#202429]">
      <div className="section-container">
        <div ref={titleRef}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-white tracking-[0.05em]">
            防护师认证
          </h2>
          <p className="mt-3 text-[#989898] text-base md:text-lg">
            从入门到专业，系统化的运动防护师培训体系
          </p>
        </div>

        <div className="mt-10 md:mt-14 relative">
          {/* Scroll hint */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-l from-[#202429] to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-5 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory"
          >
            {courses.map((course, i) => (
              <div
                key={i}
                className="group min-w-[300px] md:min-w-[350px] bg-[#1d2126] rounded-xl overflow-hidden card-hover snap-start"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={course.image} alt={course.name} className="w-full h-full object-cover img-zoom" />
                </div>
                <div className="p-5">
                  <span className="pill-tag-filled text-xs">{course.tag}</span>
                  <h3 className="mt-3 text-white font-semibold text-lg">{course.name}</h3>
                  <p className="mt-1 text-[#989898] text-sm">{course.time}</p>
                  <p className="mt-2 text-[#989898] text-sm leading-relaxed">{course.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Event Protection Section ─── */
function EventProtection() {
  const titleRef = useScrollReveal<HTMLDivElement>({ type: 'slideUp' })

  return (
    <section className="py-20 md:py-28 bg-[#d5ccb4]">
      <div className="section-container">
        <div ref={titleRef}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-[#1d2126] tracking-[0.05em]">
            赛事保护
          </h2>
        </div>

        <div className="mt-10 md:mt-14 space-y-12 md:space-y-16">
          {events.map((evt, i) => (
            <div
              key={i}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12`}
            >
              <div className="lg:w-1/2 overflow-hidden rounded-xl">
                <img src={evt.image} alt={evt.title} className="w-full aspect-video object-cover img-zoom" />
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <span className="pill-tag-filled text-xs self-start">{evt.tag}</span>
                <h3 className="mt-4 text-2xl md:text-3xl font-bold text-[#1d2126] leading-snug">
                  {evt.title}
                </h3>
                <p className="mt-4 text-[#6b6b6b] text-base md:text-lg leading-relaxed">
                  {evt.excerpt}
                </p>
                <span className="mt-4 text-[#b6dd38] font-medium cursor-pointer hover:underline inline-flex items-center gap-1 self-start">
                  阅读更多 <span>&rarr;</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Page Export ─── */
export default function Progress() {
  return (
    <>
      <PageHero
        image="/images/hero-athletic-training.jpg"
        title="防护进展"
        subtitle="关注CNATC最新赛事保障、防护师培训认证与运动防护行业资讯"
      />
      <NewsCards />
      <CertificationCourses />
      <EventProtection />
    </>
  )
}
