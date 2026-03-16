import { Link } from "wouter";
import { ArrowRight, Compass, Target, TrendingUp, ShieldCheck, Gem, ChevronDown } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { PageSEO } from "@/components/PageSEO";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <PageSEO 
        title="Elevating Visionary Brands" 
        description="Anoiak is a premier business consultancy founded by Varneeth Varma Nandimanddalam, specializing in performance marketing and elite business strategy." 
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        {/* Background Image / Texture */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-abstract.png`}
            alt="" 
            className="w-full h-full object-cover opacity-30 mix-blend-screen scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-12 w-full">
          <AnimatedSection delay={0.2}>
            
            <h1 className="text-[clamp(2.8rem,7vw,9rem)] font-serif leading-[1.05] tracking-tight mb-8 md:mb-12 text-balance max-w-7xl">
              We engineer <span className="italic luxury-gradient-text">extraordinary</span> outcomes for visionary brands.
            </h1>
            
            <p className="text-lg md:text-2xl lg:text-3xl text-muted-foreground font-light max-w-3xl mb-10 md:mb-16 leading-relaxed">
              An elite consultancy bridging the gap between raw potential and market dominance through strategic precision and performance marketing.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8 mb-10 md:mb-16">
              <Link 
                href="/contact"
                className="px-8 md:px-12 py-4 md:py-5 bg-primary text-primary-foreground font-semibold tracking-[0.25em] uppercase text-xs hover:bg-white transition-all duration-500 text-center"
              >
                Book a Consultation
              </Link>
              <Link 
                href="/services"
                className="px-8 md:px-12 py-4 md:py-5 border border-white/20 text-foreground font-semibold tracking-[0.25em] uppercase text-xs hover:border-primary hover:text-primary transition-all duration-500 flex items-center justify-center gap-4 group"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>

            <div className="inline-flex items-center gap-4 mt-8 opacity-60">
              <div className="h-[1px] w-16 bg-primary"></div>
              <span className="text-primary tracking-[0.3em] text-xs font-medium uppercase">
                Founded by Varneeth Varma Nandimanddalam
              </span>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 text-muted-foreground/40"
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-primary/60 to-transparent mx-auto mb-2" />
        </motion.div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="py-16 md:py-20 border-y border-white/5 bg-background relative z-10">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <StaggerContainer className="grid grid-cols-2 md:flex md:flex-row justify-between items-center gap-8 md:gap-8 divide-x divide-white/5">
            {[
              { value: "05+", label: "Years Experience" },
              { value: "50+", label: "Elite Clients" },
              { value: "05", label: "Core Services" },
              { value: "Global", label: "Client Base" }
            ].map((stat, i) => (
              <StaggerItem key={i} className="text-center w-full px-4 md:px-0">
                <div className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary mb-3 md:mb-4 tracking-tight">{stat.value}</div>
                <div className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase text-muted-foreground font-medium">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. FOUNDER SECTION */}
      <section className="py-20 md:py-32 lg:py-44 bg-card relative">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-center">
            <AnimatedSection direction="right" className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative aspect-[3/4] overflow-hidden luxury-border">
                <img 
                  src="./anoiak/public/images/13211802-5445-4e90-ae0c-744e769ef6d1.jpeg&auto=format&fit=crop" 
                  alt="Varneeth Varma Nandimanddalam" 
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2000ms] grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 border border-white/10 m-6 pointer-events-none mix-blend-overlay transition-all duration-1000"></div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="left" className="lg:col-span-7 order-1 lg:order-2">
              <h2 className="text-xs tracking-[0.4em] text-primary uppercase mb-8 flex items-center gap-6">
                <span className="w-12 h-[1px] bg-primary"></span>
                The Visionary
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-8 md:mb-10 leading-[1.1] tracking-tight">
                Led by <br/>
                <span className="text-primary italic break-words">Varneeth Varma<br/> Nandimanddalam</span>
              </h3>
              <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                Anoiak wasn't built on conventional wisdom. It was founded on a singular obsession: achieving measurable, transformative results for businesses that refuse to settle for mediocrity.
              </p>
              <p className="text-xl text-muted-foreground font-light leading-relaxed mb-14">
                With a deep understanding of market dynamics and consumer psychology, Varneeth leads a practice where strategy meets relentless execution, ensuring every client engagement drives foundational growth.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center gap-4 text-foreground font-medium tracking-[0.25em] uppercase text-xs group hover:text-primary transition-colors pb-2 border-b border-primary/30 hover:border-primary"
              >
                Read the full story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. SERVICES COLUMN LAYOUT */}
      <section className="py-20 md:py-32 lg:py-44 bg-background">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <AnimatedSection className="mb-16 md:mb-32">
            <h2 className="text-xs tracking-[0.4em] text-primary uppercase mb-6 md:mb-8 flex items-center gap-6">
              <span className="w-12 h-[1px] bg-primary"></span>
              Our Expertise
            </h2>
            <h3 className="text-4xl md:text-6xl lg:text-8xl font-serif leading-[1.1] tracking-tight max-w-4xl">
              Precision interventions for complex challenges.
            </h3>
          </AnimatedSection>

          <div className="space-y-0 border-t border-white/10">
            {[
              { title: "Business Consultancy", icon: Compass, desc: "Architecting sustainable growth models and optimizing operational frameworks for high-tier enterprises." },
              { title: "Performance Marketing", icon: Target, desc: "Data-driven acquisition strategies engineered to maximize ROI and lower customer acquisition costs." },
              { title: "Personal Branding", icon: Gem, desc: "Elevating founders and executives into industry authorities through strategic narrative development." },
              { title: "Business Advice", icon: ShieldCheck, desc: "C-suite advisory for critical transitions, market expansions, and crisis management." },
              { title: "Strategic Marketing", icon: TrendingUp, desc: "Holistic brand positioning and go-to-market strategies that capture market share." },
            ].map((service, i) => (
              <AnimatedSection key={i} direction="up" delay={0.1}>
                <div className="group border-b border-white/10 py-10 md:py-16 lg:py-20 hover:bg-white/[0.02] transition-colors duration-500">
                  <div className="grid grid-cols-12 gap-4 md:gap-16 items-center">
                    <div className="col-span-2 text-primary font-serif text-3xl md:text-5xl lg:text-6xl opacity-40 group-hover:opacity-100 transition-opacity">
                      0{i + 1}
                    </div>
                    <div className="col-span-9 md:col-span-5">
                      <h4 className="text-xl md:text-3xl lg:text-5xl font-serif text-foreground group-hover:text-primary transition-colors leading-tight">
                        {service.title}
                      </h4>
                      <p className="text-sm md:text-base lg:hidden text-muted-foreground font-light leading-relaxed mt-3">
                        {service.desc}
                      </p>
                    </div>
                    <div className="hidden lg:block md:col-span-4">
                      <p className="text-xl text-muted-foreground font-light leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                    <div className="col-span-1 flex justify-end">
                      <Link href="/services" className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shrink-0">
                        <ArrowRight className="w-4 h-4 md:w-6 md:h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SIGNATURE QUOTE BANNER */}
      <section className="py-20 md:py-32 lg:py-44 bg-[#0d0d0d] relative overflow-hidden border-y border-primary/20">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.15)_0%,transparent_100%)]"></div>
        <div className="max-w-[80rem] mx-auto px-6 md:px-12 text-center relative z-10">
          <AnimatedSection>
            <QuoteIcon className="w-20 h-20 mx-auto mb-16 text-primary/30" />
            <div className="w-24 h-[1px] bg-primary/40 mx-auto mb-16"></div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.2] mb-16 italic font-light tracking-tight px-4">
              "We don't ask for upfront money. See our work, then decide to pay."
            </h2>
            
            <div className="w-24 h-[1px] bg-primary/40 mx-auto mt-16 mb-12"></div>
            <p className="text-primary tracking-[0.4em] uppercase text-sm font-medium">
              The Anoiak Guarantee
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. METHODOLOGY */}
      <section className="py-20 md:py-32 lg:py-44 bg-background relative overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <AnimatedSection className="lg:col-span-4">
              <h2 className="text-xs tracking-[0.4em] text-primary uppercase mb-8 flex items-center gap-6">
                <span className="w-12 h-[1px] bg-primary"></span>
                Methodology
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-8 md:mb-10 leading-[1.1] tracking-tight">The Architecture<br/>of Success</h3>
              <p className="text-xl text-muted-foreground font-light leading-relaxed mb-10">
                We replace guesswork with a calculated, empirical approach to business growth. Our four-stage methodology ensures alignment, impact, and unprecedented scale.
              </p>
            </AnimatedSection>
            
            <div className="lg:col-span-8">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
                {[
                  { num: "01", title: "Discovery", desc: "Deep-dive audit of your current architecture, identifying friction points and untapped potentials." },
                  { num: "02", title: "Blueprint", desc: "Architecting a bespoke strategy with exact KPIs, resource allocation, and timelines." },
                  { num: "03", title: "Execution", desc: "Deployment of frameworks and campaigns with rigorous daily monitoring and optimization." },
                  { num: "04", title: "Scale", desc: "Solidifying winning channels and amplifying systems for sustainable long-term dominance." }
                ].map((step, i) => (
                  <StaggerItem key={i} className="relative pt-12 group">
                    <div className="absolute top-0 left-0 text-[8rem] font-serif leading-none text-white/[0.03] group-hover:text-primary/[0.08] transition-colors duration-700 pointer-events-none -mt-8 -ml-4">
                      {step.num}
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-3xl font-serif mb-6 text-foreground">{step.title}</h4>
                      <p className="text-xl text-muted-foreground font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 md:py-32 lg:py-44 bg-card border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <AnimatedSection className="text-center mb-16 md:mb-24">
            <h2 className="text-xs tracking-[0.4em] text-primary uppercase mb-6 md:mb-8">Clarification</h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif tracking-tight">Frequently Asked Questions</h3>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              { q: "How does the 'no upfront money' guarantee work?", a: "We believe in demonstrating value before asking for commitment. We will execute an initial audit or pilot campaign, and you only proceed with payment if you are entirely satisfied with the caliber of our strategic insight and early results." },
              { q: "Who is your ideal client?", a: "We partner with ambitious founders, established mid-market enterprises, and high-growth startups that have proven product-market fit but require elite strategic and marketing intervention to break through their current revenue ceiling." },
              { q: "What makes Anoiak different from traditional agencies?", a: "We operate as strategic consultants first, not just tacticians. Led by Varneeth Varma, we align every marketing and branding effort directly to top-line business objectives, avoiding vanity metrics entirely." },
              { q: "How long does a typical engagement last?", a: "While we execute rapid interventions, significant business transformation requires time. Our minimum engagement is typically 3-6 months, though most clients retain us as long-term strategic partners." }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 md:py-32 lg:py-44 bg-background relative overflow-hidden">
        {/* luxury dark office architectural details */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Office" 
            className="w-full h-full object-cover opacity-20 grayscale mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif mb-10 md:mb-12 tracking-tight leading-[1.1]">
              Ready to transcend<br/> the ordinary?
            </h2>
            <Link 
              href="/contact"
              className="inline-flex px-10 md:px-14 py-5 md:py-6 bg-primary text-primary-foreground font-semibold tracking-[0.3em] uppercase text-xs md:text-sm hover:bg-white hover:scale-105 transition-all duration-500 shadow-2xl shadow-primary/20"
            >
              Initiate Contact
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-white/10 group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-8 flex justify-between items-center focus:outline-none"
      >
        <span className="font-serif text-2xl pr-8 text-foreground group-hover:text-primary transition-colors">{question}</span>
        <ChevronDown className={`w-6 h-6 text-primary/50 group-hover:text-primary transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pt-2 text-base md:text-xl text-muted-foreground font-light leading-relaxed pr-4 md:pr-12">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
