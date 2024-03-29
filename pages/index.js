// components
import Head from 'next/head';

// widgets
import { LandingSection, ContactSection, SkillsSection, ProjectsSection, AboutSection, FooterSection } from "../widgets";

export default function Home() {
  
  return (
  <div className="home">
    <Head>
      <title>Alexis Marroquin</title>
      <meta name="description" content="Alexis Marroquin's skills, projects, programming knowledge and contact" />
      <meta name="keywords" content="Alexis Marroquin, Developer Gilroy" />
      <link rel="icon" href="/am-icon.svg" />
    </Head>
    
    <LandingSection/>
    <SkillsSection/>
    <ProjectsSection/>
    <AboutSection/>
    <ContactSection/>
    <FooterSection/>

    <style jsx>{`
      .home {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
      }
      
      .divider {
        width: 25%;
        background-color: #eee;
        padding: .2rem;
      }

    `}</style>
  </div>
  )
}
