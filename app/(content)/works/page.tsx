import styles from './page.module.css';
import { type SanityDocument } from "next-sanity";
import { sanityFetch } from '@/sanity/lib/live';

const POSTS_QUERY = `*[
  _type == "works"
  && defined(slug.current)
]|order(publishedAt desc){_id, title, slug, type, publishedAt, link, tags, summary}`;

export default async function Page() {

  const {data: works} = await sanityFetch({query: POSTS_QUERY});

  return (
    <main className={styles['main-container']}>
      <div className={styles['items-container']}>
        {works.map((works:SanityDocument)=>{
          const displayDate = works.publishedAt.slice(0,7).replace(/-/g, "."); //trim last three digits, turn - to .
          return (
            <div key={works._id} className={styles['item']}>
              <span className={styles['date']}>{displayDate}</span>
              <h2 className={styles['title']}>{works.title}</h2>
              <span className={styles['type']}>{works.type}</span>
            </div>
          )})
        }
      </div>
    </main>
  )
} 