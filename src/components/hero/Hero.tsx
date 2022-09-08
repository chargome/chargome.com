import React from 'react';
import { useSpring, useChain, animated } from 'react-spring';

import Particles from '../particles/Particles';

import { HeroType } from '../../model/md/Hero';
import { useColorTheme } from '../../hooks/useColorTheme';
import { ColorThemeEnum } from '../../model';
import useMediaQuery from '../../hooks/useMediaQuery';

export const Hero = ({
  introduction,
  introductionItaliano,
  firstName,
  lastName,
  content,
}: HeroType): JSX.Element => {
  const introRef = React.useRef(null);
  const titleRef = React.useRef(null);
  const bioRef = React.useRef(null);
  const { colorTheme } = useColorTheme();
  const isWidescreen = useMediaQuery('(min-width: 768px)');

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
    <div className="w-full h-screen grid bg-base-100 bg-fixed">
      <div className="grid self-center justify-self-center w-10/12 md:w-4/5 lg:2/3 xl:w-1/2">
        <animated.h2
          style={introSpring}
          className="text-3xl text-secondary"
        >
          {colorTheme === ColorThemeEnum.sardegna ? introductionItaliano : introduction}
        </animated.h2>
        <animated.h1
          style={titleSpring}
          className="text-6xl text-primary font-mono"
        >
          {`${firstName} ${lastName}.`}
        </animated.h1>
        <animated.h3
          style={bioSpring}
          dangerouslySetInnerHTML={{ __html: content }}
          className="text-lg text-accent"
        />
      </div>
      {
        isWidescreen && colorTheme === ColorThemeEnum.dark && <Particles darkParticles={false} />
      }
    </div>
  );
};

export default Hero;
