'use client';

import styles from './worksList.module.css';
import WorksItem from "./worksItem";
import WorksPopUp from '@/app/(content)/works/worksPopUp/worksPopUp';
import { type Works } from '@/sanity/lib/types';
import { SanityDocument } from "next-sanity";
import { useState } from 'react';
import { scrollHook } from '@/app/hooks/scrollHook';

export default function WorksList({data}:{data : SanityDocument}) {
  const [popUp, setPopUp] = useState(false);
  const [popUpData, setPopUpData] = useState<Works | undefined>(undefined);
  const {fadeInTransition, scrollAnimation} = scrollHook();
  
  function getDataOnClick(works:Works) {
    setPopUpData(works)
  }

  function displayPopUp() {
    setPopUp(prev=>!prev)
  }

  return (
    <>
      {popUp && popUpData ? <WorksPopUp displayPopUp={displayPopUp} data={popUpData} /> : null}
      <div style={fadeInTransition} id={'works-container'} className={styles['works-container']}>
        <div style={scrollAnimation} id={'items-container'} className={styles['items-container']}>
          {data ? data.map((works: Works, index:number)=> {
              return (<WorksItem key={works._id} displayPopUp={displayPopUp} getDataOnClick={getDataOnClick} works={works}/>) 
            }) : null
          }
        </div>
      </div>
    </>
  )
}