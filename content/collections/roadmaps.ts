import { defineCollection, s } from 'velite';

export const roadmaps = defineCollection({
  name: 'Roadmap',
  pattern: 'roadmaps/**/*.yaml',
  schema: s.object({
    title: s.string(),
    description: s.string(),
    progress: s.string().url(),
    image: s.string().url(),
    status: s.enum(['no_started', 'in_progress', 'done']).default('no_started')
  })
});
