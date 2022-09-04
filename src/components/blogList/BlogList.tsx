import Link from 'next/link';
import { BlogType } from '../../entity/md/Blog';
import { Box } from '../box';
import { Typography } from '../typography';
import { List, ListItem } from './BlogList.css';

interface Props {
  blogs: BlogType[];
}

// eslint-disable-next-line import/prefer-default-export
export const BlogList = ({ blogs }: Props): JSX.Element => (
  <List>
    {blogs.map((blog) => (
      <ListItem key={blog.id}>
        <Link href={`/blog/${blog.id}`}>
          <Box
            border="2px solid transparent"
            borderLeftColor="primary"
            borderTopColor="primary"
            borderRadius="3px"
            p={3}
          >
            <Typography variant="h4">
              {blog.title}
            </Typography>
            <Typography variant="body">
              {blog.subtitle}
            </Typography>
            <Typography variant="bodySm" color="teaGreen">
              {blog.datePublished}
            </Typography>
            <Typography variant="bodySm" color="teaGreen">
              {` #${blog.tags.join(' #')}`}
            </Typography>
          </Box>
        </Link>
      </ListItem>
    ))}
  </List>
);
