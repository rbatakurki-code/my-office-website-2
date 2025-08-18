/* eslint-disable @typescript-eslint/no-explicit-any */


import { client } from '../../lib/sanity';
import { GetStaticProps } from 'next';
import { useRef, useState } from 'react';

export const getStaticProps: GetStaticProps = async () => {
  const homePage = await client.fetch(`*[_type == "homePage"][0]`)
  const aboutPage = await client.fetch(`*[_type == "aboutPage"][0]`)
  const careerPage = await client.fetch(`*[_type == "careerPage"][0]`)
  const servicesPage = await client.fetch(`*[_type == "servicesPage"][0]{
    services[]{
      title,
      description,
      techStack
    }
  }`)
  const blogPosts = await client.fetch(`*[_type == "blogPost"] | order(date desc)`)
  const portfolioItem = await client.fetch(`*[_type == "portfolioItem"] | order(date desc)`)
  const contactPage = await client.fetch(`
    *[_type == "contactPage"][0]{
      title,
      description,
      address,
      phone,
      email,
      mapEmbed
    }
  `)

  return {
    props: {
      homePage,
      aboutPage,
      careerPage,
      servicesPage,
      blogPosts,
      portfolioItem,
      contactPage
    },
  }
}


export default function Home({ homePage, aboutPage, careerPage, servicesPage, blogPosts, portfolioItem, contactPage }: any) {
  const [menuOpen, setMenuOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const careerRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-fuchsia-50 to-yellow-50 text-gray-900 min-h-screen">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-600 via-fuchsia-500 to-yellow-400/90 backdrop-blur border-b border-gray-200 shadow-md">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 relative">
          {/* Site Title always visible */}
          <div className="font-bold text-lg sm:text-xl lg:text-2xl tracking-tight text-white drop-shadow-lg flex-shrink-0">
            SignificMinds
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex flex-wrap gap-4 md:gap-8 font-medium text-base lg:text-lg">
            <li><button onClick={() => scrollToSection(aboutRef)} className="hover:text-yellow-300 text-white transition">About</button></li>
            <li><button onClick={() => scrollToSection(servicesRef)} className="hover:text-yellow-300 text-white transition">Services</button></li>
            <li><button onClick={() => scrollToSection(careerRef)} className="hover:text-yellow-300 text-white transition">Careers</button></li>
            <li><button onClick={() => scrollToSection(projectsRef)} className="hover:text-yellow-300 text-white transition">Projects</button></li>
            <li><button onClick={() => scrollToSection(testimonialsRef)} className="hover:text-yellow-300 text-white transition">Testimonials</button></li>
            <li><button onClick={() => scrollToSection(contactRef)} className="hover:text-yellow-300 text-white transition">Contact</button></li>
          </ul>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Mobile Menu Overlay */}
          {menuOpen && (
            <div className="absolute top-16 left-0 w-full bg-gradient-to-br from-blue-600 via-fuchsia-500 to-yellow-400/95 shadow-lg rounded-b-xl flex flex-col items-center py-6 gap-4 animate-fade-in z-50 md:hidden">
              <button onClick={() => { scrollToSection(aboutRef); setMenuOpen(false); }} className="text-white text-lg font-medium hover:text-yellow-300 transition">About</button>
              <button onClick={() => { scrollToSection(servicesRef); setMenuOpen(false); }} className="text-white text-lg font-medium hover:text-yellow-300 transition">Services</button>
              <button onClick={() => { scrollToSection(careerRef); setMenuOpen(false); }} className="text-white text-lg font-medium hover:text-yellow-300 transition">Careers</button>
              <button onClick={() => { scrollToSection(projectsRef); setMenuOpen(false); }} className="text-white text-lg font-medium hover:text-yellow-300 transition">Projects</button>
              <button onClick={() => { scrollToSection(testimonialsRef); setMenuOpen(false); }} className="text-white text-lg font-medium hover:text-yellow-300 transition">Testimonials</button>
              <button onClick={() => { scrollToSection(contactRef); setMenuOpen(false); }} className="text-white text-lg font-medium hover:text-yellow-300 transition">Contact</button>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-12 sm:py-16 md:py-24 bg-gradient-to-br from-fuchsia-100 via-blue-100 to-yellow-100 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-fuchsia-700 drop-shadow animate-slide-up">{homePage?.hero?.title}</h1>
          <button onClick={() => scrollToSection(contactRef)} className="px-6 sm:px-8 py-3 bg-gradient-to-r from-fuchsia-500 via-blue-500 to-yellow-400 text-white rounded-full font-semibold shadow-lg hover:scale-105 hover:from-yellow-400 hover:to-fuchsia-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 animate-bounce">Get Started</button>
        </section>

        {/* About Section */}
        <section ref={aboutRef} id="about" className="max-w-4xl mx-auto px-4 py-10 sm:py-14 md:py-16 bg-white/80 rounded-2xl shadow-lg my-8 animate-fade-in" aria-label="About">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{aboutPage?.title || 'About Us'}</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">{aboutPage?.description}</p>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Our Core Values</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {aboutPage?.values?.map((value: string, idx: number) => (
              <li key={idx} className="flex items-center gap-2"><span className="text-green-500">✔️</span> {value}</li>
            ))}
          </ul>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} id="services" className="bg-gradient-to-r from-blue-50 via-fuchsia-50 to-yellow-50 py-10 sm:py-14 md:py-16 px-4 my-8 rounded-2xl shadow-lg animate-fade-in" aria-label="Services">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Array.isArray(servicesPage?.services) && servicesPage.services.length > 0 ? (
                servicesPage.services.map((service: any, idx: number) => (
                  <div key={idx} className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-xl transition group">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-blue-600 transition">{service.title}</h3>
                    <p className="text-gray-600 mb-2 text-sm sm:text-base">{service.description}</p>
                    <p className="text-xs sm:text-sm text-gray-500"><span className="font-medium">Tech Stack:</span> {service.techStack}</p>
                  </div>
                ))
              ) : (
                <p>No services found.</p>
              )}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} id="projects" className="max-w-5xl mx-auto px-4 py-10 sm:py-14 md:py-16 bg-white/80 rounded-2xl shadow-lg my-8 animate-fade-in" aria-label="Projects">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {portfolioItem && portfolioItem.length > 0 ? (
              portfolioItem.map((item: any, idx: number) => (
                <div key={idx} className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-xl transition">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-1 text-sm sm:text-base"><span className="font-medium">Client:</span> {item.client}</p>
                  <p className="text-gray-500 mb-2 text-xs sm:text-sm"><span className="font-medium">Completed:</span> {item.date}</p>
                  <p className="text-gray-700 text-sm sm:text-base">{item.description}</p>
                </div>
              ))
            ) : (
              <p>No projects found.</p>
            )}
          </div>
        </section>

        {/* Testimonials Section */}
        <section ref={testimonialsRef} id="testimonials" className="bg-gradient-to-r from-yellow-50 via-fuchsia-50 to-blue-50 py-10 sm:py-14 md:py-16 px-4 my-8 rounded-2xl shadow-lg animate-fade-in" aria-label="Testimonials">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Testimonials</h2>
            <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:justify-center md:gap-12">
              {/* Example testimonials, replace with dynamic if available */}
              <blockquote className="bg-white rounded-xl shadow-md p-4 sm:p-6 w-full md:w-1/2 animate-fade-in">
                <p className="text-base sm:text-lg italic mb-2">“Great team, delivered on time and exceeded expectations!”</p>
                <footer className="text-gray-500">— Happy Client</footer>
              </blockquote>
              <blockquote className="bg-white rounded-xl shadow-md p-4 sm:p-6 w-full md:w-1/2 animate-fade-in delay-100">
                <p className="text-base sm:text-lg italic mb-2">“Professional, creative, and responsive. Highly recommended.”</p>
                <footer className="text-gray-500">— Satisfied Customer</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section ref={careerRef} id="careers" className="max-w-4xl mx-auto px-4 py-10 sm:py-14 md:py-16 bg-white/80 rounded-2xl shadow-lg my-8 animate-fade-in" aria-label="Careers">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Careers</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">{careerPage?.intro}</p>
          <div className="space-y-4 sm:space-y-6">
            {careerPage?.openings?.map((job: any, i: number) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-xl transition">
                <h3 className="text-lg sm:text-xl font-semibold mb-1">{job.title}</h3>
                <p className="text-gray-600 mb-1 text-sm sm:text-base"><span className="font-medium">Location:</span> {job.location}</p>
                <p className="text-gray-500 mb-1 text-xs sm:text-sm"><span className="font-medium">Type:</span> {job.type}</p>
                <p className="text-gray-700 text-sm sm:text-base">{job.description}</p>
              </div>
            ))}
          </div>
          <p className="italic text-gray-500 mt-6 text-xs sm:text-sm">{careerPage?.note}</p>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="max-w-4xl mx-auto px-4 py-10 sm:py-14 md:py-16 bg-gradient-to-br from-blue-50 via-fuchsia-50 to-yellow-50 rounded-2xl shadow-lg my-8 animate-fade-in" aria-label="Contact">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{contactPage?.title || 'Contact Us'}</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">{contactPage?.description}</p>
          <div className="space-y-1 sm:space-y-2 mb-6">
            <p className="text-xs sm:text-sm"><span className="font-medium">Address:</span> {contactPage?.address}</p>
            <p className="text-xs sm:text-sm"><span className="font-medium">Phone:</span> {contactPage?.phone}</p>
            <p className="text-xs sm:text-sm"><span className="font-medium">Email:</span> <a href={`mailto:${contactPage?.email}`} className="text-blue-600 underline hover:text-blue-800">{contactPage?.email}</a></p>
          </div>
          {contactPage?.mapEmbed && (
            <div className="mt-6 sm:mt-8 rounded-lg overflow-hidden shadow-lg animate-fade-in">
              <iframe
                src={contactPage.mapEmbed}
                width="100%"
                height="200"
                className="sm:h-[300px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Map"
              ></iframe>
            </div>
          )}
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-fuchsia-500 via-blue-600 to-yellow-400 text-white py-8 mt-8 shadow-inner animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-4">
          <div className="font-bold text-lg drop-shadow mb-2 md:mb-0 text-center md:text-left w-full md:w-auto">{homePage?.hero?.title || 'My Office'}</div>
          <nav className="w-full md:w-auto flex justify-center md:justify-start">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium">
              <li><button onClick={() => scrollToSection(aboutRef)} className="hover:text-yellow-300 transition">About</button></li>
              <li><button onClick={() => scrollToSection(servicesRef)} className="hover:text-yellow-300 transition">Services</button></li>
              <li><button onClick={() => scrollToSection(careerRef)} className="hover:text-yellow-300 transition">Careers</button></li>
              <li><button onClick={() => scrollToSection(projectsRef)} className="hover:text-yellow-300 transition">Projects</button></li>
              <li><button onClick={() => scrollToSection(testimonialsRef)} className="hover:text-yellow-300 transition">Testimonials</button></li>
              <li><button onClick={() => scrollToSection(contactRef)} className="hover:text-yellow-300 transition">Contact</button></li>
            </ul>
          </nav>
          <div className="text-xs text-white/80 mt-4 md:mt-0 text-center w-full md:w-auto">&copy; {new Date().getFullYear()} {homePage?.hero?.title || 'My Office'}. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
