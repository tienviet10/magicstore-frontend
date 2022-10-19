import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export const TicTacToe = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className="border">
          <button className="w-100 h-100 border-0 bg-none bg-transparent"></button>
        </Col>
        <Col className="border">
          <button className="w-100 h-100 border-0 bg-none bg-transparent"></button>
        </Col>
        <Col className="border">
          <button className="w-100 h-100 border-0 bg-none bg-transparent"></button>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="border">2</Col>
        <Col className="border">2</Col>
        <Col className="border">2</Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="border">2</Col>
        <Col className="border">2</Col>
        <Col className="border">2</Col>
      </Row>
    </Container>
  );
};
