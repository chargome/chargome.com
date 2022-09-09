import { BlogType } from '../../model/md/Blog';
import { BlogList } from '../blogList/BlogList';

interface Props {
  data: BlogType[];
}

export const BlogOverview = ({ data }: Props): JSX.Element => (
  <div className="bg-base-100 min-h-screen py-20 px-5 md:px-10">
    <h1 className="text-2xl text-primary">_el Blog</h1>
    <div className="mt-5 p-4">
      <BlogList blogs={data} />
    </div>
  </div>
);
