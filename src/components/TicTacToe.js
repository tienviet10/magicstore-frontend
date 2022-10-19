import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const matchAnswer = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const TicTacToe = ({ handleShow, setWinner }) => {
  const [marker, setMarker] = useState("O");
  const [playerOne, setPlayerOne] = useState([]);
  const [playerTwo, setPlayerTwo] = useState([]);
  const [markLocation, setMarkLocation] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  useEffect(() => {
    const resetAll = () => {
      setMarkLocation(["", "", "", "", "", "", "", "", ""]);
      setPlayerOne([]);
      setPlayerTwo([]);
      setMarker("O");
    };
    for (const answer of matchAnswer) {
      if (
        playerOne.indexOf(answer[0]) > -1 &&
        playerOne.indexOf(answer[1]) > -1 &&
        playerOne.indexOf(answer[2]) > -1
      ) {
        setWinner("X");
        handleShow();
        resetAll();
        break;
      }
      if (
        playerTwo.indexOf(answer[0]) > -1 &&
        playerTwo.indexOf(answer[1]) > -1 &&
        playerTwo.indexOf(answer[2]) > -1
      ) {
        setWinner("O");
        handleShow();
        resetAll();
        break;
      }
    }

    if (playerOne.length + playerTwo.length === 9) {
      setWinner("N");
      handleShow();
      resetAll();
    }
  }, [playerOne, playerTwo, handleShow, setWinner]);

  const setNewMarker = (loc) => {
    if (
      marker === "X" &&
      !playerTwo.includes(loc) &&
      !playerOne.includes(loc)
    ) {
      setMarker("O");
      setMarkLocation((locs) =>
        locs.map((value, index) => (index === loc ? "X" : value))
      );
      setPlayerOne((loc1) => [...loc1, loc]);
    } else if (!playerOne.includes(loc) && !playerTwo.includes(loc)) {
      setMarker("X");
      setMarkLocation((locs) =>
        locs.map((value, index) => (index === loc ? "O" : value))
      );
      setPlayerTwo((loc2) => [...loc2, loc]);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className="border col-md-1 p-1">
          <button
            className="button-first w-100 border-0 bg-none bg-transparent"
            style={{
              color:
                markLocation[0] === ""
                  ? "#FFFFFF"
                  : markLocation[0] === "X"
                  ? "#DC143C"
                  : "#4B0082",
            }}
            onClick={() => setNewMarker(0)}
          >
            {markLocation[0] === "" ? "N" : markLocation[0]}
          </button>
        </Col>
        <Col className="border col-md-1 p-1">
          <button
            className="button-first w-100 border-0 bg-none bg-transparent"
            style={{
              color:
                markLocation[1] === ""
                  ? "#FFFFFF"
                  : markLocation[1] === "X"
                  ? "#DC143C"
                  : "#4B0082",
            }}
            onClick={() => setNewMarker(1)}
          >
            {markLocation[1] === "" ? "N" : markLocation[1]}
          </button>
        </Col>
        <Col className="border col-md-1 p-1">
          <button
            className="button-first w-100 border-0 bg-none bg-transparent"
            style={{
              color:
                markLocation[2] === ""
                  ? "#FFFFFF"
                  : markLocation[2] === "X"
                  ? "#DC143C"
                  : "#4B0082",
            }}
            onClick={() => setNewMarker(2)}
          >
            {markLocation[2] === "" ? "N" : markLocation[2]}
          </button>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="border col-md-1 p-1">
          <button
            className="button-first w-100 border-0 bg-none bg-transparent"
            style={{
              color:
                markLocation[3] === ""
                  ? "#FFFFFF"
                  : markLocation[3] === "X"
                  ? "#DC143C"
                  : "#4B0082",
            }}
            onClick={() => setNewMarker(3)}
          >
            {markLocation[3] === "" ? "N" : markLocation[3]}
          </button>
        </Col>
        <Col className="border col-md-1 p-1">
          <button
            className="button-first w-100 border-0 bg-none bg-transparent"
            style={{
              color:
                markLocation[4] === ""
                  ? "#FFFFFF"
                  : markLocation[4] === "X"
                  ? "#DC143C"
                  : "#4B0082",
            }}
            onClick={() => setNewMarker(4)}
          >
            {markLocation[4] === "" ? "N" : markLocation[4]}
          </button>
        </Col>
        <Col className="border col-md-1 p-1">
          <button
            className="button-first w-100 border-0 bg-none bg-transparent"
            style={{
              color:
                markLocation[5] === ""
                  ? "#FFFFFF"
                  : markLocation[5] === "X"
                  ? "#DC143C"
                  : "#4B0082",
            }}
            onClick={() => setNewMarker(5)}
          >
            {markLocation[5] === "" ? "N" : markLocation[5]}
          </button>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="border col-md-1 p-1">
          <button
            className="button-first w-100 border-0 bg-none bg-transparent"
            style={{
              color:
                markLocation[6] === ""
                  ? "#FFFFFF"
                  : markLocation[6] === "X"
                  ? "#DC143C"
                  : "#4B0082",
            }}
            onClick={() => setNewMarker(6)}
          >
            {markLocation[6] === "" ? "N" : markLocation[6]}
          </button>
        </Col>
        <Col className="border col-md-1 p-1">
          <button
            className="button-first w-100 border-0 bg-none bg-transparent"
            style={{
              color:
                markLocation[7] === ""
                  ? "#FFFFFF"
                  : markLocation[7] === "X"
                  ? "#DC143C"
                  : "#4B0082",
            }}
            onClick={() => setNewMarker(7)}
          >
            {markLocation[7] === "" ? "N" : markLocation[7]}
          </button>
        </Col>
        <Col className="border col-md-1 p-1">
          <button
            className="button-first w-100 border-0 bg-none bg-transparent"
            style={{
              color:
                markLocation[8] === ""
                  ? "#FFFFFF"
                  : markLocation[8] === "X"
                  ? "#DC143C"
                  : "#4B0082",
            }}
            onClick={() => setNewMarker(8)}
          >
            {markLocation[8] === "" ? "N" : markLocation[8]}
          </button>
        </Col>
      </Row>
    </Container>
  );
};
