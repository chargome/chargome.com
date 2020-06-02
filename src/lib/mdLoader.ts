import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

export const getPath = (target: string) => (
  path.join(process.cwd(), `content/${target}`)
);

export const parseMdData = async (fullPath: string, id: string) => {
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const content = processedContent.toString();
  return {
    id,
    content,
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

export const getProjectData = async () => {
  const projectDir = getPath('projects/');
  const projectFiles = fs.readdirSync(projectDir);
  return Promise.all(projectFiles.map(async (id) => {
    const fullPath = path.join(projectDir, id);
    return parseMdData(fullPath, id);
  }));
};

export const getSingleProject = async (id: string) => {
  const fullPath = path.join(getPath('projects/'), `${id}.md`);
  return parseMdData(fullPath, id);
};
