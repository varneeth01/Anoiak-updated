import { Layout } from "@/components/layout/Layout";
import { PageSEO } from "@/components/PageSEO";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { Target, Shield, Zap } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <PageSEO 
        title="About Us" 
        description="Discover the story behind Anoiak and our founder Varneeth Varma Nandimandalam's relentless pursuit of excellence." 
      />

      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 lg:pt-56 lg:pb-32 bg-background relative border-b border-white/5 overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-serif mb-8 md:mb-12 tracking-tight leading-[1] text-balance">
              Our Narrative
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl text-muted-foreground font-light max-w-4xl leading-relaxed">
              We operate at the intersection of raw ambition and calculated strategy, 
              building legacies that stand the test of market volatility.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 md:py-32 lg:py-44 bg-card">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-center">
            <AnimatedSection direction="right" className="lg:col-span-6 relative">
              <div className="relative aspect-[3/4] overflow-hidden luxury-border">
                <img 
                  src="/images/13211802-5445-4e90-ae0c-744e769ef6d1.jpeg&auto=format&fit=crop" 
                  alt="Varneeth Varma Nandimandalam" 
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2000ms] grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-12 left-12 right-12">
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-tight">Varneeth Varma<br/>Nandimandalam</h3>
                  <p className="text-primary tracking-[0.3em] uppercase text-xs font-medium">Founder & Principal Consultant</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" className="lg:col-span-6">
              <h2 className="text-xs tracking-[0.4em] text-primary uppercase mb-8 flex items-center gap-6">
                <span className="w-12 h-[1px] bg-primary"></span>
                The Genesis
              </h2>
              <h3 className="text-5xl md:text-7xl font-serif mb-12 leading-[1.1] tracking-tight">
                Born from a dissatisfaction with the status quo.
              </h3>
              
              <div className="space-y-10 text-muted-foreground font-light leading-relaxed text-xl">
                <p>
                  Varneeth Varma Nandimandalam established Anoiak after witnessing a critical gap in the market: traditional agencies offered generic templates, while pure consultancies lacked execution capability. 
                </p>
                <p>
                  Anoiak was designed to be the hybrid exception. An elite advisory firm that not only architects the roadmap for market dominance but meticulously oversees its deployment. 
                </p>
                <div className="pl-10 border-l border-primary/50 py-4 my-12">
                  <p className="italic font-serif text-3xl md:text-4xl text-foreground leading-snug">
                    "True luxury in business isn't just aesthetic; it's the luxury of confidence. Knowing that your strategy is impenetrable and your execution is flawless."
                  </p>
                </div>
                <p>
                  Today, under Varneeth's direct leadership, Anoiak remains intentionally boutique, taking on a select number of clients to ensure an unparalleled depth of focus and transformative results.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 lg:py-44 bg-background">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <AnimatedSection className="mb-16 md:mb-32">
            <h2 className="text-xs tracking-[0.4em] text-primary uppercase mb-6 md:mb-8 flex items-center gap-6">
              <span className="w-12 h-[1px] bg-primary"></span>
              Our DNA
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif tracking-tight">The Principles We Stand By</h3>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {[
              { icon: Target, title: "Precision", text: "We do not guess. Every recommendation is backed by empirical data, market reality, and rigorous analysis." },
              { icon: Shield, title: "Integrity", text: "Demonstrated by our 'No Upfront Money' guarantee. We tie our success inextricably to yours." },
              { icon: Zap, title: "Velocity", text: "In modern markets, speed is a premium asset. We execute rapid interventions without sacrificing quality." }
            ].map((value, i) => (
              <StaggerItem key={i} className="p-8 md:p-12 lg:p-16 border border-white/5 bg-card/30 hover:bg-card transition-colors duration-700">
                <div className="w-20 h-20 rounded-full bg-background border border-primary/20 flex items-center justify-center mb-10 text-primary">
                  <value.icon className="w-8 h-8" />
                </div>
                <h4 className="text-3xl font-serif mb-6 text-foreground">{value.title}</h4>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">{value.text}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </Layout>
  );
}
