import { sanityFetch } from '@/sanity/lib/live';

export async function FetchSanityContent(path:string) {

  const CONTENT_QUERY = `*[
    _type == "${path}"
    && defined(slug.current)
  ]|order(publishedAt desc){_id, title, slug, type, publishedAt, link, tags, summary}`;

  const {data} = await sanityFetch({query: CONTENT_QUERY});
  return data;
}