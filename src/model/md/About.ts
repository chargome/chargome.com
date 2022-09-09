import { MdContentType } from './MdContent';

export type AboutType = MdContentType & {
  title: string;
  jpg: string;
  webp: string;
  technologies: string[];
  email: string;
};
