/* eslint-disable react/no-danger */
import React from 'react';
import { useSpring } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

import {
  AboutContainer,
  TextContainer,
  AboutText,
  ImageContainer,
} from './About.css';
import {
  SectionHeading,
  TechList,
  TechListItem,
} from '../../styles/util.css';

import { AboutType } from '../../entity/md/About';

type Props = AboutType;
const About: React.FC<Props> = ({
  title,
  content,
  imagePath,
  technologies,
}) => {
  const [sectionVisible, setSectionVisible] = React.useState(false);

  const entranceSpring = useSpring({
    opacity: sectionVisible ? 1 : 0,
  });

  return (
    <VisibilitySensor
      partialVisibility
      offset={{ bottom: 10 }}
      onChange={(visible) => setSectionVisible(visible)}
    >
      <AboutContainer>
        <ImageContainer style={entranceSpring}>
          <img width="100%" src={`${imagePath}`} alt="Charly Gomez" />
        </ImageContainer>
        <TextContainer style={entranceSpring}>
          <SectionHeading align="left" fontSize={[25, 30, 40]}>
            {title}
          </SectionHeading>
          <AboutText
            fontSize={[15, 18]}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <TechList>
            {
              technologies.map((tec) => <TechListItem key={Math.random()}>{tec}</TechListItem>)
            }
          </TechList>
        </TextContainer>
      </AboutContainer>
    </VisibilitySensor>
  );
};

export default About;
