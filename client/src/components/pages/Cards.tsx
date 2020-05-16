import React, { useState, useEffect } from "react";
import { useCards } from "../../hooks/useCards";
import { Container, Row, Col, Button } from "reactstrap";
import FlippingCard from "../FlippingCard";
import { compare } from "../../compare";
import Moment from "react-moment";
import EndGame from "./EndGame";

export interface NumberObject {
  num: Array<number>;
  date: Array<Date>;
}

export interface CardsProps {
  amountOfCards: Number;
}

const Cards: React.SFC<CardsProps> = ({ amountOfCards }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { numbers } = useCards(amountOfCards);
  const [userChoice, setUserChoice] = useState(Array);
  const [endGame, setEndGame] = useState(false);
  const [status, setStatus] = useState("");

  const game = compare(
    numbers as any,
    userChoice.map((one: any) => one.num),
  );

  const choices = () => {
    if (userChoice.length && !game) {
      setEndGame(true);
      setStatus("lost");
    }

    if (userChoice.length != 0 && userChoice.length === numbers.length) {
      setEndGame(true);
      setStatus("won");
    }
  };

  const handleFlip = (e: any) => {
    e.preventDefault();
    setIsFlipped(true);
  };

  useEffect(() => {
    choices();
  }, [userChoice]);

  return (
    <Container className="mt-5">
      {endGame && <EndGame status={status} />}
      {!endGame && (
        <>
          <Row>
            {numbers &&
              numbers.map((number: Number, i: Number) => (
                <Col key={`${i}`} xs={3}>
                  <FlippingCard
                    allFlipped={isFlipped}
                    num={number}
                    setUserChoice={setUserChoice}
                  />
                </Col>
              ))}
          </Row>
          {!isFlipped && (
            <Row className="d-flex justify-content-center mt-5">
              <Col xs={8}>
                <Button block color="danger" onClick={(e) => handleFlip(e)}>
                  Play
                </Button>
              </Col>
            </Row>
          )}
          <Row>
            {userChoice &&
              userChoice.map((one: any, i: number) => (
                <Col className="mt-3" key={`${i}`} xs={4}>
                  <span className="p-2 m-2" style={{ color: "white" }}>
                    {`${i + 1} - You flipped ${one.num}  
                    `}
                    <Moment className="pr-2" fromNow>
                      {one.date}
                    </Moment>
                  </span>
                </Col>
              ))}
          </Row>
          <style>{`
        .highlightOnHover:hover,
        .highlightOnHover:focus {
          cursor: pointer;
          transform: translateY(-10px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease-out;
        }
      `}</style>
        </>
      )}
    </Container>
  );
};

export default Cards;
