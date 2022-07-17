// import astroRemark from '@astrojs/markdown-remark';
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig(
/** @type {import('astro').AstroUserConfig} */
{
  // markdown: {
  // 	render: [astroRemark, {
  // 		remarkPlugins: [],
  // 		rehypePlugins: ['rehype-slug', ['rehype-autolink-headings', {
  // 			behavior: 'wrap'
  // 		}]],
  // 		shikiConfig: {
  // 			theme: 'poimandres',
  // 			langs: [],
  // 			wrap: false
  // 		}
  // 	}]
  // },
  site: 'http://localhost:3000/',
  integrations: [sitemap(), react()]
});