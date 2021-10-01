import "./InputField.css";

const InputField2 = ({
  value,
  placeholder,
  onChange,
}) => {

  const handleKeyPress = (event) => {
    const charAllowed = new RegExp('^[2-9]+$')
    if (!charAllowed.test(event.key)) {
      event.preventDefault()
    }
  }

  return (
    <div>
      <h3>Enter number</h3>
      <div
        className="input"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      >
      </div>
    </div >

  )

}

export default InputField2;