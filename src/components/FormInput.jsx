function FormInput({ optionsArray, handleForm, value, label, name}) {
  return (
    <div className="label-input-div">
      <label>Select a {label} </label>
      <select name={name} value={value} onChange={handleForm}>
        <option></option>
        {optionsArray.map((option, index) => (
          <option value={option} key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}
export default FormInput
