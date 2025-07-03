import React from "react";

const AnimalForm = ({ updateMainCard }) => {
  const [value, setValue] = React.useState("")
  const hangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(text);

  const [errorMessage, setErrorMessage] = React.useState("")

  function handleInputChange(cap) {
    const userValue = cap.target.value;
    setValue(userValue.toUpperCase());
    if (hangul(userValue)) {
      setErrorMessage("한글은 입력할 수 없습니다.");
    }
    else {
      setErrorMessage("")
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (value === "") {
      setErrorMessage("빈 값은 추가할 수 없습니다.")
      return;
    }
    if (hangul(value)) {
      setErrorMessage("한글은 입력할 수 없습니다.");
      return;
    }

    setErrorMessage("")
    updateMainCard(value);
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="삽입할 Text를 입력하세요"
        onChange={handleInputChange}
        value={value}
      />
      <button type="submit">추가</button>
      <p style={{ color: "#f00" }}>{errorMessage}</p>
    </form>
  );
}

export default AnimalForm;
