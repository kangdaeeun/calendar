import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const DetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  max-width: 800px;
  width: 100%;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  input {
    width: 100%;
  }
`;

const DetailButton = styled.div`
  display: flex;
  color: white;
  border: none;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  button1 {
    border-radius: 3px;
    background-color: blue;
  }

  button2 {
    border-radius: 3px;
    background-color: red;
  }

  button3 {
    border-radius: 3px;
    background-color: gray;
  }
`;

const Detail = () => {
  const { id } = useParams();

  // 수정 때 필요한 데이터 state
  const [editingDate, setEditingDate] = useState(expense.date);
  const [editingItem, setEditingItem] = useState(expense.item);
  const [editingAmount, setEditingAmount] = useState(expense.amount);
  const [editingDescription, setEditingDescription] = useState(
    expense.description
  );

  useEffect(() => {
    fetch()
  }, []);

  // 수정
  const handleEditClick = () => {
    setEditingDate("");
    setEditingItem("");
    setEditingAmount("");
    setEditingDescription("");
  };

  // 수정 취소
  const handleCancelEdit = (expense) => {
    setEditingDate(expense.date);
    setEditingItem(expense.item);
    setEditingAmount(expense.amount);
    setEditingDescription(expense.description);
  };

  const handleEditDateChange = (e) => {
    setEditingDate(e.target.value);
  };

  const handleEditItemChange = (e) => {
    setEditingItem(e.target.value);
  };

  const handleEditAmount = (e) => {
    setEditingAmount(e.target.value);
  };

  const handleEditDescription = (e) => {
    setEditingDescription(e.target.value);
  };

  // 저장
  const handleSaveEdit = async () => {
    const { data, error } = await supabase
      .from("expenses")
      .update({
        date: editingDate,
        item: editingItem,
        amount: editingAmount,
        description: editingDescription,
      })
      .eq("id", expenses.id)
      .select();
    if (error) {
      return alert(error.message);
    }
    setExpenses(
      expenses.map((expense) => (expense.id === id ? data[0] : expense))
    );
    setEditingDate("");
    setEditingItem("");
    setEditingAmount("");
    setEditingDescription("");
  };

  // 삭제
  const handleDeleteClick = async () => {
    const { error } = await supabase.from("expenses").delete().eq("id", id);
    if (error) {
      return alert(error.message);
    }
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <Section>
      <DetailStyle>
        <label>
          날짜
          <input
            type="text"
            id="date"
            value={editingDate}
            onChange={handleEditDateChange}
            placeholder="YYYY-MM-DD"
          />
        </label>
        <label>
          항목
          <input
            type="text"
            id="item"
            value={editingItem}
            onChange={handleEditItemChange}
            placeholder="지출 항목"
          />
        </label>
        <label>
          금액
          <input
            type="number"
            id="amount"
            value={editingAmount}
            onChange={handleEditAmount}
            placeholder="지출 금액"
          />
        </label>
        <label>
          내용
          <input
            type="text"
            id="description"
            value={editingDescription}
            onChange={handleEditDescription}
            placeholder="지출 내용"
          />
        </label>
        <DetailButton>
          {expense.id === id ? (
            <>
              <button onClick={handleSaveEdit}>저장</button>
              <button onClick={handleCancelEdit}>취소</button>
            </>
          ) : (
            <>
              <button1 onClick={() => handleEditClick(expenses)}>수정</button1>
              <button2 onClick={() => handleDeleteClick(expenses.id)}>
                삭제
              </button2>
            </>
          )}
          <button3>
            <Link to={"/"}>뒤로 가기</Link>
          </button3>
        </DetailButton>
      </DetailStyle>
    </Section>
  );
};

export default Detail;
