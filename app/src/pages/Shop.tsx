import PageHero from '@/components/PageHero'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { ExternalLink } from 'lucide-react'

/* ─── Product Data ─── */
const products = [
  {
    image: '/images/product-dynamic-tape.jpg',
    name: 'Dynamic Tape 动态贴布',
    desc: '澳大利亚进口，生物力学贴扎技术，助力运动表现。',
    price: '¥210.00',
    originalPrice: '¥280.00',
    link: 'https://cnatc.net.cn/page112',
  },
  {
    image: '/images/product-kinesiology-tape.jpg',
    name: '专业肌内效贴布',
    desc: '多色可选，高弹性棉质面料，透气防水，持久粘贴。',
    price: '¥89.00',
    originalPrice: '¥128.00',
    link: 'https://cnatc.net.cn/page112',
  },
  {
    image: '/images/first-aid-equipment.jpg',
    name: 'CNATC运动急救包',
    desc: '便携式专业急救包，含冰袋、绷带、消毒液等必备器材。',
    price: '¥299.00',
    originalPrice: '¥399.00',
    link: 'https://cnatc.net.cn/page112',
  },
  {
    image: '/images/service-sports-guard.jpg',
    name: 'CNATC防护师专业Polo衫',
    desc: '专业黑色Polo衫，左胸印有CNATC品牌标识，透气舒适。',
    price: '¥159.00',
    originalPrice: '¥199.00',
    link: 'https://cnatc.net.cn/page112',
  },
  {
    image: '/images/hero-athletic-training.jpg',
    name: '专业筋膜放松枪',
    desc: '多档位调节，静音电机，深层肌肉放松恢复利器。',
    price: '¥599.00',
    originalPrice: '¥899.00',
    link: 'https://cnatc.net.cn/page112',
  },
  {
    image: '/images/service-rehab.jpg',
    name: '可重复使用运动冰敷袋',
    desc: '专业级冰敷袋，带固定绑带，适用于各部位冰敷治疗。',
    price: '¥79.00',
    originalPrice: '¥99.00',
    link: 'https://cnatc.net.cn/page112',
  },
]

/* ─── Product Cards Section ─── */
function ProductCards() {
  const titleRef = useScrollReveal<HTMLDivElement>({ type: 'slideUp' })
  const gridRef = useScrollReveal<HTMLDivElement>({ type: 'staggerFadeIn', stagger: 0.1 })

  return (
    <section className="py-20 md:py-28 bg-[#202429]">
      <div className="section-container">
        <div ref={titleRef}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-white tracking-[0.05em]">
            热销装备
          </h2>
          <p className="mt-3 text-[#989898] text-base md:text-lg">
            CNATC严选专业运动防护用品，品质保障，放心选购
          </p>
        </div>

        <div ref={gridRef} className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {products.map((p, i) => (
            <div key={i} className="group bg-[#1d2126] rounded-xl overflow-hidden card-hover">
              <div className="aspect-square bg-white overflow-hidden flex items-center justify-center p-4">
                <img src={p.image} alt={p.name} className="w-full h-full object-contain transition-transform duration-400 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                <p className="mt-1 text-[#989898] text-sm line-clamp-2">{p.desc}</p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="text-[#b6dd38] text-xl font-bold">{p.price}</span>
                  <span className="text-[#9b9b9b] text-sm line-through">{p.originalPrice}</span>
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2 border border-white/50 rounded-full text-white text-sm transition-all duration-300 hover:bg-white hover:text-[#202429]"
                >
                  立即购买 <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://cnatc.net.cn/page112"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent inline-flex items-center gap-2"
          >
            前往商城选购更多 <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Page Export ─── */
export default function Shop() {
  return (
    <>
      <PageHero
        image="/images/first-aid-equipment.jpg"
        title="在线商城"
        subtitle="专业运动防护装备一站式采购"
        cta={{ text: '前往商城 →', href: 'https://cnatc.net.cn/page112' }}
      />
      <ProductCards />
    </>
  )
}
