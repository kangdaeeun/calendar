import { Link } from "react-router-dom";
import styled from "styled-components";

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



const ExpenseList = () => {
  return (
    <ListStyle>
        <div>
          <Link to={`/expenses/1`}>asdf</Link>
        </div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
        <div>asdf</div>
      </ListStyle>
  )
}

export default ExpenseList