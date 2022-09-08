import { MdContentType } from './MdContent';

export type ContactType = MdContentType & {
  greeting: string;
  buttonText: string;
  mailAdress: string;
  insta: string;
  github: string;
  linkedIn: string;
};
