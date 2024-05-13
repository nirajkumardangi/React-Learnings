import { useState } from "react";
import Header from './Components/Header.jsx';
import UserInput from './Components/UserInput.jsx';
import Result from './Components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 1500,
    expectedReturn: 6,
    duration: 10
  })

  const inputIsValid = userInput.duration >= 1;

  function handelChange(inputIdentifier, newValue) {
    setUserInput(prevInput => ({
      ...prevInput,
      [inputIdentifier]: (newValue === 0) ? '' : newValue,
    }));
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onInputChange={handelChange} />
      {!inputIsValid && (
        <p className="center">Plz Enter duration greater than zero.</p>
      )}
      {inputIsValid && <Result input={userInput} />}
    </>
  );
}

export default App;
