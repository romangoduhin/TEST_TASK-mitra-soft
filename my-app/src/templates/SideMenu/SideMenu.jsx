import React from 'react';
import {Card, Offcanvas} from "react-bootstrap";
import {List} from "@templates";
import {useNavigate} from "react-router-dom";

const links = [
  {
    title: "Posts",
    path: "/posts"
  },
  {
    title: "About me",
    path: "/about-me"
  },
]

export function SideMenu({isVisible, onHide}) {
  const navigate = useNavigate()

  function redirectTo(path) {
    navigate(path)
  }

  function renderItem(item) {
    return <Card className={"border-primary"} body onClick={() => redirectTo(item.path)}>{item.title}</Card>
  }

  return (
    <Offcanvas placement={"start"} show={isVisible} onHide={onHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <List list={links} renderItem={renderItem}/>
      </Offcanvas.Body>
    </Offcanvas>
  )
}