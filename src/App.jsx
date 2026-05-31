import { useState } from 'react';
import './App.css';
function ResultRow(props) {
  return (
    <div className="result-row">
      <span>
        {props.label}
      </span>
      <span>
        {props.value}
      </span>
    </div>
  );
}


function App() {
  const [bill, setBill] = useState("");
  const [selectedTip, setSelectedTip] = useState(null);
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");

  const b = parseFloat(bill);
  const t = customTip !== "" ? parseFloat(customTip) : parseFloat(selectedTip) ?? 0;
  const p = parseFloat(people);  
  const isValid = !isNaN(b) && !isNaN(t) && !isNaN(p) && b > 0  && p >= 1 && t >= 0;

  const tipAmount = isValid ? b * (t / 100) : 0;
  const grandTotal = isValid ? b + tipAmount : 0;
  const perPerson = isValid ? grandTotal / p : 0;

  const billError = bill !== "" &&  (b <= 0 || isNaN(b)) ? "Bill must be greater than 0" : "";
  const tipError = customTip !== "" && (parseFloat(customTip) < 0 || parseFloat(customTip) > 100) ? "Tip must be between 0 and 100" : "";
    const peopleError = people !== "" &&  (p <= 0 || isNaN(p)) ? "People must be 1" : "";
  

  const reset = () => {
      setBill("");
      setSelectedTip(null);
      setCustomTip("");
      setPeople("");
    };

  const handlePreset = (value) => {
    setSelectedTip(value);
    setCustomTip("");
  };
  
  const handleCustom = (e) => {
    setCustomTip(e.target.value);
    setSelectedTip(null);
  };
  
  return (
    <div className="calculator">
      <h1>Tip Calculator</h1>
      <div className="layout">
        <div className="inputs">
          <input type="number" placeholder="Bill" value={bill} onChange={(e) => setBill(e.target.value)} />
          {billError && <p className="error">{billError}</p>}  
          <div className="tip-buttons">
            <p>Tip Amount</p>
            <button className={selectedTip === 5  ? "active" : ""} onClick={() => handlePreset(5)}>5%</button>
            <button className={selectedTip === 10 ? "active" : ""} onClick={() => handlePreset(10)}>10%</button>
            <button className={selectedTip === 15 ? "active" : ""} onClick={() => handlePreset(15)}>15%</button>
          </div>
          <input 
            type="number" 
            placeholder="Custom %" 
            value={customTip} 
            onChange={handleCustom} 
          />  
          <input type="number" placeholder="People" value={people} onChange={(e) => setPeople(e.target.value)} />
          {peopleError && <p className="error">{peopleError}</p>}  
          <button className="button" onClick={reset}>Reset</button>
        </div>
        <div className="results">
          <ResultRow label="Tip Amount" value= {tipAmount.toFixed(2)} />
          <ResultRow label="Grand Total" value={grandTotal.toFixed(2)} />
          <ResultRow label="Per Person" value={perPerson.toFixed(2)} />
        </div>
      </div>
    </div>
  );
}

export default App;

