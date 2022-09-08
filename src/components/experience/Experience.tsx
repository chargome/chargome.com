import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

import { ExperienceType } from '../../model/md/Experience';
import VerticalTabs, { ElementType } from '../verticalTabView/VerticalTabView';
import { SectionHeading } from '../sectionHeading';

export const Experience = ({ workData, eduData }: ExperienceType): JSX.Element => {
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
      <div className="min-h-screen bg-base-100 mx-4 md:mx-10 lg:mx-20 xl:mx-40">
        <animated.div style={entranceSpring}>
          <div className="min-h-screen">
            <SectionHeading align="left">
              work experience
            </SectionHeading>
            <div className="p-10">
              <VerticalTabs elements={workElements} />
            </div>
          </div>
          <div className="min-h-screen flex flex-col items-end">
            <SectionHeading align="right">
              academic experience
            </SectionHeading>
            <div className="p-10">
              <VerticalTabs elements={eduElements} />
            </div>
          </div>
        </animated.div>
      </div>
    </VisibilitySensor>
  );
};
