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
          <a target="_" href='https://www.tumblr.com/bucktoothymzkr'>tumblr.</a>
          <a target="_" href='https://x.com/ymzkr445'>X.</a>
          <a target="_" href='https://alexleigh.carrd.co/'>carrd.</a>
        </div>
      </footer>
    </>
  );
}
