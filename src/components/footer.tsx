import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { MapPin, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Construction", href: "/services/gas-station-construction" },
  { label: "Financing", href: "/services/gas-station-financing" },
  { label: "Electrical", href: "/services/gas-station-electrical" },
  { label: "Compliance", href: "/services/environmental-compliance-solutions" },
  { label: "Careers", href: "/petroleum-companies-jobs" },
  { label: "Contact", href: "/contact-us" },
];

const socials = [
  "https://twitter.com/theapecgroup",
  "https://www.instagram.com/the_apec_group/",
  "https://www.facebook.com/people/APEC-Group/100078538340182/",
  "https://www.linkedin.com/company/apec-group-petroleum-equipment-and-services",
];

const offices = [
  {
    label: "Main Office",
    address: "4732-E North Royal Atlanta Drive",
    city: "Tucker, GA 30084",
  },
  {
    label: "Branch Office",
    address: "505 Garden Oaks Blvd",
    city: "Houston, TX 77018",
  },
];

const Footer: React.FC = () => (
  <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">
    {/* Grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }}
    />

    {/* Ambient glow */}
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c62931] opacity-[0.12] blur-[120px] pointer-events-none rounded-full" />

    {/* Top border */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c62931] to-transparent" />

    <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        {/* Col 1 — Logo + tagline */}
        <div className="lg:col-span-1">
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/logos/APEC.webp"
              alt="APEC Since 1989"
              width={260}
              height={260}
              className="w-auto h-16 transition-transform duration-300 hover:scale-105"
            />
          </Link>
          <p className="text-white/40 text-sm leading-relaxed mb-6">
            Since 1989, The APEC Group has delivered reliable petroleum
            equipment, environmental compliance, and construction services
            across the U.S.
          </p>
          {/* Socials */}
          <div className="flex flex-wrap gap-2">
            {socials.map((url) => (
              <SocialIcon
                key={url}
                url={url}
                target="_blank"
                style={{ height: 32, width: 32, borderRadius: 8 }}
                bgColor="#c62931"
                className="transition-transform duration-300 hover:scale-110 hover:opacity-90"
              />
            ))}
          </div>
        </div>

        {/* Col 2 — Navigation */}
        <div>
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/30 mb-6">
            Quick Links
          </p>
          <ul className="space-y-3">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="group flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-300"
                >
                  <span className="w-1 h-1 rounded-full bg-[#c62931] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact */}
        <div>
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/30 mb-6">
            Contact Us
          </p>
          <div className="space-y-4">
            <a
              href="tel:8554442732"
              className="group flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-300"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/[0.07] group-hover:border-[#c62931]/40 bg-white/[0.03] group-hover:bg-[#c62931]/10 transition-all duration-300">
                <Phone className="w-3.5 h-3.5 text-white/40 group-hover:text-[#c62931] transition-colors duration-300" />
              </span>
              855-444-2732
            </a>
            <a
              href="mailto:Sales@TheAPECgroup.com"
              className="group flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-300"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/[0.07] group-hover:border-[#c62931]/40 bg-white/[0.03] group-hover:bg-[#c62931]/10 transition-all duration-300">
                <Mail className="w-3.5 h-3.5 text-white/40 group-hover:text-[#c62931] transition-colors duration-300" />
              </span>
              Sales@TheAPECgroup.com
            </a>
          </div>
        </div>

        {/* Col 4 — Offices */}
        <div>
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/30 mb-6">
            Our Offices
          </p>
          <div className="space-y-6">
            {offices.map(({ label, address, city }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/[0.07] bg-white/[0.03] flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#c62931]" />
                </span>
                <div>
                  <p className="text-xs font-bold tracking-wide uppercase text-white/30 mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {address}
                  </p>
                  <p className="text-sm text-white/60">{city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 pt-6 border-t border-white/[0.06] flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/25 tracking-wide">
          © {new Date().getFullYear()} The APEC Group. All rights reserved.
        </p>
        <p className="text-xs text-white/20">
          Atlanta Petroleum Equipment Company Inc.
        </p>
        <a
          href="https://northernware.ph"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Built by Northernware"
          className="group ft-mono relative inline-flex items-center gap-2.5"
        >
          {/* Acid pulse dot */}
          <span aria-hidden className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping bg-[#FF3800] opacity-40" />
            <span className="relative inline-flex h-2.5 w-2.5 bg-[#FF3800] transition-transform duration-300 group-hover:scale-125" />
          </span>
          <span className="flex flex-col leading-[1.35]">
            <span className="text-xs tracking-wide text-white/35 transition-colors duration-300 group-hover:text-white/60">
              powered by{" "}
              <span className="relative font-semibold text-white/85 transition-colors duration-300 group-hover:text-white">
                northernware
                <span
                  aria-hidden
                  className="absolute -bottom-px left-0 h-px w-0 bg-[#FF3800] transition-all duration-500 ease-out group-hover:w-full"
                />
              </span>
            </span>
            <span className="text-[11px] italic tracking-wide text-white/25 transition-colors duration-300 group-hover:text-white/45">
              build superior software.
            </span>
          </span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
