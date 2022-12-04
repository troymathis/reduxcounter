import './App.css';
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  logIn,
  logOut,
} from "./redux/actions/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="App">
        <h1>Counter</h1>
        <h3>{counter}</h3>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>

        <h2>User Login</h2>
        <button onClick={() => dispatch(logIn())}>LogIn</button>
        <button onClick={() => dispatch(logOut())}>LogOut</button>

        {auth ? (
          <div>
            <p>
              As a user, I'm Logged In!
            </p>
          </div>
        ) : (
          <div>
            <p>Not in the mainframe :/ </p>
          </div>
        )}
    </div>
  );
}

export default App;
