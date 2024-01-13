function FormInput({form, optionsArray, handleForm, value}) {
  return (
    <div className="label-input-div">
      <label>Select a Tag </label>
      <select name={value} value={value} onChange={handleForm}>
        <option></option>
        {optionsArray.map((option) => (
          <option value={value}>{option}</option>
        ))}
      </select>
    </div>
  );
}
export default FormInput
