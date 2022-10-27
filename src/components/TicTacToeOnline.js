import { useEffect, useRef, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import axios from "axios";
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
  const playerX = useRef([]);
  const playerO = useRef([]);
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
    const checkResult = (totalLen) => {
      let negRes = true;

      for (const answer of matchAnswer) {
        if (
          playerX.current.indexOf(answer[0]) > -1 &&
          playerX.current.indexOf(answer[1]) > -1 &&
          playerX.current.indexOf(answer[2]) > -1
        ) {
          setWinner("X");
          handleShow();
          resetAll();
          negRes = false;
          break;
        }
        if (
          playerO.current.indexOf(answer[0]) > -1 &&
          playerO.current.indexOf(answer[1]) > -1 &&
          playerO.current.indexOf(answer[2]) > -1
        ) {
          setWinner("O");
          handleShow();
          resetAll();
          negRes = false;
          break;
        }
      }

      if (negRes && totalLen === 9) {
        setWinner("N");
        handleShow();
        resetAll();
      }
    };

    if (socketRef.current === null) {
      fetchBoard();
      socketRef.current = new WebSocket("ws://127.0.0.1:8000/");
    }

    socketRef.current.onmessage = (e) => {
      const newData = JSON.parse(e.data);

      playerX.current = newData["playerX"];
      playerO.current = newData["playerO"];
      marker.current = newData["marker"];
      setMarkLocation(newData["marks"]);

      checkResult(playerX.current.length + playerO.current.length);
    };

    socketRef.current.onerror = (e) => {
      // console.log("error", e);
    };

    socketRef.current.onopen = (e) => {
      // console.log("open", e);
    };
  }, [handleShow, setWinner]);

  const fetchBoard = async () => {
    try {
      const response = await axios(
        "http://magicstore-api.up.railway.app/tictactoe"
      );
      playerX.current = response.data["PlayerX"];
      playerO.current = response.data["PlayerO"];
      marker.current = response.data["CurrentPlayer"];
      setMarkLocation(response.data["CurrentBoard"]);
    } catch (err) {
      console.error(err);
    }
  };

  const resetAll = () => {
    socketRef.current.send(
      JSON.stringify({
        marks: ["", "", "", "", "", "", "", "", ""],
        playerX: [],
        playerO: [],
        marker: "O",
      })
    );
  };

  const sendSocket = (newMarkLocation, playerX, playerO, marker) => {
    socketRef.current.send(
      JSON.stringify({
        marks: newMarkLocation,
        playerX: playerX,
        playerO: playerO,
        marker: marker,
      })
    );
  };

  const setNewMarker = (loc) => {
    if (
      marker.current === "X" &&
      !playerO.current.includes(loc) &&
      !playerX.current.includes(loc)
    ) {
      const newMarkLocation = markLocation.map((value, index) =>
        index === loc ? "X" : value
      );
      const playerXStore = [...playerX.current, loc];
      sendSocket(newMarkLocation, playerXStore, playerO.current, "O");
    } else if (
      !playerX.current.includes(loc) &&
      !playerO.current.includes(loc)
    ) {
      const newMarkLocation = markLocation.map((value, index) =>
        index === loc ? "O" : value
      );
      const playerOStore = [...playerO.current, loc];
      sendSocket(newMarkLocation, playerX.current, playerOStore, "X");
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
