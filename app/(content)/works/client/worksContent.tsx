'use client';

import styles from './worksContent.module.css';
import WorksItem from "./worksItem";
import { type Works } from '@/sanity/lib/types';
import { SanityDocument } from "next-sanity";
import { useEffect, useState } from 'react';

export default function WorksContent({data}:{data : SanityDocument}) {
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
    // Get values
    const parentContainer = document.getElementById('works-container');
    const container = document.getElementById('items-container');
    const topLimit = document.getElementById('nav-container')?.getBoundingClientRect().bottom;
    
    if (container && parentContainer && topLimit) {
      const containerRect = container.getBoundingClientRect();
      const parentRect = parentContainer.getBoundingClientRect();
      const bottomLimit =  (-1 * container.scrollHeight);
      
      // get view height of element AND actual height
      console.log('height',container.scrollHeight)
      console.log('bottomlimit',bottomLimit)
      console.log('offset',containerTrack.offsetY)
      console.log('containerbot',containerRect.bottom)

      function scrollTrack(event:WheelEvent) {
        if (event.deltaY > 0){ 
          // scroll down
          if (containerTrack.offsetY >= bottomLimit) {
            setContainerTrack({
              ...containerTrack,
              offsetY: containerTrack.offsetY - 30
            });
          }
        } else { // scroll up
          if (containerTrack.offsetY <= -30) {
            setContainerTrack({
              ...containerTrack,
              offsetY: containerTrack.offsetY + 30
            });
          }
        }
      }
      
      if (parentContainer.matches(":hover")) {
        addEventListener("wheel", scrollTrack);
      }

      return () => {
        removeEventListener("wheel", scrollTrack);
      }
    }
  }, [containerTrack])

  return (
    <div style={fadeInTransition} id={'works-container'} className={styles['works-container']}>
      <div style={scrollAnimation} id={'items-container'} className={styles['items-container']}>
        {data ? data.map((works: Works)=> {
            return (<WorksItem key={works._id} works={works}/>) 
          }) : null
        }
      </div>
    </div>
  )
}