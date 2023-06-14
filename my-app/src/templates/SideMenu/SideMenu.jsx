import React from "react";
import {Card, Offcanvas} from "react-bootstrap";
import {List} from "@templates";
import {NavLink} from "react-router-dom";

const links = [
  {
    id: 1,
    title: "Posts",
    path: "/posts"
  },
  {
    id: 2,
    title: "About me",
    path: "/about-me"
  },
]

export function SideMenu({isVisible, onHide}) {
  function renderItem(item) {
    return (
      <NavLink to={item.path}>
        <Card className={"border-primary"} body>{item.title}</Card>
      </NavLink>
    )
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