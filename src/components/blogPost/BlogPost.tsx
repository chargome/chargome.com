import { BlogType } from '../../entity/md/Blog';
import { Box } from '../box';
import { Typography } from '../typography';
import css from './BlogPost.module.css';

interface Props {
  data: BlogType;
}

export const BlogPost = ({ data }: Props): JSX.Element => (
  <Box
    minHeight="100vh"
    display="flex"
    flexDirection="column"
    py={5}
    px={2}
    backgroundColor="primary"
  >
    <Typography color="teaGreen" variant="h1" align="center">{data.title}</Typography>
    <Typography color="teaGreen" variant="h4" align="center">{data.subtitle}</Typography>
    <Typography color="secondary" variant="bodySm" align="center">{data.tags.map((tag) => `#${tag} `)}</Typography>
    <Box px={[2, 6]} mt={5}>
      <Typography color="secondary" variant="body">{data.datePublished}</Typography>
      <Box
        dangerouslySetInnerHTML={{ __html: data.content }}
        color="greyLight"
        className={css.content}
      />
    </Box>
  </Box>
);
