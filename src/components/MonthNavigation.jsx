import styled from "styled-components";

const Calendar = styled.div`
  display: flex;
  background-color: black;
  gap: 10px;
  justify-content: center;
  align-items: center;
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
  )
}

export default MonthNavigation