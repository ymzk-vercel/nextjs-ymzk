import styles from './content.module.css';
import MainNav from "../mainNav/mainNav";
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
          {children}
        </Suspense>
      </div>
    </>
  );
}
