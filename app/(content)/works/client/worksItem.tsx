'use client';

import styles from './worksItem.module.css';
import { type Works } from '@/sanity/lib/types';

export default function WorksItem({
  getDataOnClick, 
  displayPopUp,
  works
}:{
  getDataOnClick:(works:Works)=>void, 
  displayPopUp: ()=>void
  works: Works
}) {

  //trim last three digits, turn '-' to '.'
  const displayDate = works.publishedAt.slice(0,7).replace(/-/g, "."); 

  function onItemClick() {
    displayPopUp();
    getDataOnClick(works);
  }

  return (
    <>
      <div onClick={onItemClick} className={styles['item']}>
        <span className={styles['date']}>{displayDate}</span>
        <h2 className={styles['title']}>{works.title}</h2>
        <span className={styles['type']}>{works.type}</span>
      </div>
    </>
  )
} 