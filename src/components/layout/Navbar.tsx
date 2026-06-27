"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.06)] border-b border-beige/50"
          : "bg-transparent"
      )}
    >
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white px-4 py-2.5 text-center text-xs sm:text-sm font-medium relative z-50">
        <span className="inline-block mr-1 sm:mr-2 animate-bounce">🚀</span>
        <span className="hidden sm:inline">We are now accepting Early Access applications for exclusive district-level franchise rights!</span>
        <span className="sm:hidden">Early Access:</span>
        <Link href="/early-access" className="ml-1 sm:ml-2 font-bold text-amber-300 hover:text-amber-100 transition-colors underline decoration-amber-300/50 underline-offset-2 whitespace-nowrap">
          Secure Your Territory &rarr;
        </Link>
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" id="nav-logo" title="BAREKYNE">
            <span className="text-2xl lg:text-3xl font-heading font-bold tracking-tight text-charcoal group-hover:text-gold transition-colors duration-300">
              BAREKYNE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                id={`nav-${item.href.replace("/", "") || "home"}`}
                title={item.label}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-md",
                  pathname === item.href
                    ? "text-gold"
                    : "text-charcoal-light hover:text-gold"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gold rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 text-sm text-charcoal-light hover:text-gold transition-colors duration-300"
              id="nav-phone"
              title={SITE_CONFIG.phone}
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">{SITE_CONFIG.phone}</span>
            </a>
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 bg-gold text-white text-sm font-semibold rounded-full hover:bg-gold-dark transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              id="nav-cta"
              title="Get Catalogue"
            >
              Get Catalogue
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-charcoal hover:text-gold transition-colors"
            id="nav-mobile-toggle"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-xl z-40 transition-all duration-500",
          isMobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="px-6 py-8 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              title={item.label}
              className={cn(
                "block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300",
                pathname === item.href
                  ? "bg-cream text-gold"
                  : "text-charcoal hover:bg-cream hover:text-gold"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-6 space-y-3 border-t border-beige mt-4">
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 px-4 py-3 text-charcoal-light"
              title={SITE_CONFIG.phone}
            >
              <Phone className="w-5 h-5" />
              {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact"
              title="Get Product Catalogue"
              className="block text-center px-6 py-3 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-all"
            >
              Get Product Catalogue
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
