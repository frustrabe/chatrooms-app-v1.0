import "./App.css";
import Login from "./components/Login";
import Scroll from "./components/ScrollWheel";

function App() {
  return (
    <Scroll>
      <div className="flexbox-container">
        <div className="App">
          <Login />
        </div>
      </div>
    </Scroll>
  );
}

export default App;
