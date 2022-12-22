import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

import { BlogType } from '../model/md/Blog';

export const getPath = (target: string) => (
  path.join(process.cwd(), `content/${target}`)
);

export const parseMdData = async (fullPath: string, id: string) => {
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .use(prism)
    .process(matterResult.content);
  const content = processedContent.toString();
  return {
    id,
    content,
    ...matterResult.data,
  };
};

export const parseMdMetaData = (fullPath: string, id: string) => {
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  return {
    id,
    ...matterResult.data,
  };
};

export const getData = async (id: string) => {
  const fullPath = path.join(getPath(id), `${id}.md`);
  return parseMdData(fullPath, id);
};

export const getWorkData = async () => {
  const workDir = getPath('experience/work/');
  const workFiles = fs.readdirSync(workDir);

  return Promise.all(workFiles.map((id) => {
    const fullPath = path.join(workDir, id);
    return parseMdData(fullPath, id);
  }));
};

export const getEduData = async () => {
  const eduDir = getPath('experience/education/');
  const eduFiles = fs.readdirSync(eduDir);

  return Promise.all(eduFiles.map(async (id) => {
    const fullPath = path.join(eduDir, id);
    return parseMdData(fullPath, id);
  }));
};

export const getExperienceData = async () => {
  const workData = await getWorkData();
  const eduData = await getEduData();
  return {
    workData,
    eduData,
  };
};

export const getFolderData = async (folderPath: string, metaOnly?: boolean) => {
  const folderDir = getPath(folderPath);
  const folderFiles = fs.readdirSync(folderDir);
  return Promise.all(folderFiles.map(async (id) => {
    const fullPath = path.join(folderDir, id);
    if (metaOnly) {
      return parseMdMetaData(fullPath, id);
    }
    return parseMdData(fullPath, id);
  }));
};

export const getProjectData = () => getFolderData('projects/');

export const getSingleProject = async (id: string) => {
  const fullPath = path.join(getPath('projects/'), `${id}.md`);
  return parseMdData(fullPath, id);
};

export const getBlogData = async () => getFolderData('/blog', true);

export const getBlogPostData = async (id: string): Promise<BlogType> => {
  const fullPath = path.join(getPath('blog/'), `${id}.md`);
  const mdData = await parseMdData(fullPath, id) as BlogType;
  return mdData;
};
