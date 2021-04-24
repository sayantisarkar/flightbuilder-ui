import './App.css';
import React, {useState} from "react";
import ReactDOM from 'react-dom';
import ConnectingFlights from './components/ConnectingFlights';



function App() {

  const [depAirport, setDepAirport] = useState([]);
  const [arrAirport, setArrAirport] = useState([]);


  const handleDepChange = (e) =>{
    setDepAirport(e.target.value);
  }
  const handleArrChange = (e) =>{
    setArrAirport(e.target.value);
  }
  const handleClick = ()=>{
   console.log("clicked");
   return <ConnectingFlights/>;
  }
  return (
    <div>
      <label>
      From Airport
      <input type="text" name="fromAirport" value={depAirport} onChange={handleDepChange}/>
      </label>
      <label>
       To Airport
      <input type="text" name="toAirport" value={arrAirport} onChange={handleArrChange}/>
      </label> 
      <input type="submit" value= "Submit" onClick={handleClick}/>
    </div>
  );
}

export default App;
