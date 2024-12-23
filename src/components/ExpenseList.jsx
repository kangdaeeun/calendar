import { Link } from "react-router-dom";
import styled from "styled-components";

const ListStyle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 15px;

  a {
  width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  p {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  span {
  }
`;

const ExpenseList = () => {
  return (
    <ListStyle>
      <Link to={`/expenses/1`}>
        <p>
          <h6>2024-12-12</h6>
          <h3>식비 - 세광양대창</h3>
        </p>
        <span>20,000 원</span>
      </Link>
    </ListStyle>
  );
};

export default ExpenseList;
