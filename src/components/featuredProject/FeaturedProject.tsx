import React from 'react';
import Router from 'next/router';
import { useSpring, useChain, animated } from 'react-spring';

import { FaArrowLeft } from 'react-icons/fa';
import { ProjectType } from '../../model/md/Project';

const FeaturedProject = ({
  title,
  subtitle,
  gif,
  content,
}: ProjectType): JSX.Element => {
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
    <div
      className="min-h-screen bg-base-100 flex justify-center px-10 md:px-20"
    >
      <animated.div
        className="absolute top-8 left-8 text-secondary cursor-pointer hover:text-secondary-focus"
        onClick={() => Router.back()}
        style={arrowSpring}
      >
        <FaArrowLeft className="w-7 h-7" />
      </animated.div>
      <div className="pt-20 px-5 lg:px-20 flex flex-col gap-4">
        <animated.div className="text-3xl font-mono text-primary" style={titleSpring}>{title}</animated.div>
        <animated.div className="text-xl font-mono text-accent" style={subTitleSpring}>{subtitle}</animated.div>
        <animated.div ref={contentRef} style={contentSpring}>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <img className="mt-10" alt={title} src={gif} />
        </animated.div>
      </div>
    </div>
  );
};

export default FeaturedProject;
