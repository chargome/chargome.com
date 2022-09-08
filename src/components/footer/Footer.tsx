import {
  Container,
  ContactArea,
} from './Footer.css';
import { FooterType } from '../../model/md/Footer';

const Footer: React.FC<FooterType> = ({ content }) => (
  <Container>
    <ContactArea
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </Container>
);

export default Footer;
