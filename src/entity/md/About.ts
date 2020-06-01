import { MdContentType } from './MdContent';

export type AboutType = MdContentType & {
  title: string;
  imagePath: string;
  technologies: string[];
};
