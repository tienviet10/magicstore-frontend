import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Banner } from "./components/Banner";
import { Icon } from "./components/Icon";
import { CustomNav } from "./components/Navbar";
import { TicTacToe } from "./components/TicTacToe";

//test

function App() {
  return (
    <div className="App">
      <CustomNav />
      <Banner />
      <Icon />
      <TicTacToe />
    </div>
  );
}

export default App;
