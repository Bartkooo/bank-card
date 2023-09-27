import Hover from "react-3d-hover"
import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState('**** **** **** ****')
  const [name, setName] = useState('Name Surname')
  const [date, setDate] = useState('00-00')

  return (
    <div className="app center">
      <div className="container">
        <div className="form">
          <input placeholder="cardholder name" className="form-input" onChange={e => setName(e.target.value)} />
          <input placeholder="card number" className="form-input" onChange={e => setNumber(e.target.value)} />
          <input type="date" className="form-input" onChange={e => setDate(e.target.value)} />
          <div className="form-color">
            <h3>Choose color:</h3>
            <div>
              <input type="radio" name="card-color" />
              <label>Black</label>
            </div>
            <div>
              <input type="radio" name="card-color" />
              <label>Blue</label>
            </div>
            <div>
              <input type="radio" name="card-color" />
              <label>Red</label>
            </div>
          </div>
        </div>

        <div className="center">
          <Hover max={50} speed={1000} scale={1.2}>
            <div id="card">
              <div className="card-bank">Bank</div>
              <img src="chip.png" className="card-chip" alt=""></img>
              <div className="card-number">{number}</div>
              <div className="card-user">
                <div className="card-name">{name}</div>
                <div className="card-date">{date.split("-")[1]}/{date.split("-")[0].slice(-2)}</div>
              </div>
            </div>
          </Hover>
        </div>
      </div>
    </div>
  );
}

export default App;
