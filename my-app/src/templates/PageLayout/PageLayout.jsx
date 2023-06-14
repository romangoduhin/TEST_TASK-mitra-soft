import React, {useState} from "react";
import {Loader, SideMenu} from "@templates";
import {Container, Stack} from "react-bootstrap";
import {Header} from "@components";

export function PageLayout({isLoading, main, footer}) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function handleClickMenu() {
    setIsMenuVisible(prevState => !prevState)
  }

  return (
    <Container className={"p-2"}>
      {isLoading
        ? <Loader/>
        : <Stack gap={2}>
          <header>
            <Header handleOpenMenu={handleClickMenu}/>
          </header>
          {main && <main>
            {main}
          </main>}
          {footer && <footer>
            {footer}
          </footer>}
        </Stack>
      }
      <SideMenu isVisible={isMenuVisible} onHide={handleClickMenu}/>
    </Container>
  )
}