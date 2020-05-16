import React, { useState } from "react";

import { Row, Col, Card, Container } from "reactstrap";
import Cards from "./Cards";

const App = () => {
  const [numberOfCards, setNumberOfCards] = useState();
  const [showCards, setShowCards] = useState(false);

  return (
    <Container>
      {showCards && <Cards amountOfCards={Number(numberOfCards)} />}

      {!showCards && (
        <>
          <Row className="mt-5">
            <Col className="d-flex justify-content-center" xs={12}>
              <h3 style={{ color: "white" }}>Please choose the number of cards</h3>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col xs={4}>
              <Card
                onClick={(e: any) => {
                  setNumberOfCards(e.currentTarget.childNodes[0].innerText);
                  setShowCards(!showCards);
                }}
                className=" highlightOnHover m-2 p-4 text-center"
              >
                <h3>4</h3>
              </Card>
            </Col>
            <Col xs={4}>
              <Card
                onClick={(e: any) => {
                  setNumberOfCards(e.currentTarget.childNodes[0].innerText);
                  setShowCards(!showCards);
                }}
                className=" highlightOnHover m-2 p-4 text-center"
              >
                <h3>8</h3>
              </Card>
            </Col>
            <Col xs={4}>
              <Card
                onClick={(e: any) => {
                  setNumberOfCards(e.currentTarget.childNodes[0].innerText);
                  setShowCards(!showCards);
                }}
                className=" highlightOnHover m-2 p-4 text-center"
              >
                <h3>12</h3>
              </Card>
            </Col>
          </Row>
        </>
      )}
      <style>{`
        .highlightOnHover:hover,
        .highlightOnHover:focus {
          cursor: pointer;
          transform: translateY(-10px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease-out;
        }
      `}</style>
    </Container>
  );
};

export default App;
