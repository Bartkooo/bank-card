import Hover from "react-3d-hover"
import React, { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState('**** **** **** ****')
  const [name, setName] = useState('Name Surname')
  const [date, setDate] = useState('00-00')
  const [color, setColor] = useState('black')


  useEffect(() => {
    document.getElementById('card').style.backgroundColor = color
  }, [color])

  return (
    <div className="app center">
      <div className="container">
        <div className="form">
          <input placeholder="cardholder name" className="form-input" onChange={e => setName(e.target.value)} />
          <input placeholder="card number" className="form-input" maxLength={16} onChange={e => setNumber(e.target.value.toString().replace(/\d{4}(?=.)/g, '$& '))} />
          <input type="date" className="form-input" onChange={e => setDate(e.target.value)} />
          <form className="form-color">
            <h3>Choose color:</h3>
            <div>
              <input type="radio" name="card-color" value={'black'} onChange={e => setColor(e.target.value)} />
              <label>Black</label>
            </div>
            <div>
              <input type="radio" name="card-color" value={'blue'} onChange={e => setColor(e.target.value)} />
              <label>Blue</label>
            </div>
            <div>
              <input type="radio" name="card-color" value={'red'} onChange={e => setColor(e.target.value)} />
              <label>Red</label>
            </div>
          </form>
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
