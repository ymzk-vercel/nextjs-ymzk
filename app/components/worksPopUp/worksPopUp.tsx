import styles from './worksPopUp.module.css';
import { RedirectBig, RedirectSmall } from '../svgIcons/svgIcons';
import { RiCloseLargeLine } from "react-icons/ri";

import { type Works } from '@/sanity/lib/types';

export default function WorksPopUp({
  displayPopUp, 
  works
}:{
  displayPopUp:()=>void, 
  works: Works
}){

  function setTag() {
    switch (works.type) {
      case 'Book':
        return <span className={styles['tag']}>BOOK</span>
      case 'Commission':
        return <span className={styles['tag']}>COM<br/>MIS<br/>SION</span>
      case 'Fanfic':
        return <span className={styles['tag']}>FAN<br/>FIC</span>
      case 'Original':
        return <span className={styles['tag']}>ORIG<br/>INAL</span>
    }
  }

  const displayDate = works.publishedAt.replace(/-/g, ".");

  return (
    <div className={styles['popup']}>
      <div onClick={displayPopUp} className={styles['popup-shadow']}></div>
      
      <div className={styles['popup-container']}>
        <div onClick={displayPopUp} className={styles['close-button']}>
          <RiCloseLargeLine />
        </div>

        <div className={styles['popup-content-wrapper']}>
          <div className={styles['popup-header']}>
            <a href={works.link} className={styles['title']} target='_'>
              <h3>{works.title} </h3>
              <RedirectBig />
            </a>
            {setTag()}
          </div>
          <div className={styles['popup-body']}>
            <div className={styles['body-item']}>
              <h4>Summary</h4>
              <p></p>
            </div>
            <div className={styles['body-item']}>
              <h4>Content</h4>
              <p>{works.tags}</p>
            </div>
            <div className={styles['body-item']}>
              <h4>Published</h4>
              <a href={works.link} target='_'>
                <RedirectSmall />
              </a>
              <p>{displayDate}</p>
            </div>
          </div>
        </div>
        
        <div className={styles['border-lines']}>
          <span className={styles['vertical']}></span>
          <span className={styles['horizontal']}></span>
        </div>
      </div>
    </div>
  )
}