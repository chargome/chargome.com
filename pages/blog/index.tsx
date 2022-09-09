import { NextPage, GetStaticProps } from 'next';

import { BlogType } from '../../src/model/md/Blog';
import { getBlogData, getData } from '../../src/lib/mdLoader';
import { FooterType } from '../../src/model/md/Footer';
import { BlogOverview } from '../../src/components/blogOverview/BlogOverview';
import { PageLayout } from '../../src/layout';

type BlogsProps = {
  blogData: BlogType[];
  footerData: FooterType;
};

const Blogs: NextPage<BlogsProps> = ({ blogData, footerData }) => (
  <PageLayout footerData={footerData}>
    <BlogOverview data={blogData} />
  </PageLayout>
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
