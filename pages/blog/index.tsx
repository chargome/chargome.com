import { NextPage, GetStaticProps } from 'next';

import {
  Nav,
  Footer,
} from '../../src/components';
import { BlogType } from '../../src/entity/md/Blog';
import { getBlogData, getData } from '../../src/lib/mdLoader';
import { FooterType } from '../../src/entity/md/Footer';
import { BlogOverview } from '../../src/components/blogOverview/BlogOverview';

type BlogsProps = {
  blogData: BlogType[];
  footerData: FooterType;
};

const Blogs: NextPage<BlogsProps> = ({ blogData, footerData }) => (
  <>
    <Nav />
    <BlogOverview data={blogData} />
    <Footer {...footerData} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const footerData = await getData('footer');
  const blogData = await getBlogData();
  return {
    props: {
      footerData,
      blogData,
    },
  };
};

export default Blogs;
