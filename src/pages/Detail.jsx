import { Link } from "react-router-dom";
import styled from "styled-components";

const BoxStyle = styled.div`
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
  return (
    <BoxStyle>
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
        <DetailButton>
          <button1>수정</button1>
          <button2>삭제</button2>
          <button3>
            <Link to={"/"}>뒤로 가기</Link>
          </button3>
        </DetailButton>
      </DetailStyle>
    </BoxStyle>
  );
};

export default Detail;
