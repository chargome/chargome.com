import React from 'react';
import { useSpring, useTransition, useChain, animated } from 'react-spring';
import { FaOutdent, FaIndent } from 'react-icons/fa';
import { useRouter } from 'next/router';

import {
  IconContainer,
  MenuContainer,
  MenuList,
  MenuListItem,
  MenuAnchor,
} from './Nav.css';
import { menuItems } from '../../config';

const Nav: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const navRef = React.useRef(null);
  const liRef = React.useRef(null);

  const menuContainerSpring = useSpring({
    ref: navRef,
    width: open ? '100%' : '0%',
    opacity: open ? 0.95 : 0,
  });

  const liTransitions = useTransition(
    open ? menuItems : [],
    (item) => item.title,
    {
      ref: liRef,
      trail: 400 / menuItems.length,
      from: { opacity: 0, transform: 'translateY(20px)' },
      enter: { opacity: 1, transform: 'translateY(0)' },
      leave: { opacity: 0, transform: 'translateY(20px)' },
    },
  );

  useChain(open ? [navRef, liRef] : [liRef, navRef], [
    0,
    open ? 0.4 : 0.6,
  ]);

  const navigate = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  return (
    <>
      <div
        className="fixed top-5 right-5 z-30 transition cursor-pointer text-primary"
        onClick={() => setOpen((_open) => !_open)}
        onKeyPress={(e) => (e.key === 'enter' ? setOpen((_open) => !_open) : null)}
        tabIndex={0}
        role="button"
        // style={iconSpring}
      >
        {
          open
            ? <FaIndent className="w-7 h-7" />
            : <FaOutdent className="w-7 h-7" />
        }
      </div>
      <animated.div
        style={menuContainerSpring}
        className="fixed top-0 right-0 bottom-0 min-h-screen bg-secondary z-10 overflow-scroll"
      >
        <ul
          className="list-none text-center text-3xl font-bold"
        >
          {
            liTransitions.map(({ item, key, props }) => (
              <animated.li
                className="my-14"
                key={key}
                style={props}
              >
                <div
                  className="w-40 mx-auto no-underline flex justify-center p-1 border-y-2 border-transparent transition-all text-primary cursor-pointer hover:text-accent hover:border-accent"
                  onClick={() => navigate(item.path)}
                  onKeyPress={(e) => (e.key === 'enter' ? navigate(item.path) : null)}
                  tabIndex={0}
                  role="button"
                >
                  {item.title}
                </div>
              </animated.li>
            ))
          }
        </ul>
      </animated.div>
    </>
  );
};

export default Nav;
