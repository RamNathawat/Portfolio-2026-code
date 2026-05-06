import config from '~/config.json';

const { name, url, twitter } = config;
const defaultOgImage = `${url}/avatar.png`;

export function baseMeta({
  title,
  description,
  prefix = name,
  ogImage = defaultOgImage,
}) {
  const titleText = [prefix, title].filter(Boolean).join(' | ');

  return [
    { title: titleText },
    { name: 'description', content: description },
    { name: 'author', content: name },

    // Open Graph
    { property: 'og:title', content: titleText },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: name },
    { property: 'og:url', content: url },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:alt', content: 'Portfolio preview image' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },

    // Twitter / X
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: titleText },
    { name: 'twitter:description', content: description },
    { name: 'twitter:site', content: `@${twitter}` },
    { name: 'twitter:creator', content: `@${twitter}` },
    { name: 'twitter:image', content: ogImage },
  ];
}
