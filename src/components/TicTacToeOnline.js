import { useEffect, useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import React from "react";

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

export const TicTacToeOnline = ({ handleShow, setWinner }) => {
  const socketRef = useRef(null);
  const marker = useRef("O");
  const playerOne = useRef([]);
  const playerTwo = useRef([]);
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

  const countRef = useRef(0);
  const countSendRef = useRef(0);

  const resetAll = () => {
    setMarkLocation(["", "", "", "", "", "", "", "", ""]);
    playerOne.current = [];
    playerTwo.current = [];
    marker.current = "O";
  };

  useEffect(() => {
    let res = 0;
    if (socketRef.current === null) {
      socketRef.current = new WebSocket("ws://127.0.0.1:8000/");
    }
    socketRef.current.onopen = (e) => {
      if (res === 9) {
        socketRef.current.send(
          JSON.stringify({
            marks: ["", "", "", "", "", "", "", "", ""],
            player1: [],
            player2: [],
            marker: "O",
          })
        );
      }
    };

    socketRef.current.onmessage = (e) => {
      const newData = JSON.parse(e.data);

      res = newData["marks"].reduce((acc, val) => {
        return (acc += val === "X" || val === "O" ? 1 : 0);
      }, 0);

      playerOne.current = newData["player1"];
      playerTwo.current = newData["player2"];
      marker.current = newData["marker"];
      setMarkLocation(newData["marks"]);

      countRef.current = countRef.current + 1;
      console.log(countRef.current);

      if (res !== 9) {
        for (const answer of matchAnswer) {
          if (
            playerOne.current.indexOf(answer[0]) > -1 &&
            playerOne.current.indexOf(answer[1]) > -1 &&
            playerOne.current.indexOf(answer[2]) > -1
          ) {
            setWinner("X");
            handleShow();
            resetAll();
            break;
          }
          if (
            playerTwo.current.indexOf(answer[0]) > -1 &&
            playerTwo.current.indexOf(answer[1]) > -1 &&
            playerTwo.current.indexOf(answer[2]) > -1
          ) {
            setWinner("O");
            handleShow();
            resetAll();
            break;
          }
        }
      } else {
        setWinner("N");
        handleShow();
        resetAll();
      }
    };

    socketRef.current.onerror = (e) => {
      // console.log("error", e);
    };
  }, [handleShow, setWinner]);

  const sendSocket = (newMarkLocation, player1, player2, marker) => {
    countSendRef.current = countSendRef.current + 1;
    console.log("countSendRef: " + countSendRef.current);
    socketRef.current.send(
      JSON.stringify({
        marks: newMarkLocation,
        player1: player1,
        player2: player2,
        marker: marker,
      })
    );
  };

  const setNewMarker = (loc) => {
    if (
      marker.current === "X" &&
      !playerTwo.current.includes(loc) &&
      !playerOne.current.includes(loc)
    ) {
      const newMarkLocation = markLocation.map((value, index) =>
        index === loc ? "X" : value
      );
      const player1 = [...playerOne.current, loc];
      sendSocket(newMarkLocation, player1, playerTwo.current, "O");
    } else if (
      !playerOne.current.includes(loc) &&
      !playerTwo.current.includes(loc)
    ) {
      const newMarkLocation = markLocation.map((value, index) =>
        index === loc ? "O" : value
      );
      const player2 = [...playerTwo.current, loc];
      sendSocket(newMarkLocation, playerOne.current, player2, "X");
    }
  };

  return (
    <Container>
      <Row>Online game:</Row>
      <Row className="justify-content-md-center">
        <Col className="col-md-1 p-1">
          <button
            className="button-first w-100 border-0 bg-none bg-transparent"
            style={{
              color:
                markLocation[0] === ""
                  ? "#FFFFFF"
                  : markLocation[0] === "X"
                  ? "#DC143C"
                  : "#234F1E",
            }}
            onClick={() => setNewMarker(0)}
          >
            {markLocation[0] === "" ? "N" : markLocation[0]}
          </button>
        </Col>
        <Col className="border-start border-end border-2 border-primary col-md-1 p-1">
          <button
            className="button-first w-100 border-0 bg-none bg-transparent"
            style={{
              color:
                markLocation[1] === ""
                  ? "#FFFFFF"
                  : markLocation[1] === "X"
                  ? "#DC143C"
                  : "#234F1E",
            }}
            onClick={() => setNewMarker(1)}
          >
            {markLocation[1] === "" ? "N" : markLocation[1]}
          </button>
        </Col>
        <Col className="col-md-1 p-1">
          <button
            className="button-first w-100 border-0 bg-none bg-transparent"
            style={{
              color:
                markLocation[2] === ""
                  ? "#FFFFFF"
                  : markLocation[2] === "X"
                  ? "#DC143C"
                  : "#234F1E",
            }}
            onClick={() => setNewMarker(2)}
          >
            {markLocation[2] === "" ? "N" : markLocation[2]}
          </button>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="border-top border-bottom border-primary border-2 col-md-1 p-1">
          <button
            className="button-first w-100 border-0 bg-none bg-transparent"
            style={{
              color:
                markLocation[3] === ""
                  ? "#FFFFFF"
                  : markLocation[3] === "X"
                  ? "#DC143C"
                  : "#234F1E",
            }}
            onClick={() => setNewMarker(3)}
          >
            {markLocation[3] === "" ? "N" : markLocation[3]}
          </button>
        </Col>
        <Col className="border border-primary border-2 col-md-1 p-1">
          <button
            className="button-first w-100 border-0 bg-none bg-transparent"
            style={{
              color:
                markLocation[4] === ""
                  ? "#FFFFFF"
                  : markLocation[4] === "X"
                  ? "#DC143C"
                  : "#234F1E",
            }}
            onClick={() => setNewMarker(4)}
          >
            {markLocation[4] === "" ? "N" : markLocation[4]}
          </button>
        </Col>
        <Col className="border-top border-bottom border-primary border-2 col-md-1 p-1">
          <button
            className="button-first w-100 border-0 bg-none bg-transparent"
            style={{
              color:
                markLocation[5] === ""
                  ? "#FFFFFF"
                  : markLocation[5] === "X"
                  ? "#DC143C"
                  : "#234F1E",
            }}
            onClick={() => setNewMarker(5)}
          >
            {markLocation[5] === "" ? "N" : markLocation[5]}
          </button>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="col-md-1 p-1">
          <button
            className="button-first w-100 border-0 bg-none bg-transparent"
            style={{
              color:
                markLocation[6] === ""
                  ? "#FFFFFF"
                  : markLocation[6] === "X"
                  ? "#DC143C"
                  : "#234F1E",
            }}
            onClick={() => setNewMarker(6)}
          >
            {markLocation[6] === "" ? "N" : markLocation[6]}
          </button>
        </Col>
        <Col className="border-start border-end border-primary border-2 col-md-1 p-1">
          <button
            className="button-first w-100 border-0 bg-none bg-transparent"
            style={{
              color:
                markLocation[7] === ""
                  ? "#FFFFFF"
                  : markLocation[7] === "X"
                  ? "#DC143C"
                  : "#234F1E",
            }}
            onClick={() => setNewMarker(7)}
          >
            {markLocation[7] === "" ? "N" : markLocation[7]}
          </button>
        </Col>
        <Col className="col-md-1 p-1">
          <button
            className="button-first w-100 border-0 bg-none bg-transparent"
            style={{
              color:
                markLocation[8] === ""
                  ? "#FFFFFF"
                  : markLocation[8] === "X"
                  ? "#DC143C"
                  : "#234F1E",
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
