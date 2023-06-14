import React from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import menuIconUrl from "@assets/icons/menuIcon.svg";
import {MY_AVATAR_URL, MY_EMAIL, MY_FULL_NAME} from "@utils/constants.js";
import {NavLink} from "react-router-dom";

export function Header({handleOpenMenu}) {
  const mailtoHref = `mailto:${MY_EMAIL}?subject=SendMail&body=Description`;

  return (
    <Container>
      <Row className={"p-0 d-flex flex-row align-items-center row-gap-2"}>
        <Col sm={4} md={3}>
          <Button className={"d-flex align-items-center gap-2"} onClick={handleOpenMenu}>
            <Image width={20} height={15} src={menuIconUrl}/>
            <span>Open Menu</span>
          </Button>
        </Col>

        <Col md={9} sm={12} className={"d-flex flex-row flex-wrap align-items-center"}>
          <Col xs={3} sm={2}>
            <NavLink to={"/about-me"}>
              <Image roundedCircle width={50} height={50} src={MY_AVATAR_URL}/>
            </NavLink>
          </Col>
          <Col xs={5} sm={5}>
            <h5 className={"m-0 text-primary"}>{MY_FULL_NAME}</h5>
          </Col>
          <Col xs={12} sm={5}>
            <a href={mailtoHref} className={"text-decoration-underline"}>{MY_EMAIL}</a>
          </Col>
        </Col>


      </Row>
    </Container>
  );
}