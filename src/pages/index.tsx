/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

// External imports
import { GetStaticProps } from 'next';
import { useRef, useState } from 'react';

// Local imports
import { client } from '../../lib/sanity';

import AboutSection from './components/About';
import ServicesSection from './components/Services';
import InnovationRnDSection from './components/InnovationRnD';
import CustomerSection from './components/Customers';
import TestimonialSection from './components/Testimonials';
import BlogPostsSection from './components/Blog';
import CareerSection from './components/Career';
import ContactSection from './components/Contact';
import ProjectsSection from './components/Projects';

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
  const portfolioItem = await client.fetch(`*[_type == "portfolioItem"]`)
  const testimonialsItems = await client.fetch(`*[_type == "testimonialPage"]`)
  const customerDetails = await client.fetch(`*[_type == "customerPage"]`)
  const innovationRnDItems = await client.fetch(`*[_type == "innovationPage"]`)
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
      servicesPage,
      innovationRnDItems,
      customerDetails,
      portfolioItem,
      testimonialsItems,
      blogPosts,
      careerPage,
      contactPage
    },
  }
}

export default function Home({ 
  homePage, 
  aboutPage, 
  servicesPage, 
  innovationRnDItems,
  customerDetails,
  // Revisit below commented components when we have some proper data to showcase
  portfolioItem, 
  testimonialsItems,
  blogPosts,
  careerPage, 
  contactPage
}: any) {

  const [menuOpen, setMenuOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const innovationRnDRef = useRef<HTMLDivElement | null>(null);
  const customerDetailsRef = useRef<HTMLDivElement | null>(null);
  const careerRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  // Revisit below commented components when we have some proper data to showcase
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  const blogPostsRef = useRef<HTMLDivElement | null>(null);
  
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (

    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-blue-900 backdrop-blur border-b border-gray-200 shadow-md">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 relative">
          {/* Site Title always visible */}
          <div className="font-bold text-lg sm:text-xl lg:text-2xl tracking-tight text-white drop-shadow-lg flex-shrink-0">
            SignificMinds
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex flex-wrap gap-4 md:gap-8 font-medium text-base lg:text-lg">
            <li><button onClick={() => scrollToSection(aboutRef)} className="hover:text-teal-400 text-white transition">About</button></li>
            <li><button onClick={() => scrollToSection(servicesRef)} className="hover:text-teal-400 text-white transition">Services</button></li>
            <li><button onClick={() => scrollToSection(innovationRnDRef)} className="hover:text-teal-400 text-white transition">Innovation/R&D</button></li>
            <li><button onClick={() => scrollToSection(customerDetailsRef)} className="hover:text-teal-400 text-white transition">Customers/Clients</button></li>
            {/* Revisit below commented components when we have some proper data to showcase */}
            {/* <li><button onClick={() => scrollToSection(projectsRef)} className="hover:text-teal-400 text-white transition">Projects</button></li>
            <li><button onClick={() => scrollToSection(testimonialsRef)} className="hover:text-teal-400 text-white transition">Testimonials</button></li>
            <li><button onClick={() => scrollToSection(blogPostsRef)} className="hover:text-teal-400 text-white transition">Blogs</button></li> */}
            <li><button onClick={() => scrollToSection(careerRef)} className="hover:text-teal-400 text-white transition">Careers</button></li>
            <li><button onClick={() => scrollToSection(contactRef)} className="hover:text-teal-400 text-white transition">Contact</button></li>
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
            <div className="absolute top-16 left-0 w-full bg-blue-900 shadow-lg rounded-b-xl flex flex-col items-center py-6 gap-4 animate-fade-in z-50 md:hidden">
              <button onClick={() => { scrollToSection(aboutRef); setMenuOpen(false); }} className="text-white text-lg font-medium hover:text-teal-400 transition">About</button>
              <button onClick={() => { scrollToSection(servicesRef); setMenuOpen(false); }} className="text-white text-lg font-medium hover:text-teal-400 transition">Services</button>
              <button onClick={() => { scrollToSection(innovationRnDRef); setMenuOpen(false); }} className="text-white text-lg font-medium hover:text-teal-400 transition">Innovation/R&D</button>
              <button onClick={() => { scrollToSection(customerDetailsRef); setMenuOpen(false); }} className="text-white text-lg font-medium hover:text-teal-400 transition">Customers/Clients</button>
              {/* Revisit below commented components when we have some proper data to showcase */}
              {/* <button onClick={() => { scrollToSection(projectsRef); setMenuOpen(false); }} className="text-white text-lg font-medium hover:text-teal-400 transition">Projects</button>
              <button onClick={() => { scrollToSection(testimonialsRef); setMenuOpen(false); }} className="text-white text-lg font-medium hover:text-teal-400 transition">Testimonials</button>
              <button onClick={() => { scrollToSection(blogPostsRef); setMenuOpen(false); }} className="text-white text-lg font-medium hover:text-teal-400 transition">Blogs</button> */}
              <button onClick={() => { scrollToSection(careerRef); setMenuOpen(false); }} className="text-white text-lg font-medium hover:text-teal-400 transition">Careers</button>
              <button onClick={() => { scrollToSection(contactRef); setMenuOpen(false); }} className="text-white text-lg font-medium hover:text-teal-400 transition">Contact</button>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="min-h-[40vh] flex flex-col items-center justify-center text-center px-4 py-12 sm:py-16 md:py-24 bg-gray-100 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-blue-900 drop-shadow animate-slide-up">{homePage?.hero?.title}</h1>
          <button onClick={() => scrollToSection(contactRef)} className="px-6 sm:px-8 py-3 bg-teal-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-teal-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 animate-bounce">Get Started</button>
        </section>

        {/* About Section */}
        <AboutSection aboutPage={aboutPage} aboutRef={aboutRef} />

        {/* Services Section */}
        <ServicesSection servicesPage={servicesPage} servicesRef={servicesRef} />
        
        {/* R&D / Innovation Section */}
        <InnovationRnDSection innovationRnDItems={innovationRnDItems} innovationRnDRef={innovationRnDRef} />

        {/* Customers/Clients Section */}
        <CustomerSection customerDetails={customerDetails} customerDetailsRef={customerDetailsRef} />

        {/* Revisit below commented components when we have some proper data to showcase */}
            
        {/* Projects Section */}
        {/* <ProjectsSection portfolioItem={portfolioItem} projectsRef={projectsRef} /> */}

        {/* Testimonials Section */}
        {/* <TestimonialSection testimonialsItems={testimonialsItems} testimonialsRef={testimonialsRef} /> */}

        {/* Blog Section */}
        {/* <BlogPostsSection blogPosts={blogPosts} blogPostsRef={blogPostsRef} /> */}

        {/* Careers Section */}
        <CareerSection careerPage={careerPage} careerRef={careerRef} />

        {/* Contact Section */}
        <ContactSection contactPage={contactPage} contactRef={contactRef} />
      </main>

      {/* Footer */}
      <footer className="w-full bg-blue-900 text-white py-8 mt-8 shadow-inner animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-4">
          <div className="font-bold text-lg drop-shadow mb-2 md:mb-0 text-center md:text-left w-full md:w-auto">{homePage?.hero?.title || 'My Office'}</div>
          <nav className="w-full md:w-auto flex justify-center md:justify-start">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium">
              <li><button onClick={() => scrollToSection(aboutRef)} className="hover:text-teal-400 transition">About</button></li>
              <li><button onClick={() => scrollToSection(servicesRef)} className="hover:text-teal-400 transition">Services</button></li>
              <li><button onClick={() => scrollToSection(innovationRnDRef)} className="hover:text-teal-400 transition">Innovation/R&D</button></li>
              <li><button onClick={() => scrollToSection(customerDetailsRef)} className="hover:text-teal-400 transition">Customers/Clients</button></li>
              {/* Revisit below commented components when we have some proper data to showcase */}
              {/* <li><button onClick={() => scrollToSection(projectsRef)} className="hover:text-teal-400 transition">Projects</button></li>
              <li><button onClick={() => scrollToSection(testimonialsRef)} className="hover:text-teal-400 transition">Testimonials</button></li>
              <li><button onClick={() => scrollToSection(blogPostsRef)} className="hover:text-teal-400 transition">Blogs</button></li> */}
              <li><button onClick={() => scrollToSection(careerRef)} className="hover:text-teal-400 transition">Careers</button></li>
              <li><button onClick={() => scrollToSection(contactRef)} className="hover:text-teal-400 transition">Contact</button></li>
            </ul>
          </nav>
          <div className="text-xs text-white/80 mt-4 md:mt-0 text-center w-full md:w-auto">&copy; {new Date().getFullYear()} {'SignificMinds'}. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}
