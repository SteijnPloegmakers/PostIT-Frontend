import './App.css';
import Router from "./router";
import {PivotBasicExample} from "./Components/Shared/header";

function App() {
  return (
    <div className="App">
        <PivotBasicExample/>
      <div className="content">
        <Router/>
      </div>
    </div>
  );
}

export default App;
