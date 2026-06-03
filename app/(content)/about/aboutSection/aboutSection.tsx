'use client';

import styles from './aboutSection.module.css';
import { SanityDocument } from "next-sanity";
import { PortableText, PortableTextBlock } from '@portabletext/react';
import { scrollHook } from '@/app/hooks/scrollHook';

export default function AboutSection({data}:{data : SanityDocument}) {
    const {fadeInTransition, scrollAnimation} = scrollHook('about-container', 'sections-wrapper');
  
  return (
    <div style={fadeInTransition} id={'about-container'} className={styles['about-container']}>
      <div style={scrollAnimation} id={'sections-wrapper'} className={styles['sections-wrapper']}>
      {data ? data.map((section:{label:string, description:PortableTextBlock})=>{
          return(
            <div key={section.label} className={styles['section-block']}>
              <h2 className={styles['section-label']}>{section.label}</h2>
              <div className={styles['section-info']}>
                <PortableText value={section.description} />
              </div>
            </div>
          )
        }) : null
      }
      </div>
    </div>
  )
}