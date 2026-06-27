import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'

const navItems = [
  { label: '网站首页', path: '/' },
  { label: '防护进展', path: '/progress' },
  { label: '非凡服务', path: '/services' },
  { label: '防护学堂', path: '/academy' },
  { label: '在线商城', path: '/shop' },
  { label: '联系我们', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.5)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'h-[70px] bg-[#202429]/95 backdrop-blur-md'
          : 'h-[100px] md:h-[110px] bg-transparent'
      }`}
    >
      <div className="section-container h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="text-white font-impact text-2xl md:text-3xl tracking-wider">
            CN<span className="text-[#b6dd38]">ATC</span>
          </span>
          <span className="hidden sm:block text-white/70 text-xs md:text-sm ml-2 border-l border-white/30 pl-2">
            运动防护与运康学习网
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 xl:px-4 py-2 text-sm xl:text-base transition-all duration-300 rounded-lg ${
                location.pathname === item.path
                  ? 'text-white opacity-100'
                  : 'text-white/60 hover:text-white hover:opacity-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button className="text-white p-2" aria-label="打开菜单">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:w-[400px] bg-[#202429] border-l border-[#30363d] p-0"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-[#30363d]">
                <span className="text-white font-impact text-2xl">
                  CN<span className="text-[#b6dd38]">ATC</span>
                </span>
                <SheetClose asChild>
                  <button className="text-white p-2" aria-label="关闭菜单">
                    <X className="w-6 h-6" />
                  </button>
                </SheetClose>
              </div>
              <nav className="flex flex-col p-6 gap-2">
                {navItems.map((item) => (
                  <SheetClose key={item.path} asChild>
                    <Link
                      to={item.path}
                      className={`py-3 px-4 text-lg rounded-lg transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'text-[#b6dd38] bg-[#b6dd38]/10'
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto p-6 border-t border-[#30363d]">
                <p className="text-white/40 text-sm">客服电话</p>
                <p className="text-white text-lg font-medium">153-6082-2025</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
