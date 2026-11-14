import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Code2, Github,
  Linkedin, Mail, Menu, X, GraduationCap, Sparkles, Terminal,
  Bot, Database, Cpu, Trophy, MapPin
} from 'lucide-react'

const github = 'https://github.com/AbdullahMughalWorld'
const linkedin = 'https://www.linkedin.com/in/abdullah-mughal/'
const projects = [
  {
    number: '01',
    title: 'Seniors AI',
    type: 'AI CHATBOT · COMPETITION PROJECT',
    description: 'An AI-powered chatbot experience created for the AI Baithak event, designed to make conversational assistance accessible and useful.',
    tags: ['AI Chatbot', 'React', 'Generative AI'],
    link: 'https://abdullahmughalworld.github.io/Seniors-AI/',
    icon: Bot,
  },
  {
    number: '02',
    title: 'AI Portfolio',
    type: 'PERSONAL BRAND · WEB DEVELOPMENT',
    description: 'A personal portfolio to present my learning journey, technical interests, experiments, and projects in artificial intelligence.',
    tags: ['React', 'TypeScript', 'Vite'],
    link: 'https://abdullahmughalworld.github.io/abdullah-ai-portfolio/',
    icon: Code2,
  },
  {
    number: '03',
    title: 'AI Baithak Chatbot',
    type: 'ACHIEVEMENT · UNIVERSITY EVENT',
    description: 'Built and presented a chatbot project at the Zakariyan Google Developer Club AI Baithak event, securing third position.',
    tags: ['Problem Solving', 'Chatbot', 'Presentation'],
    link: 'https://github.com/AbdullahMughalWorld',
    icon: Trophy,
  },
]
const skillGroups = [
  { title: 'Programming', icon: Terminal, items: ['Python', 'C++', 'C', 'JavaScript', 'TypeScript'] },
  { title: 'AI & Data', icon: BrainCircuit, items: ['AI Fundamentals', 'Machine Learning — Learning', 'Deep Learning — Learning', 'Data Analysis', 'Prompt Engineering'] },
  { title: 'Development', icon: Code2, items: ['React', 'HTML & CSS', 'Vite', 'Tailwind CSS', 'Git & GitHub'] },
  { title: 'Core Concepts', icon: Database, items: ['OOP', 'Data Structures', 'Algorithms', 'Database Fundamentals', 'Linear Algebra'] },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const navItems = ['About', 'Skills', 'Projects', 'Journey', 'Contact']

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">AM</span><span>ABDULLAH<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR LEARNING & COLLABORATION</div>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>Abdullah<br /><span>Mughal.</span></h1>
            <h2>Artificial Intelligence Student <span className="slash">/</span> Aspiring AI Engineer</h2>
            <p className="hero-description">I’m exploring the world of artificial intelligence and building practical digital solutions through code, creativity, and continuous learning.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Get in touch <ArrowRight size={17} /></a>
            </div>
            <div className="hero-socials">
              <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <span className="social-line" />
              <span>Multan, Pakistan</span>
            </div>
          </motion.div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="visual-card">
              <div className="visual-top"><span>AI / DEVELOPER</span><span className="live-indicator">● EXPLORING</span></div>
              <div className="monogram">A<span>M</span></div>
              <div className="visual-bottom"><span>BUILDING THE<br />INTELLIGENT FUTURE</span><BrainCircuit size={35} /></div>
            </div>
            <div className="floating-chip chip-one"><Cpu size={16} /> Artificial Intelligence</div>
            <div className="floating-chip chip-two"><Code2 size={16} /> Code · Create · Learn</div>
            <div className="visual-index">01 <span>—</span> 05</div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-heading"><span className="section-number">01 / ABOUT</span><h2>Curiosity into<br /><span>capability.</span></h2></div>
          <div className="about-content">
            <p className="lead">I’m a BS Artificial Intelligence student at <strong>Bahauddin Zakariya University</strong>, Multan, focused on understanding how intelligent systems work and how they can solve real-world problems.</p>
            <p>My journey combines programming fundamentals, software development, and hands-on exploration of AI. I enjoy turning ideas into working projects, learning new technologies, and collaborating with people who love building useful things.</p>
            <div className="about-facts">
              <div><GraduationCap /><span><strong>BS Artificial Intelligence</strong><small>3rd Semester · BZU Multan</small></span></div>
              <div><MapPin /><span><strong>Based in Pakistan</strong><small>Multan, Punjab</small></span></div>
              <div><Sparkles /><span><strong>Long-term direction</strong><small>AI Engineering & Entrepreneurship</small></span></div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading"><span className="section-number">02 / TOOLKIT</span><h2>Skills I'm<br /><span>building with.</span></h2><p className="heading-note">A growing toolkit shaped by coursework, practice, and projects. I keep learning and improving every day.</p></div>
            <div className="skills-grid">
              {skillGroups.map((group, i) => {
                const Icon = group.icon
                return <motion.article className="skill-card" key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>
                  <div className="skill-card-head"><Icon /><span>0{i + 1}</span></div>
                  <h3>{group.title}</h3>
                  <div className="tag-list">{group.items.map(item => <span key={item}>{item}</span>)}</div>
                </motion.article>
              })}
            </div>
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="section-heading project-heading"><span className="section-number">03 / SELECTED WORK</span><h2>Ideas made<br /><span>tangible.</span></h2><p className="heading-note">A selection of projects and experiences that reflect my interest in building with technology.</p></div>
          <div className="project-list">
            {projects.map((project, i) => {
              const Icon = project.icon
              return <motion.article className="project-row" key={project.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="project-number">{project.number}</span>
                <div className="project-icon"><Icon /></div>
                <div className="project-info"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}><ArrowUpRight /></a>
              </motion.article>
            })}
          </div>
          <a className="text-link" href={github} target="_blank" rel="noreferrer">Explore GitHub for more <ArrowUpRight size={16} /></a>
        </section>

        <section className="journey-section" id="journey">
          <div className="section-wrap journey-inner">
            <div className="section-heading"><span className="section-number">04 / THE JOURNEY</span><h2>Learning by<br /><span>doing.</span></h2></div>
            <div className="timeline">
              <div className="timeline-item"><span className="timeline-dot" /><span className="timeline-label">CURRENT</span><h3>BS Artificial Intelligence</h3><p>Bahauddin Zakariya University · Multan</p><small>Third semester — strengthening foundations in computing, mathematics, and AI.</small></div>
              <div className="timeline-item"><span className="timeline-dot" /><span className="timeline-label">MILESTONE</span><h3>3rd Position — AI Baithak</h3><p>Zakariyan Google Developer Club</p><small>Presented an AI chatbot project and secured third position in the event competition.</small></div>
              <div className="timeline-item"><span className="timeline-dot" /><span className="timeline-label">ONGOING</span><h3>Building & Exploring</h3><p>Personal projects and continuous practice</p><small>Exploring machine learning, modern web technologies, and practical AI applications.</small></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <span className="section-number">05 / CONTACT</span>
          <div className="contact-content"><p className="hero-kicker">HAVE AN IDEA?</p><h2>Let's build<br /><span>something useful.</span></h2><p>I'm interested in connecting with fellow students, developers, mentors, and teams working on meaningful technology.</p><a className="button button-primary" href="mailto:YOUR_EMAIL@example.com">Send me an email <Mail size={17} /></a><small className="email-note">Replace YOUR_EMAIL@example.com in App.tsx with your real email address.</small></div>
          <div className="contact-side"><span>FIND ME ONLINE</span><a href={github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a><span className="contact-location"><MapPin size={15} /> Multan, Pakistan</span></div>
        </section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">AM</span><span>ABDULLAH<span className="brand-dot">.</span></span></a><span>Designed & built with curiosity.</span><span>© {new Date().getFullYear()} Abdullah Mughal</span><a className="back-top" href="#home">BACK TO TOP ↑</a></footer>
    </div>
  )
}

export default App