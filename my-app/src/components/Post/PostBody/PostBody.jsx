import React from "react";
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export function PostBody({title, text, userId, avatarUrl, isCommentsVisible, handleCommentsClick}) {
  const buttonText = isCommentsVisible ? "Close comments" : "Open comments"

  return (
    <Container>
      <Row className={"p-2"}>
        <Col sm={4} className={"d-flex justify-content-center align-items-center"}>
          <NavLink to={`/profile/${userId}`}>
            <Image className={"bg-primary"} width={"100px"} height={"100px"} roundedCircle={true} src={avatarUrl}/>
          </NavLink>
        </Col>

        <Col sm={8}>
          <Row className={"text-capitalize"}>
            <h1 className={"text-primary"}>{title}</h1>
            <p>{text}</p>
          </Row>

          <Row className={"p-2"}>
            <Button className={`w-auto border-0 ${isCommentsVisible ? "bg-danger" : "bg-primary"}`}
                    onClick={handleCommentsClick}>
              {buttonText}
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}