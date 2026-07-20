import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80" id="footer">
      {/* CTA Strip */}
      <div className="bg-gradient-to-r from-gold-dark via-gold to-gold-light py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-heading font-bold text-white">
              Ready to Partner with Barekyne?
            </h3>
            <p className="text-white/90 text-sm mt-1">
              Join India&apos;s fastest-growing clinical skincare distribution network.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href={SITE_CONFIG.whatsappCatalogueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-gold font-semibold rounded-full hover:bg-ivory transition-all duration-300 hover:shadow-lg text-sm"
              id="footer-cta-catalogue"
              title="Request Catalogue on WhatsApp"
            >
              Request Catalogue
            </a>
            <a
              href={SITE_CONFIG.whatsappConsultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-charcoal text-white font-semibold rounded-full hover:bg-charcoal-light transition-all duration-300 text-sm"
              id="footer-cta-consultation"
              title="Book Consultation on WhatsApp"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              BAREKYNE
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premium clinical derma luxury skincare brand delivering
              high-performance formulations for distributors, clinics,
              pharmacies, and skincare professionals across India.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
                id="footer-instagram"
                aria-label="Follow us on Instagram"
                title="Barekyne Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
                id="footer-twitter"
                aria-label="Follow us on X"
                title="Barekyne Skin"
              >
                <XIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    title={item.label}
                    className="text-sm text-white/60 hover:text-gold transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Policies
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  title="Privacy Policy"
                  className="text-sm text-white/60 hover:text-gold transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  title="Terms & Conditions"
                  className="text-sm text-white/60 hover:text-gold transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-policy"
                  title="Shipping Policy"
                  className="text-sm text-white/60 hover:text-gold transition-colors duration-300"
                >
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Locations (SEO internal linking) */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Top Locations
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Delhi", slug: "delhi" },
                { name: "Mumbai", slug: "mumbai" },
                { name: "Bangalore", slug: "bangalore" },
                { name: "Pune", slug: "pune" },
                { name: "Hyderabad", slug: "hyderabad" },
                { name: "Chennai", slug: "chennai" },
                { name: "Ahmedabad", slug: "ahmedabad" },
                { name: "Kolkata", slug: "kolkata" },
              ].map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/skincare-distributor/${city.slug}`}
                    title={`Derma Franchise in ${city.name}`}
                    className="text-sm text-white/60 hover:text-gold transition-colors duration-300"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                  className="text-sm text-white/60 hover:text-gold transition-colors"
                  title={SITE_CONFIG.phone}
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm text-white/60 hover:text-gold transition-colors"
                  title={SITE_CONFIG.email}
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">
                  {SITE_CONFIG.address.building}, {SITE_CONFIG.address.street},{" "}
                  {SITE_CONFIG.address.locality}, {SITE_CONFIG.address.city},{" "}
                  {SITE_CONFIG.address.state} — {SITE_CONFIG.address.pinCode}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © {currentYear} Barekyne. All rights reserved. Premium Clinical
              Skincare for India.
            </p>
            <p className="text-xs text-white/30 text-center md:text-right max-w-lg">
              Barekyne is a premium clinical skincare brand offering
              distributorship, franchise opportunities, and wholesale supply
              across all states of India including Delhi, Mumbai, Bangalore,
              Hyderabad, Chennai, Kolkata, Pune, Jaipur, and more.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
