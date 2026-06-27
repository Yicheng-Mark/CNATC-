import { Link } from 'react-router-dom'
import PageHero from '@/components/PageHero'
import { useScrollReveal } from '@/hooks/useScrollReveal'

/* ─── Course Data ─── */
const courses = [
  { image: '/images/course-basic-guard.jpg', tag: '初级认证', name: '初级运动防护师认证', time: '6周 · 48课时', desc: '运动解剖学基础、常见损伤识别、急救处理入门、拉伸放松技术。适合零基础学员。', price: '¥3,800' },
  { image: '/images/course-advanced-guard.jpg', tag: '高级认证', name: '高级运动防护师认证', time: '12周 · 96课时', desc: '深度损伤评估、康复方案设计、随队保障实务、赛事应急指挥。需持有初级认证。', price: '¥6,800' },
  { image: '/images/service-first-aid-cert.jpg', tag: '国际认证', name: 'AHA Heartsaver急救认证', time: '2天 · 16课时', desc: '美国心脏协会官方认证课程，涵盖CPR、AED使用、气道梗阻处理等核心急救技能。', price: '¥1,200' },
  { image: '/images/service-fitness-training.jpg', tag: '专项技能', name: '运动体能训练专项', time: '8周 · 64课时', desc: '力量训练原理、功能性训练设计、运动表现评估、周期化训练规划。', price: '¥4,500' },
  { image: '/images/service-rehab.jpg', tag: '专项技能', name: '运动康复技术认证', time: '10周 · 80课时', desc: '损伤后康复评估、手法治疗技术、运动处方制定、重返赛场标准。', price: '¥5,200' },
  { image: '/images/service-sports-guard.jpg', tag: '定制服务', name: '企业/团队定制培训', time: '按需定制', desc: '根据企业或运动队的特定需求，量身定制培训内容和周期。支持上门培训。', price: '联系咨询' },
]

const courseSeries = [
  { image: '/images/course-basic-guard.jpg', name: '运动解剖学', hours: '12课时' },
  { image: '/images/service-fitness-training.jpg', name: '运动生理学', hours: '10课时' },
  { image: '/images/service-rehab.jpg', name: '损伤评估技术', hours: '16课时' },
  { image: '/images/service-first-aid-cert.jpg', name: '运动急救技术', hours: '8课时' },
  { image: '/images/service-rehab.jpg', name: '康复训练设计', hours: '14课时' },
  { image: '/images/service-fitness-training.jpg', name: '体能训练方法', hours: '12课时' },
  { image: '/images/service-event-protection.jpg', name: '赛事保障实务', hours: '6课时' },
  { image: '/images/service-education.jpg', name: '防护师职业素养', hours: '4课时' },
]

const alumni = [
  {
    image: '/images/service-sports-guard.jpg',
    name: '张明远',
    position: 'CBA某俱乐部首席运动防护师',
    quote: '从CNATC初级班到高级认证，三年的学习让我从一名体育爱好者成长为职业防护师。现在每天能和顶尖的篮球运动员一起工作，是我最大的骄傲。',
  },
  {
    image: '/images/news-marathon-guangzhou.jpg',
    name: '李婷',
    position: '广州马拉松赛事医疗主管',
    quote: 'CNATC的培训不仅教会了我专业技能，更培养了我应对突发状况的冷静和判断力。每年广马，我带领团队保障三万跑者的安全，这份责任感源于在CNATC的每一次训练。',
  },
  {
    image: '/images/service-education.jpg',
    name: '王浩',
    position: 'CNATC认证培训讲师',
    quote: '学成之后回到CNATC站上讲台，是一种特别的传承。我希望能像当年我的老师一样，帮助更多热爱运动防护的人找到属于自己的职业道路。',
  },
]

/* ─── Course Showcase Section ─── */
function CourseShowcase() {
  const titleRef = useScrollReveal<HTMLDivElement>({ type: 'slideUp' })
  const gridRef = useScrollReveal<HTMLDivElement>({ type: 'staggerFadeIn', stagger: 0.1 })

  return (
    <section className="py-20 md:py-28 bg-[#202429]">
      <div className="section-container">
        <div ref={titleRef}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-white tracking-[0.05em]">
            精品课程
          </h2>
          <p className="mt-3 text-[#989898] text-base md:text-lg">
            从入门到精通，系统化的运动防护师培训体系
          </p>
        </div>

        <div ref={gridRef} className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {courses.map((course, i) => (
            <div key={i} className="group bg-[#1d2126] rounded-xl overflow-hidden card-hover cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={course.image} alt={course.name} className="w-full h-full object-cover img-zoom" />
              </div>
              <div className="p-5">
                <span className="pill-tag-filled text-xs">{course.tag}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{course.name}</h3>
                <p className="mt-1 text-[#989898] text-xs">{course.time}</p>
                <p className="mt-2 text-[#989898] text-sm leading-relaxed line-clamp-2">{course.desc}</p>
                <p className="mt-3 text-[#b6dd38] text-xl font-bold group-hover:text-[#dff55d] transition-colors">
                  {course.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Course Overview Section ─── */
function CourseOverview() {
  const titleRef = useScrollReveal<HTMLDivElement>({ type: 'slideUp' })
  const scrollRef = useScrollReveal<HTMLDivElement>({ type: 'staggerFadeIn', stagger: 0.05 })

  return (
    <section className="py-20 md:py-28 bg-[#202429]">
      <div className="section-container">
        <div ref={titleRef}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-white tracking-[0.05em]">
            课程概览
          </h2>
        </div>

        <div className="mt-10 md:mt-14 relative">
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-l from-[#202429] to-transparent z-10 pointer-events-none" />
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-5 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory"
          >
            {courseSeries.map((cs, i) => (
              <div
                key={i}
                className="group min-w-[220px] md:min-w-[280px] bg-[#1d2126] rounded-xl overflow-hidden border border-[#30363d] hover:border-[#b6dd38] transition-all duration-300 snap-start cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={cs.image} alt={cs.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium text-base">{cs.name}</h3>
                  <p className="text-[#989898] text-xs mt-1">{cs.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Alumni Stories Section ─── */
function AlumniStories() {
  const titleRef = useScrollReveal<HTMLDivElement>({ type: 'slideUp' })
  const gridRef = useScrollReveal<HTMLDivElement>({ type: 'staggerFadeIn', stagger: 0.1 })

  return (
    <section className="py-20 md:py-28 bg-[#d5ccb4]">
      <div className="section-container">
        <div ref={titleRef}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-[#1d2126] tracking-[0.05em]">
            优秀校友
          </h2>
          <p className="mt-3 text-[#6b6b6b] text-base md:text-lg">
            他们曾经和你一样，现在已经走上了职业运动防护师的道路
          </p>
        </div>

        <div ref={gridRef} className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {alumni.map((a, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden card-hover">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={a.image} alt={a.name} className="w-full h-full object-cover img-zoom" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#1d2126]">{a.name}</h3>
                <p className="text-[#6b6b6b] text-xs mt-1">{a.position}</p>
                <p className="mt-3 text-[#6b6b6b] text-sm leading-relaxed italic">
                  "{a.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── More Courses Section ─── */
function MoreCourses() {
  const btnRef = useScrollReveal<HTMLDivElement>({ type: 'slideUp' })

  return (
    <section className="py-24 md:py-32 bg-[#202429]">
      <div className="section-container text-center">
        <div ref={btnRef}>
          <Link
            to="/academy"
            className="inline-block w-full md:w-auto px-12 py-8 md:px-20 md:py-10 bg-[#b6dd38] text-[#202429] font-bold text-2xl md:text-4xl lg:text-5xl rounded-3xl transition-all duration-400 hover:bg-gradient-to-r hover:from-[#dff55d] hover:to-[#8cb13f] hover:scale-[1.02]"
          >
            探索全部课程 &rarr;
          </Link>
          <p className="mt-6 text-[#989898] text-base md:text-lg">
            超过20门专业课程，从理论到实操，从初级到高级，总有一门适合你
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Page Export ─── */
export default function Academy() {
  return (
    <>
      <PageHero
        image="/images/service-education.jpg"
        title="防护学堂"
        subtitle="开启你的运动防护师之路"
      />
      <CourseShowcase />
      <CourseOverview />
      <AlumniStories />
      <MoreCourses />
    </>
  )
}
