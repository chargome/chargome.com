import { MdContentType } from './MdContent';

export type HeroType = MdContentType & {
  introduction: string;
  firstName: string;
  lastName: string;
};
