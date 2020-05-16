import React from "react";
import { Container, Row, Col, Card } from "reactstrap";

export interface EndGameProps {
  status: string;
}

const EndGame: React.SFC<EndGameProps> = ({ status }) => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className="text-center mt-5 p-5">
              {status === "won" ? <h1>YOU WIN</h1> : <h1>YOU LOST</h1>}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default EndGame;
