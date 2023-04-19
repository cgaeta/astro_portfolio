import { z, defineCollection } from "astro:content";

const jobsCollection = defineCollection({
  schema: z.object({
    employer: z.string(),
    project: z.string(),
    longName: z.string(),
    start: z.string(),
    end: z.string(),
    location: z.string(),
    title: z.string(),
    duties: z.array(z.string()),
    contribution: z.array(z.string()),
    links: z.array(
      z.object({
        url: z.string(),
        str: z.string(),
      })
    ),
    hidden: z.boolean().optional(),
  }),
});

export const collections = {
  jobs: jobsCollection,
};
