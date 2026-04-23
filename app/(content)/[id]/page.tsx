import styles from './page.module.css';
import { type SanityDocument } from "next-sanity";
import { FetchSanityContent } from '@/app/data/fetchSanityContent';

export default async function Page({params} : {params: Promise<{ id: string }>}) {
  
  const path = await params;
  const data = await FetchSanityContent(path.id);

  const style = {
    animation: 'fadeIn .5s ease-in forwards'
  };

  return (
    <div style={style} className={styles['items-container']}>
      {data ? data.map((works:SanityDocument)=>{
        const displayDate = works.publishedAt.slice(0,7).replace(/-/g, "."); //trim last three digits, turn - to .
        
        return (
          <div key={works._id} className={styles['item']}>
            <span className={styles['date']}>{displayDate}</span>
            <h2 className={styles['title']}>{works.title}</h2>
            <span className={styles['type']}>{works.type}</span>
          </div>
        )}) : null
      }
    </div>
  )
} 