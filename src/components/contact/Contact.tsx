import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

import {
  Container,
  Greeting,
  IconContainer,
  Icon,
} from './Contact.css';

import { ContactType } from '../../model/md/Contact';
import { Button } from '../button';

const Contact: React.FC<ContactType> = ({
  greeting,
  buttonText,
  mailAdress,
  insta,
  linkedIn,
  github,
}) => (
  <Container>
    <Greeting>{greeting}</Greeting>
    <a href={`mailto:${mailAdress}`}>
      <Button aria-label="Contact">{buttonText}</Button>
    </a>
    <IconContainer>
      <Icon aria-label="Github" target="_blank" rel="noopener noreferrer" href={github}>
        <FaGithub />
      </Icon>
      <Icon aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" href={linkedIn}>
        <FaLinkedin />
      </Icon>
      <Icon aria-label="Instagram" target="_blank" rel="noopener noreferrer" href={insta}>
        <FaInstagram />
      </Icon>
    </IconContainer>
  </Container>
);

export default Contact;
