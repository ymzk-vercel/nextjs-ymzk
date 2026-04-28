'use client';

import styles from "./mainNav.module.css";
import Link from "next/link";
import NavLine from "./navLine/navLine";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function mainNav() {
  const [worksLineProperties, setWorksLineProperties] = useState({
    containerWidth: 0,
    optionWidth: 0,
    optionHeight: 0,
    optionPosY: 0
  });
  const [blogLineProperties, setBlogLineProperties] = useState({
    containerWidth: 0,
    optionWidth: 0,
    optionHeight: 0,
    optionPosY: 0
  });
  const [aboutLineProperties, setAboutLineProperties] = useState({
    containerWidth: 0,
    optionWidth: 0,
    optionHeight: 0,
    optionPosY: 0
  });

  // Returns with /[slug].
  const params = usePathname(); 

  useEffect(()=>{
    function updateLineContainer() {
      const navOptionsID = document.getElementById('nav-options');
      const worksID = document.getElementById('works');
      const blogID = document.getElementById('blog');
      const aboutID = document.getElementById('about');

      if (navOptionsID && worksID && blogID && aboutID) {
        setWorksLineProperties({
          containerWidth: navOptionsID.getBoundingClientRect().width,
          optionWidth: worksID.getBoundingClientRect().width,
          optionHeight: worksID.getBoundingClientRect().height,
          optionPosY: worksID.offsetTop
        });
        setBlogLineProperties({
          containerWidth: navOptionsID.getBoundingClientRect().width,
          optionWidth: blogID.getBoundingClientRect().width,
          optionHeight: blogID.getBoundingClientRect().height,
          optionPosY: blogID.offsetTop
        });
        setAboutLineProperties({
          containerWidth: navOptionsID.getBoundingClientRect().width,
          optionWidth: aboutID.getBoundingClientRect().width,
          optionHeight: aboutID.getBoundingClientRect().height,
          optionPosY: aboutID.offsetTop
        });
      }
    }
    
    updateLineContainer();
    window.addEventListener('resize', updateLineContainer);

    return () => {
      window.removeEventListener('resize', updateLineContainer);
    }

  }, [params]);

  return (
    <ul id={'nav-options'} className={styles['nav-options']}>
      <li id={'works'} className={styles['nav-option']}>
        <Link href="/works" className={styles['nav-item']}>WORKS</Link>
      </li>
      <li id={'about'} className={styles['nav-option']}>
        <Link href="/about" className={styles['nav-item']}>ABOUT</Link>
      </li>

    </ul>
  );
}
/*
      <NavLine paramKey={'works'} containerProperties={worksLineProperties} />
      <NavLine paramKey={'blog'} containerProperties={blogLineProperties} />
      <NavLine paramKey={'about'} containerProperties={aboutLineProperties} />
*/
