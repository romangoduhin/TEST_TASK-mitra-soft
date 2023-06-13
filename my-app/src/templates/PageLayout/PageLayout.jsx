import React from 'react';
import styles from "./PageLayout.module.scss";
import {Loader} from "@templates";

export function PageLayout({isLoading, header, main, footer}) {
  return (
    <div className={styles.pageLayout}>
      <header>
        {header}
      </header>
      {isLoading
        ? <Loader/>
        : <>
          <main>
            {main}
          </main>
          <footer>
            {footer}
          </footer>
        </>
      }
    </div>
  )
}