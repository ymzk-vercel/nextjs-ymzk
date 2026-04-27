import styles from './page.module.css';
import WorksContent from './client/worksContent';
import { type Works } from '@/sanity/lib/types';
import { sanityFetch } from '@/sanity/lib/live';

const WORKS_QUERY = `*[
    _type == "works"
    && defined(slug.current)
  ]|order(publishedAt desc){_id, title, slug, type, publishedAt, link, tags, summary}`;

export default async function Page() {
  const {data} = await sanityFetch({query: WORKS_QUERY});

  const style = {
    animation: 'fadeIn .5s ease-in forwards'
  };

  return (
    <div style={style} className={styles['items-container']}>
      {data ? data.map((works: Works)=> {
          return (<WorksContent key={works._id} works={works}/>) 
        }) : null
      }
    </div>
  )
} 