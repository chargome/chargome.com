import { MdContentType } from './MdContent';

export type HeroType = MdContentType & {
  introduction: string;
  introductionItaliano: string;
  firstName: string;
  lastName: string;
};
