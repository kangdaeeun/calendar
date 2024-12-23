import styled from "styled-components";
import MonthNavigation from "../components/MonthNavigation";
import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";

const Root = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`;

const Main = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0px auto;
`;

const Home = () => {
  return (
    <Root>
      <Main>
        <MonthNavigation />
        <CreateExpense />
        <ExpenseList />
      </Main>
    </Root>
  );
};

export default Home;
