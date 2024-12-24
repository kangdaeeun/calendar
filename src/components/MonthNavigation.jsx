/* eslint-disable react/prop-types */
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
    text-align: center;
    border-radius: 50% 20% / 10% 40%;
    border: none;
    cursor: pointer;
    color: ${(props) => (props.selected ? "#fff" : "#000")};
    background: ${(props) => (!props.selected ? "#F6F7FA" : "#2EC4B6")};

    &:hover {
      background-color: skyblue;
    }
  }
`;

const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export default function MonthNavigation({ selectedMonth, setSelectedMonth }) {
  return (
    <Calendar>
      {MONTHS.map((MONTH) => {
        return (
          <button
            key={MONTH}
            selected={selectedMonth === MONTH}
            onClick={() => {
              setSelectedMonth(MONTH);
            }}
          >
            {MONTH}
          </button>
        );
      })}
    </Calendar>
  );
}
