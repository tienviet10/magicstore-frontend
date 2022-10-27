import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { Icon } from "./components/Icon";
import { CustomNav } from "./components/Navbar";
import { TicTacToe } from "./components/TicTacToe";
import { UserConfirmationModal } from "./components/UserConfirmationModal";

//test

function App() {
  const [show, setShow] = useState(false);
  const [winner, setWinner] = useState("NA");
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <UserConfirmationModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        winner={winner}
      />
      <CustomNav />
      <Banner />
      <Icon />
      <br />
      <TicTacToe handleShow={handleShow} setWinner={setWinner} />
      <br />
      {/* <TicTacToeOnline handleShow={handleShow} setWinner={setWinner} />
      <br /> */}
    </div>
  );
}

export default App;
