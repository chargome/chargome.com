import { MdContentType } from './MdContent';

export type ProjectType = MdContentType & {
  title: string;
  subtitle: string;
  technologies: string[];
  gif: string;
  featured?: boolean;
  link: string;
};
