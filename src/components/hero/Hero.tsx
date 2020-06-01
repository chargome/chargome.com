import React from 'react';
import { useSpring, useChain } from 'react-spring';

import {
  HeroContainer,
  TextContainer,
  Title,
  SmallHeader,
  AboutText,
} from './Hero.css';
import Particles from '../particles/Particles';

import { HeroType } from '../../entity/md/Hero';

type Props = HeroType;
const Hero: React.FC<Props> = ({
  introduction,
  firstName,
  lastName,
  content,
}) => {
  const introRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const bioRef = React.useRef(null);

  const introSpring = useSpring({
    ref: introRef,
    from: {
      opacity: 0,
      transform: 'translateY(200px)',
    },
    opacity: 1,
    transform: 'translateY(0px)',
  });

  const titleSpring = useSpring({
    ref: titleRef,
    from: {
      opacity: 0,
      transform: 'translateY(200px)',
    },
    opacity: 1,
    transform: 'translateY(0px)',
  });

  const bioSpring = useSpring({
    ref: bioRef,
    from: {
      opacity: 0,
      transform: 'translateY(200px)',
    },
    opacity: 1,
    transform: 'translateY(0px)',
  });

  useChain([introRef, titleRef, bioRef], [0.5, 0.9, 1.3]);

  return (
    <HeroContainer>
      <TextContainer
        width={[7 / 8, 4 / 5, 2 / 3, 1 / 2]}
      >
        <SmallHeader
          style={introSpring}
          fontSize={[20, 25, 30]}
        >
          {introduction}
        </SmallHeader>
        <Title
          style={titleSpring}
          fontSize={[40, 50, 70]}
        >
          {`${firstName} ${lastName}.`}
        </Title>
        <AboutText
          fontSize={[15, 18]}
          style={bioSpring}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </TextContainer>
      <Particles />
    </HeroContainer>
  );
};

export default Hero;
