import Link from 'next/link';
import { BlogType } from '../../model/md/Blog';
import { Box } from '../box';
import { Typography } from '../typography';
// import css from './BlogPost.module.css';

interface Props {
  data: BlogType;
}

export const BlogPost = ({ data }: Props): JSX.Element => (
  <Box backgroundColor="primary" p={3}>
    <Box p={3}>
      <Typography variant="h5">
        <Link href="/blog">
          ⬅ all posts
        </Link>
      </Typography>
    </Box>
    <article
      className="prose lg:prose-lg mx-auto"
    >
      <h1>{data.title}</h1>
      <h4>{data.subtitle}</h4>
      <span className="text-sm">{data.tags.map((tag) => `#${tag} `)}</span>
      <span className="text-lg">{data.datePublished}</span>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
      <Box mt={5}>
        <Typography variant="h5">
          <Link href="/blog">
            Back to blog overview
          </Link>
        </Typography>
      </Box>
    </article>
  </Box>
);
