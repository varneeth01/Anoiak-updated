import { Layout } from "@/components/layout/Layout";
import { PageSEO } from "@/components/PageSEO";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Mail, MapPin, Phone, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <Layout>
      <PageSEO 
        title="Contact" 
        description="Initiate a dialogue with Anoiak. Request a consultation with Varneeth Varma Nandimanddalam." 
      />

      <section className="pt-32 pb-16 md:pt-44 md:pb-24 lg:pt-56 lg:pb-32 bg-background relative border-b border-white/5 overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <AnimatedSection>
            <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-serif mb-8 md:mb-12 tracking-tight leading-[1] text-balance">
              Initiate Dialogue
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl text-muted-foreground font-light max-w-4xl leading-relaxed">
              Confidentiality and discretion are paramount. Reach out to discuss how we can engineer your next phase of growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-28 lg:py-44 bg-card relative">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32">
            
            {/* Contact Details */}
            <div className="lg:col-span-5">
              <AnimatedSection direction="right">
                <h3 className="text-4xl font-serif mb-16 text-foreground">Direct Channels</h3>
                
                <div className="space-y-16">
                  <div className="flex items-start gap-8">
                    <div className="w-16 h-16 border border-white/10 bg-background flex items-center justify-center shrink-0 rounded-full">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="pt-2">
                      <h4 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Email</h4>
                      <a href="mailto:varneethvarma.n@gmail.com" className="text-lg md:text-2xl text-foreground hover:text-primary transition-colors font-light break-all">
                        varneethvarma.n@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    <div className="w-16 h-16 border border-white/10 bg-background flex items-center justify-center shrink-0 rounded-full">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div className="pt-2">
                      <h4 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Phone / WhatsApp</h4>
                      <a href="tel:+917981399132" className="text-2xl text-foreground hover:text-primary transition-colors font-light">
                        +91 7981399132
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-8">
                    <div className="w-16 h-16 border border-white/10 bg-background flex items-center justify-center shrink-0 rounded-full">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="pt-2">
                      <h4 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Headquarters</h4>
                      <p className="text-2xl text-foreground font-light leading-snug">
                        Hoskote, Bengaluru,<br/>
                        Karnataka, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-24 p-12 border border-primary/20 bg-primary/[0.02]">
                  <h4 className="font-serif text-3xl mb-6 text-primary">The Anoiak Guarantee</h4>
                  <p className="text-muted-foreground font-light text-lg leading-relaxed">
                    We operate strictly on a "prove it first" basis. Reach out to discuss our no-upfront-money policy for new enterprise engagements.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <AnimatedSection direction="left" className="bg-background p-10 md:p-20 border border-white/5 luxury-shadow h-full">
                {isSuccess ? (
                  <div className="h-full min-h-[600px] flex flex-col items-center justify-center text-center px-4">
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mb-10">
                      <CheckCircle className="w-16 h-16 text-primary" />
                    </div>
                    <h3 className="text-5xl font-serif mb-8 text-foreground">Inquiry Received</h3>
                    <p className="text-xl text-muted-foreground font-light mb-16 max-w-2xl leading-relaxed">
                      Thank you for reaching out. Varneeth or a senior associate will review your details and contact you within 24 hours to schedule a diagnostic call.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-xs tracking-[0.3em] uppercase text-primary border-b border-primary pb-2 hover:text-white hover:border-white transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <label htmlFor="name" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Full Name</label>
                        <input 
                          id="name" 
                          type="text" 
                          required
                          className="w-full bg-transparent border-b border-white/10 py-5 text-xl text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/20 font-light"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-4">
                        <label htmlFor="company" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Company</label>
                        <input 
                          id="company" 
                          type="text" 
                          className="w-full bg-transparent border-b border-white/10 py-5 text-xl text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/20 font-light"
                          placeholder="Acme Corp"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-4">
                        <label htmlFor="email" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Email Address</label>
                        <input 
                          id="email" 
                          type="email" 
                          required
                          className="w-full bg-transparent border-b border-white/10 py-5 text-xl text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/20 font-light"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-4">
                        <label htmlFor="phone" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Phone Number</label>
                        <input 
                          id="phone" 
                          type="tel" 
                          className="w-full bg-transparent border-b border-white/10 py-5 text-xl text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/20 font-light"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label htmlFor="service" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Primary Interest</label>
                      <select 
                        id="service" 
                        className="w-full bg-transparent border-b border-white/10 py-5 text-xl text-foreground focus:outline-none focus:border-primary transition-colors font-light appearance-none"
                      >
                        <option value="" className="bg-card text-foreground">Select a service area</option>
                        <option value="business-consultancy" className="bg-card text-foreground">Business Consultancy</option>
                        <option value="performance-marketing" className="bg-card text-foreground">Performance Marketing</option>
                        <option value="personal-branding" className="bg-card text-foreground">Personal Branding</option>
                        <option value="strategic-marketing" className="bg-card text-foreground">Strategic Marketing</option>
                        <option value="business-advice" className="bg-card text-foreground">Business Advice</option>
                        <option value="other" className="bg-card text-foreground">Other / General Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      <label htmlFor="message" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Message / Current Challenge</label>
                      <textarea 
                        id="message" 
                        rows={5}
                        required
                        className="w-full bg-transparent border-b border-white/10 py-5 text-xl text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/20 font-light resize-none"
                        placeholder="Briefly describe your current situation and goals..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 bg-primary text-primary-foreground font-semibold tracking-[0.3em] uppercase text-sm hover:bg-white transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-70 disabled:cursor-not-allowed mt-8"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Submit Inquiry
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
