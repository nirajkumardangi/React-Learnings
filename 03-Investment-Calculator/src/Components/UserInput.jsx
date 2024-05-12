export default function UserInput({onInputChange, userInput}) {
  return (
    <section id="user-input">

      <div className="input-group">
        <label>Initial Investment ($)
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) => onInputChange('initialInvestment', + event.target.value)}
          />
        </label>
        <label>Annual Investment ($)
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) => onInputChange('annualInvestment', + event.target.value)}
          />
        </label>
      </div>

      <div className="input-group">
        <label> Expected Interest (%, Per Year)
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => onInputChange('expectedReturn', + event.target.value)}
          />
        </label>
        <label>Investment Duration (Years)
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onInputChange('duration', + event.target.value)}
          />
        </label>
      </div>

    </section>
  )
};
