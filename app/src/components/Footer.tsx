import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a1e22] border-t border-[#30363d]">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-white font-impact text-3xl tracking-wider">
                CN<span className="text-[#b6dd38]">ATC</span>
              </span>
            </Link>
            <p className="text-[#989898] text-sm mt-4 leading-relaxed">
              运动防护与运康学习网
              <br />
              专门从事运动急救、运动防护
              <br />
              及康复体能训练专业服务
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">快速导航</h4>
            <ul className="space-y-3">
              {[
                { label: '网站首页', path: '/' },
                { label: '防护进展', path: '/progress' },
                { label: '非凡服务', path: '/services' },
                { label: '防护学堂', path: '/academy' },
                { label: '在线商城', path: '/shop' },
                { label: '联系我们', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[#989898] hover:text-[#b6dd38] transition-colors duration-300 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">主营业务</h4>
            <ul className="space-y-3">
              <li className="text-[#989898] text-sm">急救认证培训</li>
              <li className="text-[#989898] text-sm">体能训练服务</li>
              <li className="text-[#989898] text-sm">赛事防护保障</li>
              <li className="text-[#989898] text-sm">运动防护师认证</li>
              <li className="text-[#989898] text-sm">运动康复服务</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">联系我们</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#b6dd38] mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm">153-6082-2025</p>
                  <p className="text-[#989898] text-xs">181-9127-0577（全国）</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#b6dd38] mt-0.5 shrink-0" />
                <p className="text-white text-sm">aata2022@163.com</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b6dd38] mt-0.5 shrink-0" />
                <p className="text-white text-sm">
                  广州市天河区棠东东路11号4楼
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#30363d] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#6b6b6b] text-xs text-center md:text-left">
            Copyright &copy; 2022-2026 CNATC运动防护与运康学习网 All rights reserved.
          </p>
          <p className="text-[#6b6b6b] text-xs">
            技术支持：豫章淘京（广州）体育产业有限公司
          </p>
        </div>
      </div>
    </footer>
  )
}
