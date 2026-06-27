import PageHero from '@/components/PageHero'
import { useScrollReveal } from '@/hooks/useScrollReveal'

/* ─── Service Network Grid ─── */
const venues = [
  { image: '/images/service-fitness-training.jpg', title: '高级健身中心', desc: '配备国际顶级训练器械的专业健身空间' },
  { image: '/images/first-aid-equipment.jpg', title: '赛事医疗站', desc: '标准化的赛事医疗保障点，设备齐全、响应迅速' },
  { image: '/images/service-rehab.jpg', title: '体能训练馆', desc: '宽敞的功能性训练空间，满足各类运动项目的训练需求' },
  { image: '/images/service-sports-guard.jpg', title: '康复中心', desc: '现代化的运动康复治疗室，配备先进的康复设备' },
]

function ServiceNetworkGrid() {
  const titleRef = useScrollReveal<HTMLDivElement>({ type: 'slideUp' })
  const gridRef = useScrollReveal<HTMLDivElement>({ type: 'staggerFadeIn', stagger: 0.1 })

  return (
    <section className="py-20 md:py-28 bg-[#d5ccb4]">
      <div className="section-container">
        <div ref={titleRef} className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-[#1d2126] tracking-[0.05em]">
            服务网络
          </h2>
        </div>

        <div ref={gridRef} className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {venues.map((v, i) => (
            <div key={i} className="group overflow-hidden rounded-xl">
              <div className="aspect-square overflow-hidden">
                <img src={v.image} alt={v.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-[#1d2126] group-hover:text-[#b6dd38] transition-colors">
                  {v.title}
                </h3>
                <p className="mt-1 text-[#6b6b6b] text-sm">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Team Travel Section ─── */
const stories = [
  {
    image: '/images/service-sports-guard.jpg',
    title: '出发：每一次奔赴都是承诺',
    desc: '天还未亮，CNATC的防护师团队已经整装待发。大巴车载着专业设备和满腔热忱，驶向又一个赛事现场。车窗外的城市渐渐苏醒，而他们的工作早已开始——检查装备、确认流程、复习应急预案。',
  },
  {
    image: '/images/service-event-protection.jpg',
    title: '搭建：专业源自每一个细节',
    desc: '到达赛场后，团队分工协作，在限定时间内搭建起标准化的医疗帐篷。冰桶、AED、急救包、拉伸床——每一件设备的位置都经过精心规划，确保在紧急情况下能够秒级响应。',
  },
  {
    image: '/images/service-rehab.jpg',
    title: '间隙：专注背后的从容',
    desc: '比赛间隙是团队难得的休息时间，但即便是坐下喝水的片刻，每个人的目光都没有离开赛场。记录数据、复盘流程、交流观察——这份专注已经融入了每一位CNATC防护师的职业本能。',
  },
]

function TeamTravel() {
  const titleRef = useScrollReveal<HTMLDivElement>({ type: 'slideUp' })

  return (
    <section className="py-20 md:py-28 bg-[#202429]">
      <div className="section-container">
        <div ref={titleRef}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-white tracking-[0.05em]">
            随队出行
          </h2>
        </div>

        <div className="mt-10 md:mt-14 space-y-16 md:space-y-20">
          {stories.map((story, i) => (
            <div key={i} className="space-y-6">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full aspect-[21/9] object-cover transition-transform duration-600 hover:scale-[1.02]"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{story.title}</h3>
                <p className="mt-3 text-[#989898] text-base md:text-lg leading-relaxed max-w-[900px]">
                  {story.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── First Aid Science Section ─── */
const articles = [
  {
    image: '/images/service-first-aid-cert.jpg',
    tag: '急救培训',
    title: '心肺复苏（CPR）：黄金四分钟的生死竞速',
    excerpt: '心脏骤停后的4分钟被称为"黄金四分钟"。在这段时间内进行有效的心肺复苏，患者的生存率可以提高2-3倍。CNATC的AHA Heartsaver课程将CPR技术作为核心模块...',
    reverse: false,
  },
  {
    image: '/images/service-event-protection.jpg',
    tag: '赛场急救',
    title: '赛场上的隐形生命线：运动防护师的应急处理流程',
    excerpt: '当运动员在赛场上突然倒地，第一时间的判断和处理至关重要。CNATC防护师遵循标准化的应急处理流程：安全评估→意识判断→呼救求援→体位处理→持续监护...',
    reverse: true,
  },
  {
    image: '/images/first-aid-equipment.jpg',
    tag: '急救设备',
    title: '运动急救包里的必备神器：你了解多少？',
    excerpt: '一个专业的运动急救包不仅仅是绷带和碘酒。CNATC的标准急救配置包括：AED除颤仪、冷热两用冰敷袋、弹性加压绷带、关节固定支具、速效止痛喷雾...每一件装备都经过精心选择。',
    reverse: false,
  },
]

function FirstAidScience() {
  const titleRef = useScrollReveal<HTMLDivElement>({ type: 'slideUp' })

  return (
    <section className="py-20 md:py-28 bg-[#d5ccb4]">
      <div className="section-container">
        <div ref={titleRef}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-[#1d2126] tracking-[0.05em]">
            急救科普
          </h2>
        </div>

        <div className="mt-10 md:mt-14 space-y-12 md:space-y-16">
          {articles.map((article, i) => (
            <div
              key={i}
              className={`flex flex-col ${article.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12`}
            >
              <div className="lg:w-2/5 overflow-hidden rounded-xl">
                <img src={article.image} alt={article.title} className="w-full aspect-[4/3] object-cover img-zoom" />
              </div>
              <div className="lg:w-3/5 flex flex-col justify-center">
                <span className="pill-tag-filled text-xs self-start">{article.tag}</span>
                <h3 className="mt-4 text-xl md:text-2xl lg:text-3xl font-bold text-[#1d2126] leading-snug">
                  {article.title}
                </h3>
                <p className="mt-4 text-[#6b6b6b] text-base md:text-lg leading-relaxed">
                  {article.excerpt}
                </p>
                <span className="mt-4 text-[#b6dd38] font-medium cursor-pointer hover:underline inline-flex items-center gap-1 self-start">
                  阅读全文 <span>&rarr;</span>
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
export default function Services() {
  return (
    <>
      <PageHero
        image="/images/service-event-protection.jpg"
        title="非凡服务"
        subtitle="超越预期，服务你想不到"
        cta={{ text: '立即咨询', href: '/contact' }}
      />
      <ServiceNetworkGrid />
      <TeamTravel />
      <FirstAidScience />
    </>
  )
}
