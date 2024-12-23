import { Link } from "react-router-dom";
import styled from "styled-components";

const DetailStyle = styled.div`
  display: flex;
  background-color: white;
  gap: 10px;
  justify-content: center;
  align-items: center;
  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  button1 {
    color: white;
    background-color: blue;
    border: none;
  }
  button2 {
    color: white;
    background-color: red;
    border: none;
  }
  button3 {
    color: white;
    background-color: gray;
    border: none;
  }
`;

const Detail = () => {
  return (
    <DetailStyle>
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
      <button1>수정</button1>
      <button2>삭제</button2>
      <button3><Link to={"/"}>뒤로 가기</Link></button3>
    </DetailStyle>
  );
};

export default Detail;
