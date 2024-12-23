import styled from "styled-components";
import MonthNavigation from "../components/MonthNavigation";
import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  gap: 20px;
`;

const Home = () => {
  return (
    <Background>
      <MonthNavigation></MonthNavigation>
      <CreateExpense></CreateExpense>
      <ExpenseList></ExpenseList>
    </Background>
  );
};

export default Home;
