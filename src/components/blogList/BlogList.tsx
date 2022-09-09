import Link from 'next/link';
import { BlogType } from '../../model/md/Blog';

interface Props {
  blogs: BlogType[];
}

// eslint-disable-next-line import/prefer-default-export
export const BlogList = ({ blogs }: Props): JSX.Element => (
  <ul>
    {blogs.map((blog) => (
      <li key={blog.id}>
        <Link href={`/blog/${blog.id}`}>
          <div
            className="border-2 border-transparent border-l-secondary border-t-secondary p-5 rounded-tl-md cursor-pointer transition hover:-translate-x-2"
          >
            <h4 className="font-mono text-lg text-primary">
              {blog.title}
            </h4>
            <h5 className="font-mono text-md">
              {blog.subtitle}
            </h5>
            <div className="font-mono text-sm">
              {blog.datePublished}
            </div>
            <div className="font-mono text-sm text-accent">
              {` #${blog.tags.join(' #')}`}
            </div>
          </div>
        </Link>
      </li>
    ))}
  </ul>
);
