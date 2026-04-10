import styles from "./mainNav.module.css";
import Link from "next/link";

export default async function mainNav() {

  return (
    <ul className={styles['nav-options']}>
      <li id={'works'} className={styles['nav-option']}>
        <Link href="/works" className={styles['nav-item']}>WORKS</Link>
      </li>
      <li id={'blog'} className={styles['nav-option']}>
        <Link href="/blog" className={styles['nav-item']}>TEST</Link>
      </li>
      <li id={'about'} className={styles['nav-option']}>
        <Link href="/about" className={styles['nav-item']}>ABOUT</Link>
      </li>
      <span className={styles['option-line']}></span>
    </ul>
  );
}
