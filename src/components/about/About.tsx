/* eslint-disable react/no-danger */
import React from 'react';
import { useSpring } from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';

import { SectionHeading } from '../sectionHeading';

import { AboutType } from '../../model/md/About';
import { Button } from '../button';

export const About = ({
  title,
  content,
  jpg,
  technologies,
  email,
}: AboutType): JSX.Element => {
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
      <div
        className="bg-base-100 min-h-screen flex flex-col md:flex-row items-center justify-center"
      >
        <div
          style={entranceSpring}
        >
          <img
            src={jpg}
            alt="gomez"
            width="100%"
            className="w-80 rounded-sm transition shadow-lg grayscale hover:grayscale-0"
          />
        </div>
        <div
          style={entranceSpring}
          className="px-4 flex flex-col gap-2"
        >
          <SectionHeading align="left">
            {title}
          </SectionHeading>
          <div className="pl-5">
            <div
              className="text-md text-accent"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <ul className="no-underline pl-5 text-accent mb-5">
              {
                technologies.map((tec) => (
                  <li className="font-mono" key={tec}>{`> ${tec}`}</li>
                ))
              }
            </ul>
            <a href={`mailto:${email}`}>
              <Button
                aria-label="Contact"
              >
                say hi
              </Button>
            </a>
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
};
