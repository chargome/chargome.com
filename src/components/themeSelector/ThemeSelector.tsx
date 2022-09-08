/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { HiOutlineColorSwatch, HiChevronDown } from 'react-icons/hi';
import { themes } from '../../config/themes';
import { useColorTheme } from '../../hooks/useColorTheme';
import { Button } from '../button';
import { ThemePreview } from '../themePreview';

export const ThemeSelector = (): JSX.Element => {
  const { colorTheme, setColorTheme } = useColorTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="fixed top-0 left-0 m-3 z-50">
      <div className={`dropdown dropdown-right ${open && 'dropdown-open'}`}>
        <Button variant="ghost" onClick={() => setOpen(!open)}>
          <HiOutlineColorSwatch className="w-5 h-5" />
          Theme
          <HiChevronDown className="w-5 h-5" />
        </Button>
        {open && (
          <div
            className="dropdown-content flex flex-col gap-1 p-2 bg-transparent w-52"
          >
            {
              themes.map((theme) => (
                <div
                  key={theme.key}
                  tabIndex={0}
                  onKeyPress={(e) => (e.key === 'enter' ? setColorTheme(theme.key) : null)}
                  onClick={() => setColorTheme(theme.key)}
                >
                  <ThemePreview
                    name={theme.key}
                    icon={theme.icon} 
                    primary={theme.primary}
                    bg={theme.base}
                    active={colorTheme === theme.key}
                  />
                </div>
              ))
            }
          </div>
        )}
      </div>
    </div>
  );
};
