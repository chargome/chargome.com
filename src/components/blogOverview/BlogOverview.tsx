import { BlogType } from '../../entity/md/Blog';
import { BlogList } from '../blogList/BlogList';
import { Box } from '../box/Box.css';
import { Typography } from '../typography';

interface Props {
  data: BlogType[];
}

export const BlogOverview = ({ data }: Props): JSX.Element => (
  <Box bg="secondary" minHeight="100vh" py={5} px={[2, 5]}>
    <Typography variant="h1">_el Blog</Typography>
    <Box p={2} mt={4}>
      <BlogList blogs={data} />
    </Box>
  </Box>
);
