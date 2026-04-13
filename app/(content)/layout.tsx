import styles from './layout.module.css';
import MainNav from "../components/mainNav/mainNav";
import { Suspense } from 'react';

export default async function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <div className={styles['page-container']}>
        <nav className={styles['nav-container']}>
          <h1 className={styles['nav-header']}>HEAD</h1>
          <MainNav />
        </nav>
        <Suspense fallback={<>Fetch Failed</>}>
          <main className={styles['main-container']}>
            {children}
          </main>
        </Suspense>
      </div>
      <footer className={styles['footer-container']}>
        <div className={styles['footer-items']}>
          <a href=''>Blusky.</a>
          <a href=''>X.</a>
          <a href=''>Discord.</a>
        </div>
      </footer>
    </>
  );
}
