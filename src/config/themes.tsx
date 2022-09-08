import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { TbSailboat } from 'react-icons/tb';
import { ColorThemeEnum } from '../model';

export const themes = [
  {
    key: ColorThemeEnum.light,
    primary: '#cfe0c3',
    secondary: '#40798c',
    accent: '#70a9a1',
    base: '#ffffff',
    icon: <HiOutlineSun className="w-5 h-5" />,
  },
  {
    key: ColorThemeEnum.dark,
    primary: '#cfe0c3',
    secondary: '#40798c',
    accent: '#70a9a1',
    base: '#00272b',
    icon: <HiOutlineMoon className="w-5 h-5" />,
  },
  {
    key: ColorThemeEnum.sardegna,
    primary: '#f7c407',
    secondary: '#ea7070',
    accent: '#9ee2c7',
    base: '#25a9b2', // '#578897',
    icon: <TbSailboat className="w-5 h-5" />,
  },
];
