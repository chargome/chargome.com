import Link from 'next/link';
import { BlogType } from '../../model/md/Blog';

interface Props {
  data: BlogType;
}

export const BlogPost = ({ data }: Props): JSX.Element => (
  <div className="bg-base-100 p-5 pt-20">
    <article
      className="prose lg:prose-lg mx-auto"
    >
      <Link href="/blog">
        <div className="text-sm my-10 cursor-pointer">
          ⬅ all posts
        </div>
      </Link>
      <h1 className="text-primary font-mono">{data.title}</h1>
      <h4 className="text-secondary font-mono">{data.subtitle}</h4>
      <div className="text-accent font-mono text-sm">{data.tags.map((tag) => `#${tag} `)}</div>
      <div className="text-accent font-mono text-lg">{data.datePublished}</div>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
      <div className="mt-10">
        <Link href="/blog">
          Back to blog overview
        </Link>
      </div>
    </article>
  </div>
);
