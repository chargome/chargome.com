import React from 'react';
import { useSpring, useTransition, useChain } from 'react-spring';
import { FaOutdent, FaIndent } from 'react-icons/fa';

import {
  IconContainer,
  MenuContainer,
  MenuList,
  MenuListItem,
  MenuAnchor,
} from './Nav.css';
import { sections as menuItems } from '../../../config';

const Nav: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const navRef = React.useRef(null);
  const liRef = React.useRef(null);

  const menuContainerSpring = useSpring({
    ref: navRef,
    width: open ? '100%' : '0%',
    opacity: open ? 0.95 : 0,
  });

  const liTransitions = useTransition(
    open ? menuItems.list : [],
    (item) => item.title,
    {
      ref: liRef,
      trail: 400 / menuItems.list.length,
      from: { opacity: 0, transform: 'translateY(20px)' },
      enter: { opacity: 1, transform: 'translateY(0)' },
      leave: { opacity: 0, transform: 'translateY(20px)' },
    },
  );

  useChain(open ? [navRef, liRef] : [liRef, navRef], [
    0,
    open ? 0.4 : 0.6,
  ]);

  const scrollToSection = (id: string) => {
    setOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView();
    }
  };

  return (
    <>
      <IconContainer
        isOpen={open}
        onClick={() => setOpen((_open) => !_open)}
        // style={iconSpring}
      >
        {open ? <FaIndent /> : <FaOutdent />}
      </IconContainer>
      <MenuContainer style={menuContainerSpring}>
        <MenuList
          textAlign="center"
          fontSize={[20, 30, 40]}
          fontWeight="bold"
        >
          {
            liTransitions.map(({ item, key, props }) => (
              <MenuListItem
                key={key}
                style={props}
                my={[4, 5]}
              >
                <MenuAnchor onClick={() => scrollToSection(item.id)}>
                  {item.title}
                </MenuAnchor>
              </MenuListItem>
            ))
          }
        </MenuList>
      </MenuContainer>
    </>
  );
};

export default Nav;
