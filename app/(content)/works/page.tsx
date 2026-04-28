import WorksContent from './client/worksContent';
import { sanityFetch } from '@/sanity/lib/live';

const WORKS_QUERY = `*[
    _type == "works"
    && defined(slug.current)
  ]|order(publishedAt desc){_id, title, slug, type, publishedAt, link, tags, summary}`;

export default async function Page() {
  const {data} = await sanityFetch({query: WORKS_QUERY});

  return (
    <WorksContent data={data} />
  )
} 