import { defineCollection, s } from 'velite';

import slug from '@/lib/generate-slug';

export const notes = defineCollection({
  name: 'Note',
  pattern: 'notes/**/*.mdx',
  schema: s
    .object({
      created_at: s.isodate(),
      title: s.string(),
      description: s.string(),
      tags: s
        .array(s.string())
        .transform(data => data.map((tag: string) => tag.trim())),
      image: s.string().url().optional(),
      content: s.mdx(),
      metadata: s.metadata()
    })
    .transform(data => ({
      ...data,
      slug: slug(data.title)
    }))
});
