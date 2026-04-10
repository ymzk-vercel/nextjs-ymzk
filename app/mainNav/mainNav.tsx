'use client';

import styles from "./mainNav.module.css";
import Link from "next/link";
import NavLine from "./line/navLine";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function mainNav() {
  const [containerProperties, setContainerProperties] = useState({
    containerWidth: 0,
    optionWidth: 0,
    optionHeight: 0,
    optionPosY: 0
  });

  // Returns with /[slug].
  const params = usePathname(); 

  useEffect(()=>{
    const navOptionsID = document.getElementById('nav-options');
    const optionID = document.getElementById(params.slice(1));

    if (navOptionsID === null || optionID === null) return;

    setContainerProperties({
      containerWidth: navOptionsID.getBoundingClientRect().width,
      optionWidth: optionID.getBoundingClientRect().width,
      optionHeight: optionID.getBoundingClientRect().height,
      optionPosY: optionID.offsetTop
    });

  }, []);
  

  return (
    <ul id={'nav-options'} className={styles['nav-options']}>
      <li id={'works'} className={styles['nav-option']}>
        <Link href="/works" className={styles['nav-item']}>WORKS</Link>
      </li>
      <li id={'blog'} className={styles['nav-option']}>
        <Link href="/blog" className={styles['nav-item']}>TEST</Link>
      </li>
      <li id={'about'} className={styles['nav-option']}>
        <Link href="/about" className={styles['nav-item']}>ABOUT</Link>
      </li>
      <NavLine containerProperties={containerProperties} />
    </ul>
  );
}
