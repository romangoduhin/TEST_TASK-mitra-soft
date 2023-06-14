import React from "react";
import {Container, Image} from "react-bootstrap";
import {DEFAULT_EMPTY_CONTENT_TEXT} from "@constants";
import emptyContentUrl from "@images/emptyContent.svg";

export function EmptyContent({text = DEFAULT_EMPTY_CONTENT_TEXT}) {
  return (
    <Container fluid className={"d-flex flex-column justify-content-center align-items-center"}>
      <Image width={"50%"} height={"50%"} src={emptyContentUrl}/>
      <h1 className={"d-flex justify-content-center align-items-center text-primary"}>{text}</h1>
    </Container>
  )
}