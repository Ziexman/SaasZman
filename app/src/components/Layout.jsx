"use client"; // Mark as a client component

import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import Explorer from '../components/Explorer';
import Bottombar from '../components/Bottombar';
import Tabsbar from './Tabsbar';
import styles from '../styles/Layout.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Layout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const main = document.getElementById('main-editor');
    if (main) {
      main.scrollTop = 0;
    }
  }, [router.pathname]);

  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar />
          <main id="main-editor" className={styles.content}>
            {children}
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;