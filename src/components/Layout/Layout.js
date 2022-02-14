import React from 'react';
import classNames from 'classnames';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ( { children } ) => {
    return (
      <>
        <Header/>
            <main className={classNames(styles.main)}>
              {children}
            </main>
        <Footer />
      </>
    );
  }
  
  export default Layout;
