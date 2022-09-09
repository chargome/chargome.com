import { NextPage, GetStaticProps } from 'next';

import {
  Hero,
  About,
  Experience,
  Projects,
  Contact,
} from '../src/components';
import { HeroType } from '../src/model/md/Hero';
import { AboutType } from '../src/model/md/About';
import { ExperienceType } from '../src/model/md/Experience';
import { ProjectType } from '../src/model/md/Project';
import { ContactType } from '../src/model/md/Contact';
import * as sections from '../src/config';
import { getData, getExperienceData, getProjectData } from '../src/lib/mdLoader';
import { FooterType } from '../src/model/md/Footer';
import { PageLayout } from '../src/layout';

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
  <PageLayout footerData={footerData}>
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
  </PageLayout>
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
