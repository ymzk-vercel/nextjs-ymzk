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
        <MainNav />
        <main className={styles['main-container']}>
          <Suspense fallback={<>Loading</>}>
            {children}
          </Suspense>
        </main>
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
