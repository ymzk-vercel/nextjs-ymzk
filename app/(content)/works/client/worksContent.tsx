'use client';

import styles from './worksContent.module.css';
import WorksItem from "./worksItem";
import WorksPopUp from '@/app/components/worksPopUp/worksPopUp';
import { type Works } from '@/sanity/lib/types';
import { SanityDocument } from "next-sanity";
import { useEffect, useState } from 'react';

export default function WorksContent({data}:{data : SanityDocument}) {
  const [popUp, setPopUp] = useState(false);
  const [popUpData, setPopUpData] = useState<Works | undefined>(undefined);
  const [containerTrack, setContainerTrack] = useState({
    offsetY: 0
  });

  const fadeInTransition = {
    animation: 'fadeIn .5s ease-in forwards'
  };

  const scrollAnimation = {
    transform: `translateY(${containerTrack.offsetY}px)`,
    transition: '.3s'
  };

  useEffect(()=>{
    const worksContainer = document.getElementById('works-container');
    const itemsContainer = document.getElementById('items-container');
    
    if (!itemsContainer && !worksContainer) return;

    function scrollEvent(event:WheelEvent) {
      const parentRect = worksContainer?.getBoundingClientRect();
      const bottomLimit =  ((parentRect!.height * .60) - itemsContainer!.scrollHeight);

      if (event.deltaY > 0){ 
        // scroll down
        setContainerTrack(prev=>{
          if (prev.offsetY >= bottomLimit) {
            return {offsetY: prev.offsetY - 30}
          } else return {...prev}
        })
      } else { 
        // scroll up
        setContainerTrack(prev=>{
          if (prev.offsetY <= -30) {
            return {offsetY: prev.offsetY + 30}
          } else return {...prev}
        });
      }
    }

    worksContainer!.addEventListener("wheel", scrollEvent);
    
    return () => {
      removeEventListener("wheel", scrollEvent);
    }
  }, [])
  
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
          {data ? data.map((works: Works)=> {
              return (<WorksItem key={works._id} displayPopUp={displayPopUp} getDataOnClick={getDataOnClick} works={works}/>) 
            }) : null
          }
        </div>
      </div>
    </>
  )
}