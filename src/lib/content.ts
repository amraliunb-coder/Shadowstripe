import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentPath = path.join(process.cwd(), 'src/content.json');
const articlesDirectory = path.join(process.cwd(), 'src/content/articles');

export function getGlobalContent() {
  const fileContents = fs.readFileSync(contentPath, 'utf8');
  return JSON.parse(fileContents);
}

export function getSortedArticlesData() {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames.filter(name => name.endsWith('.md')).map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title as string,
      date: matterResult.data.date as string,
      category: matterResult.data.category as string,
      excerpt: matterResult.data.excerpt as string,
      ...(matterResult.data as { [key: string]: any }),
    };
  });

  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getArticleData(id: string) {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title as string,
    date: matterResult.data.date as string,
    category: matterResult.data.category as string,
    ...(matterResult.data as { [key: string]: any }),
  };
}
