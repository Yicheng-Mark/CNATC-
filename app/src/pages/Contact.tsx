import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Phone, MapPin, MessageCircle, Navigation } from 'lucide-react'

/* ─── Contact Hero with Info ─── */
function ContactHeroWithInfo() {
  const sectionRef = useScrollReveal<HTMLDivElement>({ type: 'fadeIn' })

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] flex items-end justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/contact-office.jpg"
          alt="联系我们"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="absolute inset-0 z-[1] hero-overlay" />

      {/* Content */}
      <div className="relative z-[2] section-container pb-20 md:pb-28 text-center">
        <h1 className="font-impact text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] text-white tracking-[0.05em] leading-tight">
          联系我们
        </h1>
        <p className="mt-4 text-2xl md:text-3xl lg:text-4xl text-[#f6f6f6] font-medium">
          运动，为更健康生活！
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[900px] mx-auto">
          <div className="text-center">
            <p className="text-[#989898] text-sm">客服电话</p>
            <p className="text-white text-xl md:text-2xl font-semibold mt-1">153-6082-2025</p>
            <p className="text-[#989898] text-xs mt-1">181-9127-0577（全国）</p>
            <p className="text-[#989898] text-xs">136-3690-5420（福建）</p>
          </div>
          <div className="text-center">
            <p className="text-[#989898] text-sm">电子邮箱</p>
            <p className="text-white text-xl md:text-2xl font-semibold mt-1">aata2022@163.com</p>
          </div>
          <div className="text-center">
            <p className="text-[#989898] text-sm">公司地址</p>
            <p className="text-white text-lg md:text-xl font-semibold mt-1">广州市天河区棠东东路11号4楼</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Contact Form Section ─── */
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const titleRef = useScrollReveal<HTMLDivElement>({ type: 'slideUp' })
  const infoRef = useScrollReveal<HTMLDivElement>({ type: 'fadeIn' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email) return
    setSubmitted(true)
  }

  const inputClass = "w-full bg-transparent border-0 border-b border-[#30363d] text-white h-12 px-0 text-base focus:outline-none focus:border-[#b6dd38] transition-colors duration-300 placeholder:text-[#9b9b9b]"

  return (
    <section className="py-20 md:py-28 bg-[#202429]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Form */}
          <div className="lg:col-span-3">
            <div ref={titleRef}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                在线留言
              </h2>
              <p className="mt-3 text-[#989898] text-base md:text-lg">
                填写以下信息，我们将在24小时内与您联系
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div>
                <label className="text-[#989898] text-sm">您的姓名 *</label>
                <input
                  type="text"
                  required
                  placeholder="请输入您的姓名"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-[#989898] text-sm">电子邮箱 *</label>
                <input
                  type="email"
                  required
                  placeholder="请输入您的邮箱"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-[#989898] text-sm">联系电话</label>
                <input
                  type="tel"
                  placeholder="请输入您的电话号码"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="text-[#989898] text-sm">留言内容</label>
                <textarea
                  placeholder="请描述您的需求或问题..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border border-[#30363d] rounded-lg text-white p-3 text-base focus:outline-none focus:border-[#b6dd38] transition-colors duration-300 placeholder:text-[#9b9b9b] resize-none"
                />
              </div>

              {submitted ? (
                <div className="p-4 bg-[#b6dd38]/20 rounded-xl border border-[#b6dd38]/30">
                  <p className="text-[#b6dd38] font-medium">提交成功！我们将在24小时内与您联系。</p>
                </div>
              ) : (
                <button type="submit" className="btn-accent w-full">
                  提交留言
                </button>
              )}
            </form>
          </div>

          {/* Right - Info */}
          <div ref={infoRef} className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">全国服务城市</h3>
              <p className="text-[#989898] text-sm leading-relaxed">
                北京 · 上海 · 广州 · 深圳 · 南昌 · 贵阳 · 长沙 · 武汉 · 西安 · 郑州 · 温州 · 太原 · 哈尔滨 · 长春
              </p>
              <p className="text-[#989898] text-sm leading-relaxed mt-2">
                福建地区：福州 · 厦门 · 泉州 · 漳州 · 三明 · 莆田 · 龙岩 · 宁德
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">关注我们</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-[#b6dd38] flex items-center justify-center text-[#202429] group-hover:bg-[#dff55d] transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-[#989898] group-hover:text-[#b6dd38] transition-colors text-sm">
                    微信公众号：运动防护与运康学习网
                  </span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-lg bg-[#b6dd38] flex items-center justify-center text-[#202429] group-hover:bg-[#dff55d] transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="text-[#989898] group-hover:text-[#b6dd38] transition-colors text-sm">
                    微信小程序：CNATC运动防护刷题
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#1d2126] rounded-xl border border-[#30363d]">
              <h3 className="text-lg font-semibold text-white mb-3">紧急联系</h3>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#b6dd38]" />
                <div>
                  <p className="text-white font-medium">181-9127-0577</p>
                  <p className="text-[#989898] text-xs">全国客服热线</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Map Section ─── */
function MapSection() {
  const mapRef = useScrollReveal<HTMLDivElement>({ type: 'fadeIn' })
  const cardRef = useScrollReveal<HTMLDivElement>({ type: 'slideUp' })

  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Map iframe */}
      <div ref={mapRef} className="absolute inset-0 z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.8370164572757!2d113.3844073!3d23.1246387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3402f5f2f2f2f2f2%3A0x1234567890abcdef!2z5bm%2F5Lit5rGf6KW_5pSv6IKk!5e0!3m2!1szh-CN!2scn!4v1700000000000!5m2!1szh-CN!2scn"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="CNATC办公地点"
        />
      </div>

      {/* Info Card */}
      <div
        ref={cardRef}
        className="absolute top-6 left-6 md:top-10 md:left-10 z-10 p-6 md:p-8 rounded-2xl max-w-[320px]"
        style={{ background: 'rgba(32, 36, 41, 0.9)', backdropFilter: 'blur(10px)', border: '1px solid #30363d' }}
      >
        <h3 className="text-white font-semibold text-lg mb-2">CNATC运动防护与运康学习网</h3>
        <div className="flex items-start gap-2 mt-3">
          <MapPin className="w-4 h-4 text-[#b6dd38] mt-0.5 shrink-0" />
          <p className="text-[#989898] text-sm">广州市天河区棠东东路11号4楼</p>
        </div>
        <div className="flex items-start gap-2 mt-2">
          <Phone className="w-4 h-4 text-[#b6dd38] mt-0.5 shrink-0" />
          <p className="text-[#989898] text-sm">153-6082-2025</p>
        </div>
        <a
          href="https://maps.google.com/?q=广州市天河区棠东东路11号"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 px-5 py-2 bg-[#b6dd38] text-[#202429] text-sm font-medium rounded-full hover:bg-[#dff55d] transition-colors"
        >
          <Navigation className="w-4 h-4" />
          导航前往
        </a>
      </div>
    </section>
  )
}

/* ─── Page Export ─── */
export default function Contact() {
  return (
    <>
      <ContactHeroWithInfo />
      <ContactForm />
      <MapSection />
    </>
  )
}
