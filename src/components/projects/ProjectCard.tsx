import { ProjectType } from '../../model/md/Project';
import {
  CardContainer,
  VideoArea,
  TextArea,
  Title,
  Subtitle,
} from './ProjectCard.css';
import {
  TechList,
  TechListItem,
} from '../../styles/util.css';

type Props = ProjectType;
const ProjectCard: React.FC<Props> = ({
  id, title, gif, png, subtitle, technologies, link, featured,
}) => (
  <a
    aria-label={title}
    target={featured ? undefined : '_blank'}
    rel={featured ? undefined : 'noopener noreferrer'}
    href={link}
    key={id}
  >
    <CardContainer>
      <VideoArea src={gif !== '' ? gif : png} />
      <TextArea>
        <Title>
          {title}
        </Title>
        <Subtitle>
          {`[${subtitle}]`}
        </Subtitle>
        <TechList>
          {
            technologies.map((item) => (
              <TechListItem primary key={item}>
                {item}
              </TechListItem>
            ))
          }
        </TechList>
      </TextArea>
    </CardContainer>
  </a>
);

export default ProjectCard;
