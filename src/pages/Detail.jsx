import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import supabase from "../utils/supabase";

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
  const navigate = useNavigate();

  // url에서 id 가져오기
  const { id } = useParams();
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

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

  // id를 이용해서 데이터 가져오기
  useEffect(() => {
    const fetchExpense = async () => {
      const { data, error } = await supabase
        .from("expenses")
        .select("*")
        .eq("id", id);

      if (error) {
        return alert("데이터를 불러오는 중 에러가 발생했습니다.");
      }

      setDate(data[0].date);
      setItem(data[0].item);
      setAmount(data[0].amount);
      setDescription(data[0].description);
    };
    fetchExpense();
  }, []);

  // 수정
  const onEdit = async () => {
    // data가 유효한지
    // item에 글을 작성했는지....
    if (!date || !item || !amount || !description) {
      return alert("모든 항목을 작성해주세요.");
    }

    // 미리 체크 후 데이터 보내기
    const dateReg = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateReg.test(date)) {
      alert("날짜 형식이 올바르지 않습니다.");
      return;
    }

    const { data, error } = await supabase
      .from("expenses")
      .update({
        date: date,
        item: item,
        amount: amount,
        description: description,
      })
      .eq("id", id);

    if (error) {
      return alert("데이터를 수정하는 중 오류가 발생했습니다.");
    }
    alert("데이터가 수정되었습니다.");
    navigate("/");
  };

  // 삭제
  const onDelete = async () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      const { data, error } = await supabase
        .from("expenses")
        .delete()
        .eq("id", id);

      if (error) {
        return alert("데이터를 삭제하는 중 오류가 발생했습니다.");
      }
      alert("데이터가 삭제되었습니다.");
      navigate("/");
    }
  };

  return (
    <Section>
      <DetailStyle>
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
        <DetailButton>
          <button1 onClick={onEdit}>수정</button1>
          <button2 onClick={onDelete}>삭제</button2>
          <button3 onClick={() => navigate(-1)}>뒤로 가기</button3>
        </DetailButton>
      </DetailStyle>
    </Section>
  );
};

export default Detail;
