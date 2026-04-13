import styles from './page.module.css';
import { type SanityDocument } from "next-sanity";
import { sanityFetch } from '@/sanity/lib/live';

const POSTS_QUERY = ``;

export default async function Page() {

  // const {data: works} = await sanityFetch({query: POSTS_QUERY});

  return (
    <div className={styles['items-container']}>
      ABOUT
    </div>
  )
} 