import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

import { ContactType } from '../../model/md/Contact';
import { Button } from '../button';

const Contact = ({
  greeting,
  buttonText,
  mailAdress,
  insta,
  linkedIn,
  github,
}: ContactType): JSX.Element => (
  <div className="min-h-screen flex gap-20 flex-col items-center justify-center bg-secondary">
    <h2 className="text-3xl font-mono">{greeting}</h2>
    <a href={`mailto:${mailAdress}`}>
      <Button aria-label="Contact">{buttonText}</Button>
    </a>
    <div className="flex gap-10 justify-self-end">
      <a aria-label="Github" target="_blank" rel="noopener noreferrer" href={github}>
        <FaGithub className="h-8 w-8 text-accent hover:text-primary" />
      </a>
      <a aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" href={linkedIn}>
        <FaLinkedin className="h-8 w-8 text-accent hover:text-primary" />
      </a>
      <a aria-label="Instagram" target="_blank" rel="noopener noreferrer" href={insta}>
        <FaInstagram className="h-8 w-8 text-accent hover:text-primary" />
      </a>
    </div>
  </div>
);

export default Contact;
