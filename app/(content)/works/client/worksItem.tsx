'use client';

import styles from './worksItem.module.css';
import WorksPopUp from '@/app/components/worksPopUp/worksPopUp';
import { type Works } from '@/sanity/lib/types';
import { useState } from 'react';

export default function WorksItem({works}:{works: Works}) {
  const [displayPopUp, setDisplayPopUp] = useState(false);

  //trim last three digits, turn '-' to '.'
  const displayDate = works.publishedAt.slice(0,7).replace(/-/g, "."); 

  function setPopUp() {
    setDisplayPopUp(!displayPopUp);
  }

  return (
    <>
      {displayPopUp ? <WorksPopUp displayPopUp={setPopUp} works={works}/> : null}
      <div onClick={()=>setDisplayPopUp(!displayPopUp)} className={styles['item']}>
        <span className={styles['date']}>{displayDate}</span>
        <h2 className={styles['title']}>{works.title}</h2>
        <span className={styles['type']}>{works.type}</span>
      </div>
    </>
  )
} 