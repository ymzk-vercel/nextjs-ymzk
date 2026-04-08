import { defineQuery } from 'next-sanity';

export const WORKS_QUERY = defineQuery(`
  *[_type == "works"
    && defined(slug.current)]
    |order(publishedAt desc){_id, title, slug, type, publishedAt}`
);

