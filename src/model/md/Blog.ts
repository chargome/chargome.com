import { MdContentType } from './MdContent';

export type BlogType = MdContentType & {
  title: string;
  subtitle: string;
  datePublished: string;
  tags: string[];
};
