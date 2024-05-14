export default function CustomInput({ label, invalid, ...props }) {
  return <p>
    <label invalid={invalid} >{label}</label>
    <input invalid={invalid} {...props} />
  </p>
}