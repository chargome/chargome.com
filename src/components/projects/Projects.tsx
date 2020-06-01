import React from 'react';

import {
  Container,
  ProjectContainer,
} from './Projects.css';
import {
  SectionHeading,
} from '../../styles/util.css';
import { ProjectType } from '../../entity/md/Project';
import ProjectCard from './ProjectCard';


type Props = {
  projects: ProjectType[];
};
const Projects: React.FC<Props> = ({ projects }) => {
  const [visible, setVisible] = React.useState(false);
  console.log('props: ', projects);

  return (
    <Container>
      <SectionHeading align="left" mx={[20, 50, 100]} fontSize={[25, 30, 40]}>
        some projects
      </SectionHeading>
      <ProjectContainer>
        {
          projects.map(ProjectCard)
        }
      </ProjectContainer>
    </Container>
  );
};

export default Projects;
