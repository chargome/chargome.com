import React from 'react';
import Router from 'next/router';
import { useSpring, useChain, animated } from 'react-spring';

import { ProjectType } from '../../entity/md/Project';
import {
  Container,
  VideoArea,
  Heading,
  SubHeading,
  Content,
  BackButton,
} from './FeaturedProject.css';

const FeaturedProject: React.FC<ProjectType> = ({
  title,
  subtitle,
  gif,
  content,
}) => {
  const arrowRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const subTitleRef = React.useRef(null);
  const contentRef = React.useRef(null);

  const springStyle = {
    from: {
      opacity: 0,
      transform: 'translateY(200px)',
    },
    opacity: 1,
    transform: 'translateY(0px)',
  };

  const arrowSpring = useSpring({
    ref: arrowRef,
    from: {
      opacity: 0,
    },
    opacity: 1,
  });

  const titleSpring = useSpring({
    ref: titleRef,
    ...springStyle,
  });

  const subTitleSpring = useSpring({
    ref: subTitleRef,
    ...springStyle,
  });

  const contentSpring = useSpring({
    ref: contentRef,
    ...springStyle,
  });

  useChain(
    [
      arrowRef,
      titleRef,
      subTitleRef,
      contentRef,
    ],
    [0.2, 0.5, 0.7, 0.9],
  );

  return (
    <Container>
      <div>
        <BackButton onClick={() => Router.back()} style={arrowSpring} />
        <Heading style={titleSpring}>{title}</Heading>
        <SubHeading style={subTitleSpring}>{subtitle}</SubHeading>
        <animated.div style={contentSpring}>
          <Content
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <VideoArea src={gif} />
        </animated.div>
      </div>
    </Container>
  );
};

export default FeaturedProject;
