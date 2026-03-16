import { Layout } from "@/components/layout/Layout";
import { PageSEO } from "@/components/PageSEO";
import { AnimatedSection } from "@/components/AnimatedSection";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "business-consultancy",
      title: "Business Consultancy",
      description: "Comprehensive architectural review and restructuring of your business model to unlock scale, reduce operational friction, and maximize enterprise value.",
      deliverables: ["Operational Audits", "Revenue Stream Optimization", "Organizational Structuring", "Risk Mitigation Frameworks"]
    },
    {
      id: "performance-marketing",
      title: "Performance Marketing",
      description: "Data-driven, highly calibrated acquisition campaigns. We bypass vanity metrics to focus entirely on ROAS, CAC reduction, and scalable customer acquisition.",
      deliverables: ["Paid Acquisition (Meta, Google, LinkedIn)", "Conversion Rate Optimization (CRO)", "A/B Testing & Funnel Architecture", "Advanced Analytics & Attribution"]
    },
    {
      id: "personal-branding",
      title: "Personal Branding",
      description: "Positioning founders, executives, and leaders as undeniable industry authorities. We craft the narrative that opens doors and attracts premium opportunities.",
      deliverables: ["Executive Narrative Design", "Thought Leadership Content Strategy", "Digital Presence Optimization", "Media & PR Positioning"]
    },
    {
      id: "strategic-marketing",
      title: "Strategic Marketing",
      description: "High-level brand positioning designed to separate you from the commodity tier and establish your firm as a premium necessity in the minds of your target market.",
      deliverables: ["Brand Architecture & Identity", "Go-To-Market Strategy", "Competitor Vulnerability Analysis", "Message Engineering"]
    },
    {
      id: "business-advice",
      title: "Business Advice",
      description: "Direct, unfiltered C-suite advisory for critical moments: pivoting models, entering new markets, or navigating complex systemic challenges.",
      deliverables: ["1-on-1 Founder Advisory", "Crisis Management Strategy", "M&A Readiness Review", "Market Expansion Feasibility"]
    }
  ];

  return (
    <Layout>
      <PageSEO 
        title="Expertise & Services" 
        description="Explore Anoiak's premium services spanning business consultancy, performance marketing, and personal branding." 
      />

      <section className="pt-32 pb-16 md:pt-44 md:pb-24 lg:pt-56 lg:pb-32 bg-background relative border-b border-white/5 overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-serif mb-8 md:mb-12 tracking-tight leading-[1] text-balance">
              Our Expertise
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl text-muted-foreground font-light max-w-4xl leading-relaxed">
              Specialized, high-impact interventions designed exclusively for entities aiming for market dominance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-card">
        {services.map((service, index) => (
          <div key={service.id} className="border-b border-white/5">
            <div className="max-w-[90rem] mx-auto px-6 md:px-12 py-16 md:py-28 lg:py-44">
              <AnimatedSection direction="up" className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                  
                  {/* Left Col - Number & Title */}
                  <div className="lg:col-span-5 relative">
                    <div className="text-[14rem] font-serif leading-none absolute -top-32 -left-12 text-primary/[0.04] select-none pointer-events-none">
                      0{index + 1}
                    </div>
                    <div className="relative z-10 pt-4">
                      <h2 className="text-4xl md:text-6xl font-serif mb-10 text-foreground leading-[1.1] tracking-tight">{service.title}</h2>
                      <div className="w-16 h-[1px] bg-primary mb-10"></div>
                      <p className="text-xl text-muted-foreground font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Col - Deliverables */}
                  <div className="lg:col-span-7 lg:pl-12">
                    <div className="bg-background/50 border border-white/5 p-6 md:p-12 lg:p-16 luxury-shadow">
                      <h4 className="font-serif text-2xl mb-10 tracking-wide text-foreground">Key Deliverables</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-5">
                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5 opacity-80" />
                            <span className="text-lg text-muted-foreground font-light leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-16 pt-10 border-t border-white/5">
                        <Link 
                          href={`/contact?service=${service.id}`}
                          className="inline-flex items-center gap-4 text-xs tracking-[0.25em] uppercase text-foreground hover:text-primary transition-colors group font-medium"
                        >
                          Inquire about this service
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </AnimatedSection>
            </div>
          </div>
        ))}
      </section>

      {/* Engagement Model Banner */}
      <section className="py-20 md:py-32 lg:py-44 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,black_0%,transparent_100%)] opacity-10"></div>
        <div className="max-w-[70rem] mx-auto px-6 md:px-12 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary-foreground mb-8 md:mb-12 tracking-tight leading-[1.1]">
              Bespoke Engagements.<br/> Zero Templates.
            </h2>
            <p className="text-primary-foreground/90 font-light text-lg md:text-2xl mb-10 md:mb-16 max-w-4xl mx-auto leading-relaxed">
              We do not sell pre-packaged services. Every engagement begins with a deep diagnostic to determine exactly what your business needs to scale, followed by a custom proposal.
            </p>
            <Link 
              href="/contact"
              className="inline-flex px-12 py-6 bg-background text-foreground font-semibold tracking-[0.25em] uppercase text-sm hover:bg-white hover:text-background transition-all duration-500 shadow-2xl"
            >
              Request a Diagnostic
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
