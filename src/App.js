import './App.css';
import Scroll from './components/ScrollWheel';

function App() {
  return (
    <Scroll>
      <div className='flexbox-container'>
        <div className="App">
          Welcome to the chat app.
          If you are logged in, you can go to /chatrooms, else go and /login.
        </div>
      </div>
    </Scroll>
  );
}

export default App;
