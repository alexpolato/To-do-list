import "./App.css";
import React, { useState } from "react";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [list, setList] = useState([]);
  
  

  return (
    <div className="container">
      <div className="title">What's the plan for today?</div>

      <div className="inputContainer">
        <input
          value={inputItem}
          onChange={(e) => setInputItem(e.target.value)}
          className="input"
        />
        <button
          className="button"
          onClick={() => {
            setInputItem("");
            setList([...list, inputItem]);
          }}
        >
          Add
        </button>
      </div>

      {list.map((item, index) => {
        return (
          <div key={index} className="cardContainer">
            <div className="cardTitle">{item}</div>

            <button className="buttonX" 
              onClick={() => {
                setList([
                  ...list.slice(0, index),
                  ...list.slice(index + 1)
                ]);
              }}
            >
              x
            </button>
          </div>
        );
      })}
      <button className="delete"
        onClick={() => {
          setInputItem("");
          setList([]);
        }}
      >
        Delete All
      </button>
    </div>
    
  );
}

export default App;
