import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

import {
  Container,
} from './Experience.css';
import { ExperienceType } from '../../entity/md/Experience';
import VerticalTabs, { ElementType } from '../verticalTabView/VerticalTabView';
import { SectionHeading } from '../../styles/util.css';


type Props = ExperienceType;
const Experience: React.FC<Props> = ({ workData, eduData }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const entranceSpring = useSpring({
    opacity: isVisible ? 1 : 0,
    config: config.gentle,
  });

  const workElements: ElementType[] = workData.map((work) => ({
    id: work.id,
    title: work.company,
    heading: work.position,
    subHeading: work.company,
    dateRange: work.range,
    html: work.content,
    link: work.link,
  }));
  const eduElements: ElementType[] = eduData.map((edu) => ({
    id: edu.id,
    title: edu.shortTitle,
    heading: edu.study,
    subHeading: edu.institution,
    dateRange: edu.range,
    html: edu.content,
    link: edu.link,
  }));

  return (
    <VisibilitySensor
      partialVisibility
      offset={{ bottom: 10 }}
      onChange={(visible) => setIsVisible(visible)}
    >
      <Container>
        <animated.div style={entranceSpring}>
          <SectionHeading align="left" mx={[20, 50, 100]} mt={[10]} fontSize={[25, 30, 40]}>
            work experience
          </SectionHeading>
          <VerticalTabs elements={workElements} />
          <SectionHeading align="right" mx={[20, 50, 100]} mt={[200]} fontSize={[25, 30, 40]}>
            academic experience
          </SectionHeading>
          <VerticalTabs elements={eduElements} />
        </animated.div>
      </Container>
    </VisibilitySensor>
  );
};

export default Experience;
