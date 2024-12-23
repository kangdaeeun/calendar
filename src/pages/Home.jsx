import { Link } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  gap: 20px;
`;

const Calendar = styled.div`
  display: flex;
  background-color: black;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const CreateStyle = styled.div`
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
  button {
    background-color: skyblue;
    border: none;
  }
`;

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Background>
      <Calendar>
        <button>JAN</button>
        <button>FEB</button>
        <button>MAR</button>
        <button>APR</button>
        <button>MAY</button>
        <button>JUN</button>
        <button>JUL</button>
        <button>AUG</button>
        <button>SEP</button>
        <button>OCT</button>
        <button>NOV</button>
        <button>DEC</button>
      </Calendar>
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
      <ListStyle>
        <div>
          <Link to={`/expenses/1`}>asdf</Link>
        </div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
      </ListStyle>
    </Background>
  );
};

export default Home;
