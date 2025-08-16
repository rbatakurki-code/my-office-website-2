import { client } from '../../lib/sanity'
import { GetStaticProps } from 'next'
import { useRef } from 'react'
import styles from './index.module.css'

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
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const careerRef = useRef<HTMLDivElement | null>(null)
  const servicesRef = useRef<HTMLDivElement | null>(null)
  const blogPostRef = useRef<HTMLDivElement | null>(null)
  const portfolioItemRef = useRef<HTMLDivElement | null>(null)
  const contactPageRef = useRef<HTMLDivElement | null>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>{homePage.hero.title}</h1>
        <p className={styles.heroSubtitle}>{homePage.hero.subtitle}</p>
        <div className={styles.buttonGroup}>
          <button onClick={() => scrollToSection(aboutRef)} className={styles.button}>About</button>
          <button onClick={() => scrollToSection(servicesRef)} className={styles.button}>Services</button>
          <button onClick={() => scrollToSection(careerRef)} className={styles.button}>Careers</button>
          <button onClick={() => scrollToSection(blogPostRef)} className={styles.button}>Blogs</button>
          <button onClick={() => scrollToSection(portfolioItemRef)} className={styles.button}>Portfolio</button>
          <button onClick={() => scrollToSection(contactPageRef)} className={styles.button}>Contact Us</button>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className={styles.section}>
        <h2>{aboutPage.title}</h2>
        <p>{aboutPage.description}</p>
        <h3>Our Core Values</h3>
        <ul>
          {aboutPage.values.map((value: string, index: number) => (
            <li key={index}>✅ {value}</li>
          ))}
        </ul>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className={styles.section}>
        <h2>Our Services</h2>
        {Array.isArray(servicesPage?.services) && servicesPage.services.length > 0 ? (
          servicesPage.services.map((service: any, index: number) => (
            <div key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p><strong>Tech Stack:</strong> {service.techStack}</p>
            </div>
          ))
        ) : (
          <p>No services found.</p>
        )}
      </section>

      {/* Careers Section */}
      <section ref={careerRef} id="careers" className={styles.section}>
        <h2>Careers</h2>
        <p>{careerPage.intro}</p>
        {careerPage.openings.map((job: any, i: number) => (
          <div key={i} className={styles.job}>
            <h3>{job.title}</h3>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <p>{job.description}</p>
          </div>
        ))}
        <p style={{ fontStyle: 'italic' }}>{careerPage.note}</p>
      </section>

      {/* Blog Section */}
      <section ref={blogPostRef} id="blog" className={styles.section}>
        <h2>Latest Blog Posts</h2>
        {blogPosts && blogPosts.length > 0 ? (
          blogPosts.map((post: any, index: number) => (
          <div key={index} className={styles.blogPost}>
            <h3>{post.title}</h3>
            <p><strong>By:</strong> {post.author} | <strong>Date:</strong> {post.date}</p>
            <p>{post.summary}</p>
          </div>
        ))
        ) : (
          <p>No blog posts found.</p>
        )}
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioItemRef} id="portfolio" className={styles.section}>
        <h2>Our Portfolio</h2>
        {portfolioItem && portfolioItem.length > 0 ? (
          portfolioItem.map((item: any, index: number) => (
            <div key={index} className={styles.portfolioItem}>
              <h3>{item.title}</h3>
              <p><strong>Client:</strong> {item.client}</p>
              <p><strong>Completed:</strong> {item.date}</p>
              <p>{item.description}</p>
            </div>
          ))
        ) : (
          <p>No portfolio items found.</p>
        )}
      </section>

      <section ref={contactPageRef} id="contact" className={styles.section}>
        <h2>{contactPage.title}</h2>
        <p>{contactPage.description}</p>

        <div style={{ marginTop: '1rem' }}>
          <p><strong>Address:</strong> {contactPage.address}</p>
          <p><strong>Phone:</strong> {contactPage.phone}</p>
          <p><strong>Email:</strong> <a href={`mailto:${contactPage.email}`}>{contactPage.email}</a></p>
        </div>

        {contactPage.mapEmbed && (
          <div style={{ marginTop: '2rem' }}>
            <iframe
              src={contactPage.mapEmbed}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        )}
      </section>

    </main>
  )
}
