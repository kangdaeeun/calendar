import styled from "styled-components";

const CreateStyle = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  button {
    background-color: skyblue;
    border: none;
  }
`;

const CreateExpense = () => {
  return (
    <CreateStyle>
      <label>
        날짜
        <input type="text" placeholder="YY-MM-DD" />
      </label>
      <label>
        항목
        <input type="text" placeholder="지출 항목" />
      </label>
      <label>
        금액
        <input type="number" placeholder="지출 금액" />
      </label>
      <label>
        내용
        <input type="text" placeholder="지출 내용" />
      </label>
      <button>저장</button>
    </CreateStyle>
  );
};

export default CreateExpense;
