import { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import supabase from "../utils/supabase";

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

const CreateExpense = ({ expenses, setExpenses }) => {
  // input에 입력한 값을 저장하는 state
  // 여러 개를 하나의 state에 넣으려고 함
  // state 하나로 만들어서 인풋에 값을 넣는데 4개 인풋값이 똑같이 쳐짐
  // 4개 다시 따로 만들거나 하나로 할 수 있는 방법이 있는지.. 알아보겠음
  const [expenseDetail, setExpenseDetail] = useState([]);

  // 추가할 때 실행할 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("expenses").insert("*");
    setExpenses([...expenses, ...data]);
  };

  // expenseDetail state 변경 함수
  const handleExpenseDetailChange = (e) => {
    setExpenseDetail(e.target.value);
  };

  return (
    <CreateStyle>
      <form onSubmit={handleSubmit}>
        <label>
          날짜
          <input type="text" value={expenseDetail} onChange={handleExpenseDetailChange} placeholder="YY-MM-DD" />
        </label>
        <label>
          항목
          <input type="text" value={expenseDetail} onChange={handleExpenseDetailChange} placeholder="지출 항목" />
        </label>
        <label>
          금액
          <input type="number" value={expenseDetail} onChange={handleExpenseDetailChange} placeholder="지출 금액" />
        </label>
        <label>
          내용
          <input type="text" value={expenseDetail} onChange={handleExpenseDetailChange} placeholder="지출 내용" />
        </label>
        <button>저장</button>
      </form>
    </CreateStyle>
  );
};

export default CreateExpense;
