import create from 'zustand';
import { ColorThemeEnum } from '../model';

export interface ThemeState {
  theme: ColorThemeEnum;
  setTheme: (theme: ColorThemeEnum) => void;
}

const useThemeState = create<ThemeState>((set) => ({
  theme: ColorThemeEnum.dark,
  setTheme: (theme) => set({ theme }),
}));

export { useThemeState };
