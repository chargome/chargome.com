import Link from 'next/link';
import { BlogType } from '../../entity/md/Blog';
import { Box } from '../box';
import { Typography } from '../typography';
import css from './BlogPost.module.css';

interface Props {
  data: BlogType;
}

export const BlogPost = ({ data }: Props): JSX.Element => (
  <Box backgroundColor="primary">
    <Box p={3}>
      <Typography variant="h5">
        <Link href="/blog">
          ⬅ all posts
        </Link>
      </Typography>

    </Box>
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      py={5}
      px={2}
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
        <Box mt={5}>
          <Typography variant="h5">
            <Link href="/blog">
              Back to blog overview
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);
