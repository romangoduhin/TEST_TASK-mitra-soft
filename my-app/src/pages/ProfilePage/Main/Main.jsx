import React from 'react';
import {Card, Col, Container, Image, Row} from "react-bootstrap";
import avatar from "@assets/images/avatar.svg";
import {NavLink} from "react-router-dom";

export function Main({profile}) {
  return (
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col md={12}>
          <Card className={"border-2 border-primary"}>
            <Card.Body>
              <Card.Title>
                <NavLink to={"/posts"} className={"text-primary text-decoration-underline"}>Go back</NavLink>
              </Card.Title>
              <Image width={"100%"} height={300} src={avatar}/>
              <Card.Title>
                <h1 className={"text-primary"}>{profile?.username}</h1>
              </Card.Title>
              <Card.Text>
                <span className={"text-primary"}>Name:</span> {profile?.name}
              </Card.Text>
              <Card.Text>
                <span className={"text-primary"}>Email:</span> {profile?.email}
              </Card.Text>
              <Card.Text>
                <span className={"text-primary"}>Location:</span> {profile?.address?.city}
              </Card.Text>
              <Card.Text>
                <span className={"text-primary"}>Phone:</span> {profile?.phone}
              </Card.Text>
              <Card.Text>
                <span className={"text-primary"}>Website:</span> {profile?.website}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}