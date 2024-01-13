function FormInput({ optionsArray, handleForm, value, label, name}) {
  return (
    <div className="label-input-div">
      <label>Select a {label} </label>
      <select name={name} value={value} onChange={handleForm}>
        <option></option>
        {optionsArray.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
export default FormInput
