import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Menu, X, Phone, Calendar, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { NAV_STRUCTURE } from '@/data/navigation';
import { useBookingModal } from '@/context/BookingModalContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { openModal } = useBookingModal();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-[#0B1220]/95 backdrop-blur-md border-white/10' : 'bg-[#0B1220]/80 backdrop-blur-sm border-white/5'
        }`}
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#0B1220] border border-[#F5B942]/50 shadow-[0_0_16px_rgba(245,185,66,0.3)]">
                <GraduationCap className="w-5 h-5 text-[#F5B942]" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white leading-none block">{siteConfig.businessName}</span>
                <span className="text-[10px] block mt-0.5 text-[#2FC9B0] tracking-wide uppercase">{siteConfig.tagline}</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV_STRUCTURE.filter((item) => item.path !== '/').map((item) => (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.path)}
                  onMouseLeave={() => item.children && setOpenDropdown(null)}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive ? 'text-[#F5B942]' : 'text-[#C6CEDA] hover:text-[#F5B942]'
                      }`
                    }
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                  </NavLink>

                  {item.children && openDropdown === item.path && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 pt-2 w-64"
                    >
                      <div className="bg-[#0F1830] border border-white/10 rounded-xl shadow-2xl overflow-hidden py-2">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-2.5 text-sm text-[#C6CEDA] hover:bg-white/5 hover:text-[#F5B942] transition-colors"
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex items-center gap-2 text-sm font-medium text-[#C6CEDA] transition-colors hover:text-[#F5B942]"
              >
                <Phone className="w-4 h-4" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <Button
                onClick={() => openModal()}
                className="bg-gradient-to-r from-[#F5B942] to-[#EFA92B] hover:brightness-110 text-[#0B1220] font-bold px-5 py-2 rounded-lg shadow-[0_0_20px_rgba(245,185,66,0.35)]"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Free Diagnostic Assessment
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </motion.header>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 top-16 z-40 bg-[#0B1220] lg:hidden overflow-y-auto"
        >
          <div className="container mx-auto px-5 py-6">
            <nav className="flex flex-col gap-1">
              {NAV_STRUCTURE.map((item) => (
                <div key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 px-4 text-lg font-medium text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <div className="pl-6 border-l border-white/10 ml-4 mb-2">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 px-4 text-sm text-[#8993A6] hover:text-[#F5B942] transition-colors"
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <hr className="my-4 border-white/10" />

              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex items-center gap-3 py-3 px-4 text-[#C6CEDA] hover:bg-white/5 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 text-[#F5B942]" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>

              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openModal();
                }}
                className="mt-4 bg-gradient-to-r from-[#F5B942] to-[#EFA92B] text-[#0B1220] py-6 text-lg font-bold rounded-xl shadow-[0_0_24px_rgba(245,185,66,0.4)]"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Free Diagnostic Assessment
              </Button>
            </nav>
          </div>
        </motion.div>
      )}
    </>
  );
}
