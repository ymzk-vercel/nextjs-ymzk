
import styles from "./page.module.css";
import Works from "./works/works";

export default async function Home() {

  return (
    <>
      <div className={styles['page-container']}>
        <nav className={styles['nav-container']}>
          <h1 className={styles['nav-header']}>HEAD</h1>
          <ul className={styles['nav-options']}>
            <li className={styles['nav-option']}>
              WORKS
              <span id={'works-line'} className={styles['option-line']}></span>
            </li>
            <li className={styles['nav-option']}>TEST</li>
            <li className={styles['nav-option']}>ABOUT</li>
          </ul>
        </nav>
        <Works />
      </div>
      <footer>

      </footer>
    </>
  );
}
