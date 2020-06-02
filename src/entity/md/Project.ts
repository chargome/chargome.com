import { MdContentType } from './MdContent';

export type ProjectType = MdContentType & {
  title: string;
  subtitle: string;
  technologies: string[];
  webm: string;
  mp4: string;
  featured?: boolean;
  link: string;
};
