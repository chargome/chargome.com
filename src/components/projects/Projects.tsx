import React from 'react';

import { ProjectType } from '../../model/md/Project';
import { SectionHeading } from '../sectionHeading';
import { ProjectCard } from './ProjectCard';

interface Props {
  projects: ProjectType[];
}

const Projects = ({ projects }: Props): JSX.Element => (
  <div className="min-h-screen bg-base-100 mx-6 md:mx-10 lg:mx-20 xl:mx-40">
    <SectionHeading align="left">
      some of my projects
    </SectionHeading>
    <div className="flex flex-col gap-6 items-center my-10">
      {
        projects.map(ProjectCard)
      }
    </div>
  </div>
);

export default Projects;
