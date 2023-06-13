import React, {useState} from 'react';
import styles from "./PageLayout.module.scss";
import {Loader, SideMenu} from "@templates";
import {Button} from "react-bootstrap";

export function PageLayout({isLoading, header, main, footer}) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function handleClickMenu() {
    setIsMenuVisible(prevState => !prevState)
  }

  return (
    <>
      <div className={styles.pageLayout}>
        <nav>
          <Button onClick={handleClickMenu}>Open Menu</Button>
        </nav>
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
      <SideMenu isVisible={isMenuVisible} onHide={handleClickMenu}/>
    </>
  )
}