
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { CustomNav } from './components/Navbar';
import { Banner } from './components/Banner';
import { Icon } from './components/Icon';

//test

function App() {
  return (
    <div className="App">
      <CustomNav />
      <Banner />
      <Icon />
    </div>
  );
}

export default App;
