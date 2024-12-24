import styled from "styled-components";

const Calendar = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  background-color: white;
  gap: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  button {
    width: 100px;
    height: 50px;
    border-radius: 50% 20% / 10% 40%;
    border: none;
    background-color: gray;

    &:hover {
      background-color: skyblue;
    }
  }
`;

const MonthNavigation = () => {
  return (
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
  );
};

export default MonthNavigation;
