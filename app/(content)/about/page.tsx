import styles from './page.module.css';
import { type Works } from '@/sanity/lib/types';
import { SanityDocument } from "next-sanity";

export default async function WorksContent() {

  return (
    <div style={fadeInTransition} id={'works-container'} className={styles['works-container']}>
      <div style={scrollAnimation} id={'items-container'} className={styles['items-container']}>
      </div>
    </div>
  )
}