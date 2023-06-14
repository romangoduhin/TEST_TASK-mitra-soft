import React from 'react';
import {Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export function Main() {
  return (
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col md={12}>
          <Card className={"border-2 border-primary"}>
            <Card.Body>
              <Card.Title>
                <NavLink to={"/posts"} className={"text-primary text-decoration-underline"}>Go back</NavLink>
              </Card.Title>
              <Card.Title>
                <h1 className={"text-primary"}>Мой слоган: "Был бы дизайн сделал лучше :)"</h1>
              </Card.Title>
              <ListGroup>
                <ListGroup.Item>- Имею годовой коммерческий опыт работы в американском финтех стартапе на стеке React
                  (React Hooks),
                  Redux, AG Grid, Ant Design, E Chart;</ListGroup.Item>
                <ListGroup.Item>- Имею коммерческий опыт работы над адаптивным сайтом с pixel perfect версткой и логикой
                  на чистом
                  JavaScript, развертывание его на небольшом сервере на Express, c реализацией отправки
                  писем;</ListGroup.Item>
                <ListGroup.Item>- Имею опыт менторства. На данный момент частично работаю в ИТ школе </ListGroup.Item>
                <ListGroup.Item>- Мой основной стек: React / React Hooks, Redux / Redux Toolkit, JavaScript /
                  Typescript, HTML, CSS /
                  SCSS / SASS / UI KIT;</ListGroup.Item>
                <ListGroup.Item>- Так же работаю c: Vite / CRA, Eslint / Prettier, Git, BitBucket / Github, MacOS /
                  Windows / Linux,
                  Slack, Trello / Jira, AG grid, AntD, E Chart и другими UI китами;</ListGroup.Item>
                <ListGroup.Item>- Открыт к развитию, помимо основного стека, других направлений: Fullstack, React
                  Native. Готов к
                  освоению других библиотек и фреймворков, пакетов, китов и тд.;</ListGroup.Item>
                <ListGroup.Item> - Коммуникабельный, понимающий, самостоятельный, ответственный, исполнительный, умеющий
                  гуглить;</ListGroup.Item>
                <ListGroup.Item> - Пишу чистый код и адаптируюсь к любому код стайлу, разбираюсь в чужом
                  коде;</ListGroup.Item>
                <ListGroup.Item> - Английский B1;</ListGroup.Item>
                <ListGroup.Item> - Имею высшее профильное образование. Вопрос с армией закрыт;</ListGroup.Item>
                <ListGroup.Item> - Готов к любым тестовым заданиям, готов к овертаймам. В технике не нуждаюсь, готов к
                  любому виду
                  трудоустройства, к любому виду оплаты ЗП</ListGroup.Item>
                <ListGroup.Item>- Резюме по ссылке тут: https://ibb.co/k1Kv4c9</ListGroup.Item>
                <ListGroup.Item>-
                  <a href="https://github.com/romangoduhin?tab=repositories">
                    Github
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>-
                  <a href="https://www.codewars.com/users/romangoduhin">
                    Codewars
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>-
                  <a href="https://t.me/magaBob">
                    Telegram
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>-
                  <a href="https://www.linkedin.com/in/romangoduhin/">
                    LinkedIn
                  </a>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}