import { MdContentType } from './MdContent';

type WorkType = MdContentType & {
  company: string;
  position: string;
  range: string;
  link: string;
};

type EducationType = MdContentType & {
  study: string;
  title: string;
  shortTitle: string;
  institution: string;
  range: string;
  link: string;
};

export type ExperienceType = {
  workData: WorkType[];
  eduData: EducationType[];
};
