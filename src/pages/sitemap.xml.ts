import type { APIRoute } from 'astro';

const SITE = 'https://keeforge.com';

// Every page under src/pages becomes a sitemap URL, so new pages are listed
// without editing this file.
const pages = Object.keys(import.meta.glob(['./**/*.astro', './**/*.md']));

const paths = pages
    .map((file) => file.replace(/^\.\//, '/').replace(/\.(astro|md)$/, '').replace(/(^|\/)index$/, '$1'))
    .map((path) => (path.endsWith('/') ? path : `${path}/`))
    .sort();

export const GET: APIRoute = () => {
    const urls = paths.map((path) => `  <url><loc>${SITE}${path}</loc></url>`).join('\n');
    const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
    return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
