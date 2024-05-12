import { useState } from "react"

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 1500,
    expectedReturn: 6,
    duration: 10
  })

  function handelChange(inputIdentifier, newValue) {
    setUserInput(prevInput => ({
      ...prevInput,
      [inputIdentifier]: newValue === 0 ? '' : newValue,
    }));
  }

  return (
    <section id="user-input">

      <div className="input-group">
        <label>Initial Investment ($)
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) => handelChange('initialInvestment', + event.target.value)}
          />
        </label>
        <label>Annual Investment ($)
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) => handelChange('annualInvestment', + event.target.value)}
          />
        </label>
      </div>

      <div className="input-group">
        <label> Expected Interest (%, Per Year)
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => handelChange('expectedReturn', + event.target.value)}
          />
        </label>
        <label>Investment Duration (Years)
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => handelChange('duration', + event.target.value)}
          />
        </label>
      </div>

    </section>
  )
};
