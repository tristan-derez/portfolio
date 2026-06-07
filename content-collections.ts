import { renderMarkdown } from '#/lib/markdown';
import { defineCollection, defineConfig } from '@content-collections/core'
import { z } from 'zod'

const projects = defineCollection({
  name: 'projects',
  directory: 'content/projects',
  include: '**/*.md',
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    content: z.string()
  }),
 transform: async (doc) => {
    const path = doc._meta.path.replace(/\\/g, "/");
    const locale = path.split("/")[0];
    const slug = path.split("/")[1];
    const { markup, headings } = await renderMarkdown(doc.content);
    return { ...doc, locale, slug, markup, headings };
},
})

export default defineConfig({
  collections: [projects],
})
