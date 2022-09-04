import { NextPage, GetStaticProps } from 'next';

import {
  Nav,
  Footer,
  Hero,
  About,
  Experience,
  Projects,
  Contact,
} from '../src/components';
import { HeroType } from '../src/entity/md/Hero';
import { AboutType } from '../src/entity/md/About';
import { ExperienceType } from '../src/entity/md/Experience';
import { ProjectType } from '../src/entity/md/Project';
import { ContactType } from '../src/entity/md/Contact';
import * as sections from '../src/config';
import { getData, getExperienceData, getProjectData } from '../src/lib/mdLoader';
import { FooterType } from '../src/entity/md/Footer';

type HomeProps = {
  heroData: HeroType;
  aboutData: AboutType;
  experienceData: ExperienceType;
  projectData: ProjectType[];
  contactData: ContactType;
  footerData: FooterType;
};

const Home: NextPage<HomeProps> = ({
  heroData,
  aboutData,
  experienceData,
  projectData,
  contactData,
  footerData,
}) => (
  <>
    <Nav />
    <section id={sections.HERO}>
      <Hero {...heroData} />
    </section>
    <section id={sections.ABOUT}>
      <About {...aboutData} />
    </section>
    <section id={sections.EXPERIENCE}>
      <Experience {...experienceData} />
    </section>
    <section id={sections.PROJECTS}>
      <Projects projects={projectData} />
    </section>
    <section id={sections.CONTACT}>
      <Contact {...contactData} />
    </section>
    <Footer {...footerData} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const heroData = await getData(sections.HERO);
  const aboutData = await getData(sections.ABOUT);
  const contactData = await getData(sections.CONTACT);
  const footerData = await getData('footer');
  const experienceData = await getExperienceData();
  const projectData = await getProjectData();
  return {
    props: {
      heroData,
      aboutData,
      contactData,
      experienceData,
      projectData,
      footerData,
    },
  };
};

export default Home;
