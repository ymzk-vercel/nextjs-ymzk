import styles from './page.module.css';
import { type SanityDocument } from "next-sanity";
import { sanityFetch } from '@/sanity/lib/live';

const POSTS_QUERY = ``;

export default async function Page() {

  // const {data: works} = await sanityFetch({query: POSTS_QUERY});

  const style = {
    animation: 'fadeIn .5s ease-in forwards'
  };

  return (
    <div style={style} className={styles['items-container']}>
      ABOUT
    </div>
  )
} 