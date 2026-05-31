'use client';

import styles from './aboutSection.module.css';
import { SanityDocument } from "next-sanity";
import { useEffect, useState } from "react";
import { PortableText } from '@portabletext/react';
import { scrollHook } from '@/app/hooks/scrollHook';

export default function AboutSection({data}:{data : SanityDocument}) {
    const [containerTrack, setContainerTrack] = useState({
      offsetY: 0
    });
    const {fadeInTransition, scrollAnimation} = scrollHook();
  
  return (
    <div style={fadeInTransition} id={'sections-container'} className={styles['sections-container']}>
      {data ? data.map((section:{label:string, info:any})=>{
          return(
            <div className={styles['section-block']}>
              <h2>{section.label}</h2>
              <div className={styles['section-info']}>
                <PortableText value={section.info} />
              </div>
            </div>
          )
        }) : null
      }
    </div>
  )
}