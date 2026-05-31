'use client';

import styles from './aboutSection.module.css';
import { SanityDocument } from "next-sanity";
import { useState } from "react";
import { PortableText } from '@portabletext/react';
import { scrollHook } from '@/app/hooks/scrollHook';

export default function AboutSection({data}:{data : SanityDocument}) {
    const [containerTrack, setContainerTrack] = useState({
      offsetY: 0
    });
    const {fadeInTransition, scrollAnimation} = scrollHook('about-container', 'sections-wrapper');
  
  return (
    <div style={fadeInTransition} id={'about-container'} className={styles['about-container']}>
      <div style={scrollAnimation} id={'sections-wrapper'} className={styles['sections-wrapper']}>
      {data ? data.map((section:{label:string, info:any})=>{
          return(
            <div key={section.label} className={styles['section-block']}>
              <h2 className={styles['section-label']}>{section.label}</h2>
              <div className={styles['section-info']}>
                <PortableText value={section.info} />
              </div>
            </div>
          )
        }) : null
      }
      </div>
    </div>
  )
}