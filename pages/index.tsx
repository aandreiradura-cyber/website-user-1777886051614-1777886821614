```jsx
import { useState } from 'react';
import Head from 'next/head';

export default function TADentist() {
  const [activeTab, setActiveTab] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const services = [
    { title: 'Cosmetic Dentistry', desc: 'Transform your smile with veneers, whitening, and aesthetic treatments tailored to your unique features.' },
    { title: 'Implant Surgery', desc: 'State-of-the-art dental implants restoring full function and natural appearance with precision technology.' },
    { title: 'Orthodontics', desc: 'Discreet alignment solutions including Invisalign and ceramic braces for a perfectly aligned smile.' },
    { title: 'Preventive Care', desc: 'Comprehensive examinations and hygiene programs designed to maintain optimal oral health.' },
    { title: 'Endodontics', desc: 'Advanced root canal therapy using microscope-guided techniques for painless, lasting results.' },
    { title: 'Pediatric Dentistry', desc: 'Gentle, specialized care creating positive dental experiences for children of all ages.' },
  ];

  const testimonials = [
    { name: 'Sophia Laurent', role: 'Patient since 2019', text: 'The level of care and attention to detail at TA Dentist is unmatched. My smile has never looked better.' },
    { name: 'Marcus Chen', role: 'Patient since 2021', text: 'A truly elite experience from consultation to treatment. The team is professional, kind, and exceptionally skilled.' },
    { name: 'Isabella Romano', role: 'Patient since 2018', text: 'I have visited many dental practices, but none compare to TA Dentist. Pure excellence in every aspect.' },
  ];

  return (
    <>
      <Head>
        <title>TA Dentist | Elite Dental Care</title>
        <meta name="description" content="Premium dental services with a focus on elegance, precision, and patient comfort." />
      </Head>

      <div className="min-h-screen bg-stone-50 text-stone-900 font-light">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center">
                <span className="text-white font-serif text-lg tracking-widest">TA</span>
              </div>
              <div>
                <h1 className="font-serif text-xl tracking-wide">TA Dentist</h1>
                <p className="text-xs tracking-widest text-stone-500 uppercase">Elite Dental Care</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-10 text-sm tracking-wider uppercase">
              {['home', 'about', 'services', 'testimonials', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    document.getElementById(tab)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`transition-colors hover:text-amber-800 ${activeTab === tab ? 'text-amber-800' : 'text-stone-700'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden md:block px-6 py-2 bg-stone-900 text-white text-xs tracking-widest uppercase hover:bg-amber-800 transition-colors"
            >
              Book Consultation
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section id="home" className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50/30"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-200/40 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-amber-800 mb-6">Excellence in Dental Aesthetics</p>
              <h2 className="font-serif text-5xl lg:text-7xl leading-tight text-stone-900 mb-8">
                Where Artistry<br />Meets <em className="text-amber-800">Precision</em>
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-10 max-w-lg">
                At TA Dentist, we redefine the dental experience through bespoke care, refined techniques, and an unwavering commitment to your wellbeing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-4 bg-stone-900 text-white text-xs tracking-widest uppercase hover:bg-amber-800 transition-colors"
                >
                  Schedule Visit
                </button>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-4 border border-stone-900 text-stone-900 text-xs tracking-widest uppercase hover:bg-stone-900 hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </div>
              <div className="mt-16 grid grid-cols-3 gap-8 pt-10 border-t border-stone-200">
                <div>
                  <p className="font-serif text-3xl text-amber-800">25+</p>
                  <p className="text-xs tracking-widest uppercase text-stone-500 mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-amber-800">10k+</p>
                  <p className="text-xs tracking-widest uppercase text-stone-500 mt-1">Happy Patients</p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-amber-800">100%</p>
                  <p className="text-xs tracking-widest uppercase text-stone-500 mt-1">Dedication</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-stone-300 to-stone-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-xs tracking-[0.3em] uppercase mb-2 opacity-80">Featured</p>
                  <p className="font-serif text-2xl">Premium Dental Suites</p>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-amber-50 border border-amber-200 hidden lg:flex flex-col justify-center p-6">
                <p className="text-xs tracking-widest uppercase text-amber-800 mb-2">Accredited</p>
                <p className="font-serif text-xl text-stone-900">International Standards of Excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 lg:py-36 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-stone-200 relative">
                  <div className="absolute top-8 right-8 w-32 h-32 border border-amber-800/30"></div>
                  <div className="absolute bottom-8 left-8 w-24 h-24 bg-stone-900/10"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-xs tracking-[0.3em] uppercase text-amber-800 mb-6">Our Philosophy</p>
                <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-8">
                  A Practice Built on<br /><em className="text-amber-800">Trust</em> and Mastery
                </h2>
                <p className="text-stone-600 leading-relaxed mb-6">
                  Founded with a vision to elevate dental care to an art form, TA Dentist combines decades of clinical expertise with the finest contemporary techniques.
                </p>
                <p className="text-stone-600 leading-relaxed mb-10">
                  Every patient who walks through our doors is treated as an individual, with personalized treatment plans designed to deliver enduring results in an atmosphere of refined comfort.
                </p>
                <div className="space-y-4">
                  {['Board-certified specialists', 'Advanced diagnostic technology', 'Bespoke treatment planning', 'Sterilization beyond standards'].map((item) => (
                    <div key={item} className="flex items-center space-x-4">
                      <div className="w-12 h-px bg-amber-800"></div>
                      <p className="text-sm tracking-wide text-stone-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 lg:py-36 bg-stone-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <p className="text-xs tracking-[0.3em] uppercase text-amber-800 mb-6">Our Expertise</p>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight max-w-2xl mx-auto">
                Comprehensive <em className="text-amber-800">Dental</em> Excellence
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-10 lg:p-12 hover:bg-stone-50 transition-colors group cursor-pointer"
                >
                  <p className="font-serif text-sm text-amber-800 mb-4">0{idx + 1}</p>
                  <h3 className="font-serif text-2xl mb-4 group-hover:text-amber-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-sm">{service.desc}</p>
                  <div className="mt-8 w-12 h-px bg-stone-900 group-hover:w-20 group-hover:bg-amber-800 transition-all"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 lg:py-36 bg-stone-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-20">
              <p className="text-xs tracking-[0.3em] uppercase text-amber-400 mb-6">Patient Reflections</p>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
                Words from Those <em className="text-amber-400">We Serve</em>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <div key={idx} className="border border-stone-700 p-10 hover:border-amber-400 transition-colors">
                  <p className="font-serif text-3xl text-amber-400 mb-6">"</p>
                  <p className="text-stone-300 leading-relaxed mb-8 italic">{t.text}</p>
                  <div className="pt-6 border-t border-stone-700">
                    <p className="font-serif text-lg">{t.name}</p>
                    <p className="text-xs tracking-widest uppercase text-stone-500 mt-1">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 lg:py-36 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-amber-800 mb-6">Get in Touch</p>
                <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-8">
                  Begin Your<br /><em className="text-amber-800">Journey</em> With Us
                </h2>
                <p className="text-stone-600 leading-relaxed mb-12">
                  Reach out to schedule a private consultation. Our concierge team will respond within one business day to arrange your visit.
                </p>
                <div className="space-y-8">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-stone-500 mb-2">Address</p>
                    <p className="font-serif text-lg">125 Elysian Boulevard, Suite 800<br />Manhattan, New York 10022</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-stone-500 mb-2">Telephone</p>
                    <p className="font-serif text-lg">+1 (212) 555-0188</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-stone-500 mb-2">Email</p>
                    <p className="font-serif text-lg">concierge@tadentist.com</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-stone-500 mb-2">Hours</p>
                    <p className="font-serif text-lg">Monday — Friday: 8am — 7pm<br />Saturday: 9am — 4pm</p>
                  </div>
                </div>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="bg-stone-50 p-10 lg:p-12 border border-stone-200">
                  <h3 className="font-serif text-2xl mb-8">Request a Consultation</h3>
                  {submitted && (
                    <div className="mb-6 p-4 bg-amber-50 border border-amber-200 text-amber-900 text-sm">
                      Thank you. Your request has been received and we will be in touch shortly.
                    </div>
                  )}
                  <div className="space-y-6">
                    <div>
                      <label className="text-xs tracking-widest uppercase text-stone-500 mb-2 block">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-b border-stone-300 focus:border-amber-800 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-widest uppercase text-stone-500 mb-2 block">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-b border-stone-300 focus:border-amber-800 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-widest uppercase text-stone-500 mb-2 block">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-b border-stone-300 focus:border-amber-800 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-widest uppercase text-stone-500 mb-2 block">Your Message</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-0 py-3 bg-transparent border-b border-stone-300 focus:border-amber-800 outline-none transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-stone-900 text-white text-xs tracking-widest uppercase hover:bg-amber-800 transition-colors mt-6"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-stone-900 text-stone-400 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center">
                    <span className="text-white font-serif text-lg tracking-widest">TA</span>
                  </div>
                  <h3 className="font-serif text-xl text-white">TA Dentist</h3>
                </div>
                <p className="text-sm leading-relaxed">Refining the standard of dental excellence since 1999.</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-white mb-4">Practice</p>
                <ul className="space-y-2 text-sm">
                  <li>About Us</li>
                  <li>Our Team</li>
                  <li>Services</li>
                  <li>Patient Stories</li>
                </ul>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-white mb-4">Resources</p>
                <ul className="space-y-2 text-sm">
                  <li>Insurance</li>
                  <li>Patient Forms</li>
                  <li>FAQ</li>
                  <li>Privacy</li>
                </ul>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-white mb-4">Visit</p>
                <p className="text-sm leading-relaxed">125 Elysian Boulevard<br />Manhattan, NY 10022<br />+1 (212) 555-0188</p>
              </div>
            </div>
            <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs tracking-wider">
              <p>© {new Date().getFullYear()} TA Dentist. All rights reserved.</p>
              <p className="mt-4 md:mt-0">Crafted with precision and care.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
```