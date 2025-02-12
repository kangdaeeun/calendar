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
  // 데이터 초기 설정하기
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  // 입력한 값
  const onChangeDate = (e) => {
    setDate(e.target.value);
  };
  const onChangeItem = (e) => {
    setItem(e.target.value);
  };
  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onSubmit = async (e) => {
    // 새로고침 방지
    e.preventDefault();

    // 미리 체크 후 데이터 보내기
    const dateReg = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateReg.test(date)) {
      alert("날짜 형식이 올바르지 않습니다.");
      return;
    }

    if (item === "") {
      alert("항목을 입력해주세요");
      return;
    }
    if (amount === "") {
      alert("금액을 입력해주세요");
      return;
    }
    if (description === "") {
      alert("내용을 입력해주세요");
      return;
    }

    // supabase에 값 넣기
    const { data, error } = await supabase
      .from("expenses")
      .insert({ date, item, amount, description })
      .select();

    // 입력한 값 바로 렌더링하기
    setExpenses([...expenses, ...data]);

    // 초기화 설정
    setDate("");
    setItem("");
    setAmount("");
    setDescription("");
  };

  return (
    <CreateStyle>
      <form onSubmit={onSubmit}>
        <label>
          날짜
          <input
            type="text"
            id="date"
            value={date}
            onChange={onChangeDate}
            placeholder="YYYY-MM-DD"
          />
        </label>
        <label>
          항목
          <input
            type="text"
            id="item"
            value={item}
            onChange={onChangeItem}
            placeholder="지출 항목"
          />
        </label>
        <label>
          금액
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={onChangeAmount}
            placeholder="지출 금액"
          />
        </label>
        <label>
          내용
          <input
            type="text"
            id="description"
            value={description}
            onChange={onChangeDescription}
            placeholder="지출 내용"
          />
        </label>
        <button>저장</button>
      </form>
    </CreateStyle>
  );
};

export default CreateExpense;
