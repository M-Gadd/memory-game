import React, { useState, useEffect } from "react";

import ReactCardFlip from "react-card-flip";
import { Card } from "reactstrap";
export interface FlippingCardProps {
  allFlipped: boolean;
  num: Number;
  setUserChoice: any;
}

const FlippingCard: React.SFC<FlippingCardProps> = ({
  allFlipped,
  num,
  setUserChoice,
}) => {
  const [isFlipped, setIsFlipped] = useState(true);

  const handleFlip = (event?: any) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
    setUserChoice((userChoice: any) => [...userChoice, { num, date: new Date() }]);
  };

  useEffect(() => {
    setIsFlipped(!isFlipped);
  }, [allFlipped]);

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Card className=" highlightOnHover m-2 p-4 text-center">
          <h1>{num}</h1>
        </Card>

        <Card
          onClick={(e) => handleFlip(e)}
          style={{ height: "15vh" }}
          className=" highlightOnHover m-2 p-4 text-center"
        ></Card>
      </ReactCardFlip>
    </>
  );
};

export default FlippingCard;
