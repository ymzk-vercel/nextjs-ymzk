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
    const worksContainer = document.getElementById('works-container');
    const scrollTrack = document.getElementById('items-container');
    
    if (!scrollTrack && !worksContainer) return;

    function scrollEvent(event:WheelEvent) {
      const containerRect = scrollTrack?.getBoundingClientRect();
      const parentRect = worksContainer?.getBoundingClientRect();
      const bottomLimit =  (-1 * scrollTrack!.scrollHeight);
      
      // get view height of element AND actual height
      console.log('height',scrollTrack?.scrollHeight)
      console.log('bottomlimit',bottomLimit)
      console.log('offset',containerTrack.offsetY)
      console.log('containerbot',containerRect?.bottom)

      if (event.deltaY > 0){ 
        // scroll down
        if (containerTrack.offsetY >= bottomLimit) {
          setContainerTrack(prev=>{
            return {offsetY: prev.offsetY - 30}
          })
        }
      } else { 
        // scroll up
        console.log(containerTrack.offsetY <= -30)
        if (containerTrack.offsetY <= -30) {
          setContainerTrack(prev=>{
        // scroll up
            return {offsetY: prev.offsetY + 30}
          });
        }
      }
    }

    worksContainer!.addEventListener("wheel", scrollEvent);
    
    return () => {
      removeEventListener("wheel", scrollEvent);
    }
  }, [])

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