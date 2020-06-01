import { ProjectType } from '../../entity/md/Project';
import {
  CardContainer,
  GifArea,
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
  id, title, gif, subtitle, technologies, link,
}) => (
  <a target="_blank" rel="noopener noreferrer" href={link} key={id}>
    <CardContainer>
      <GifArea
        style={{ backgroundImage: `url(${gif})` }}
      />
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
