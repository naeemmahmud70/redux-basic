import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decNumber, False, incNumber, True } from "./States/actions";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const statusState = useSelector((state) => state.changeStatus);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div class="container">
          <h1>Increment/Decrement counter and Toggle</h1>
          <h4>using React and Redux</h4>

          <div class="quantity">
            <a
              class="quantity__minus"
              title="Decrement"
              onClick={() => dispatch(decNumber())}
            >
              <span>-</span>
            </a>
            <input
              name="quantity"
              type="text"
              class="quantity__input"
              value={myState}
            />
            <a
              class="quantity__plus"
              title="Increment"
              onClick={() => dispatch(incNumber(10))}
            >
              <span>+</span>
            </a>
          </div>
          <div class="quantity">
            <a
              class="quantity__minus"
              title="Decrement"
              onClick={() => dispatch(False())}
            >
              <span>off</span>
            </a>
            <input
              name="quantity"
              type="text"
              class="quantity__input"
              value={statusState ? "Active" : "Deactive"}
            />
            <a
              class="quantity__plus"
              title="Increment"
              onClick={() => dispatch(True())}
            >
              <span>on</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
