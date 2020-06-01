import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

import {
  Container,
  Greeting,
  ContactButton,
  IconContainer,
  Icon,
} from './Contact.css';

import { ContactType } from '../../entity/md/Contact';

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
    <ContactButton href={`mailto:${mailAdress}`}>{buttonText}</ContactButton>
    <IconContainer>
      <Icon target="_blank" rel="noopener noreferrer" href={insta}>
        <FaInstagram />
      </Icon>
      <Icon target="_blank" rel="noopener noreferrer" href={github}>
        <FaGithub />
      </Icon>
      <Icon target="_blank" rel="noopener noreferrer" href={linkedIn}>
        <FaLinkedin />
      </Icon>
    </IconContainer>
  </Container>
);

export default Contact;
