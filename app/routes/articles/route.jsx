import { json } from '@remix-run/cloudflare';
import { Outlet, useLoaderData } from '@remix-run/react';
import { MDXProvider } from '@mdx-js/react';
import { Post, postMarkdown } from '~/layouts/post';
import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import { formatTimecode, readingTime } from '~/utils/timecode';

export async function loader({ request }) {
  const slug = new URL(request.url).pathname.split('/').filter(Boolean).at(-1);
  const key = `../articles.${slug}.mdx`;
  
  const modules = import.meta.glob('../articles.*.mdx', { eager: true });
  const rawModules = import.meta.glob('../articles.*.mdx', { query: '?raw', eager: true });

  const module = modules[key];
  const text = rawModules[key];

  if (!module || !text) {
    throw new Response("Not Found", { status: 404 });
  }

  const readTime = readingTime(text.default);
  const ogImage = `${config.url}/static/${slug}-og.jpg`;

  return json({
    ogImage,
    frontmatter: module.frontmatter,
    timecode: formatTimecode(readTime),
  });
}

export function meta({ data }) {
  const { title, abstract } = data.frontmatter;
  return baseMeta({ title, description: abstract, prefix: '', ogImage: data.ogImage });
}

export default function Articles() {
  const { frontmatter, timecode } = useLoaderData();

  return (
    <MDXProvider components={postMarkdown}>
      <Post {...frontmatter} timecode={timecode}>
        <Outlet />
      </Post>
    </MDXProvider>
  );
}
