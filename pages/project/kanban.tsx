import { NextPage, GetStaticProps } from 'next';

import { ProjectType } from '../../src/model/md/Project';
import { getSingleProject } from '../../src/lib/mdLoader';
import { FeaturedProject } from '../../src/components';

type Props = {
  projectData: ProjectType;
};

const Kanban: NextPage<Props> = ({ projectData }) => <FeaturedProject {...projectData} />;

export const getStaticProps: GetStaticProps = async () => {
  const projectData = await getSingleProject('5-kanban');
  return {
    props: {
      projectData,
    },
  };
};

export default Kanban;
