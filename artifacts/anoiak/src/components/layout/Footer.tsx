import { Link } from "wouter";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0d0d0d] pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-24 gap-8 md:gap-12">
          <Link href="/" className="inline-block">
            <h2 className="font-serif text-[clamp(3rem,8vw,8rem)] leading-none tracking-tight text-foreground/90 hover:text-foreground transition-colors">
              ANOIAK
            </h2>
          </Link>
          <div className="text-left md:text-right">
            <p className="text-base md:text-xl text-muted-foreground font-light max-w-sm md:ml-auto">
              Elite business consultancy and performance marketing for visionary leaders.
            </p>
          </div>
        </div>

        <div className="h-[1px] w-full luxury-divider mb-24 border-t"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 lg:gap-12 mb-16 md:mb-32">
          
          {/* Nav Links */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-8">Navigation</h4>
            <ul className="space-y-6">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-foreground hover:text-primary transition-colors flex items-center group w-max font-serif text-2xl"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-5 h-5 ml-4 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-8">Expertise</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 text-lg text-muted-foreground font-light">
              <li className="hover:text-foreground transition-colors cursor-pointer">Business Consultancy</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Performance Marketing</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Personal Branding</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Strategic Marketing</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Business Advice</li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-8">Connect</h4>
            <ul className="space-y-8">
              <li>
                <a href="mailto:varneethvarma.n@gmail.com" className="group flex flex-col gap-2">
                  <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Email</span>
                  <span className="text-base text-foreground group-hover:text-primary transition-colors break-all">varneethvarma.n@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+917981399132" className="group flex flex-col gap-2">
                  <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Phone</span>
                  <span className="text-lg text-foreground group-hover:text-primary transition-colors">+91 7981399132</span>
                </a>
              </li>
              <li className="flex flex-col gap-2">
                <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Location</span>
                <span className="text-lg text-foreground font-light">Hoskote, Bengaluru,<br/>Karnataka, India</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t luxury-divider flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground/60 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Anoiak. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-muted-foreground/60 text-xs tracking-widest uppercase">
              Founded by Varneeth Varma Nandimanddalam
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
