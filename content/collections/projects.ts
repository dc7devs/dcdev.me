import { defineCollection, s } from 'velite';

import slug from '@/lib/generate-slug';

export const projects = defineCollection({
  name: 'Project',
  pattern: 'projects/**/*.mdx',
  schema: s
    .object({
      title: s.string(),
      description: s.string(),
      started_at: s.isodate(),
      status: s
        .enum(['to_begin', 'doing', 'progressing', 'finishing', 'done'])
        .default('doing'),
      is_promoted_to_showcase: s.boolean().default(false),
      core_tech: s.object({
        name: s.string(),
        url: s.string().url()
      }),
      my_role: s
        .array(s.string())
        .transform(data => data.map(role => role.trim()))
        .default(['(none)']),
      timeline: s.string().trim().default('(none)'),
      tools: s
        .array(s.string())
        .transform(data => data.map(tool => tool.trim())),
      type: s.enum([
        'API',
        'FEATURE',
        'E-COMMERCE',
        'CMS',
        'LANDING PAGE',
        'PWA',
        'CORPORATE PORTALS',
        'RESERVATION & SHEDULING',
        'AUTOMATIONS & INTEGRATIONS',
        'E-LEARNING',
        'BLOGS & PORTFOLIO',
        'SAAS'
      ]),
      classification: s
        .enum(['personal study', 'sketch study', 'professional'])
        .default('personal study'),
      image: s
        .string()
        .url()
        .default(
          'https://res.cloudinary.com/dyxtcsnna/image/upload/v1706910149/dcdev/patter-code_mkvdxv.png'
        ),
      video: s.string().url().optional(),
      metadata: s.metadata(),
      content: s.mdx(),
      repository: s.string().url().default('https://github.com/dc7devs'),
      deployment: s.string().url().optional(),
      contributors: s
        .array(
          s.object({
            name: s.string(),
            github_url: s.string().url(),
            avatar_url: s.string().url()
          })
        )
        .default([
          {
            name: 'Diego C. Silva',
            github_url: 'https://github.com/dc7devs',
            avatar_url:
              'https://res.cloudinary.com/dyxtcsnna/image/upload/v1714513082/dcdev/person_o0xtiw.png'
          }
        ])
    })
    .transform(data => ({
      ...data,
      slug: slug(data.title)
    }))
});
