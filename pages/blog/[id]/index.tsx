import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

import {
  Nav,
  Footer,
} from '../../../src/components';
import { BlogPost } from '../../../src/components/blogPost/BlogPost';
import { BlogType } from '../../../src/entity/md/Blog';
import { FooterType } from '../../../src/entity/md/Footer';
import { getBlogData, getBlogPostData, getData } from '../../../src/lib/mdLoader';

type BlogsPostProps = {
  footerData: FooterType;
  blogPostData: BlogType;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

const Blogs: NextPage<BlogsPostProps> = ({ footerData, blogPostData }) => (
  <>
    <Nav />
    <BlogPost data={blogPostData} />
    <Footer {...footerData} />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getBlogData();
  const paths = data.map((blog) => ({ params: { id: blog.id } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as Params;
  const blogPostData = await getBlogPostData(id);
  const footerData = await getData('footer');
  return {
    props: {
      blogPostData,
      footerData,
    },
  };
};

export default Blogs;
