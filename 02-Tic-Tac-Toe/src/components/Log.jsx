export default function Log({ turns }) {
  console.log(turns);
  return (
    <ol id="log">
      {turns.map((turn, turnIndex) => (
        <li key={'${turn.square.row}${turn.square.col}'}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  )
}