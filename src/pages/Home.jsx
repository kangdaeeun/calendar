import styled from "styled-components";
import MonthNavigation from "../components/MonthNavigation";
import CreateExpense from "../components/CreateExpense";
import ExpenseList from "../components/ExpenseList";
import { useEffect, useState } from "react";
import supabase from "../utils/supabase";

const Section = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
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
  const [expenses, setExpenses] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(1);

  // API 요청하는 방법
  useEffect(() => {
    const fetchExpenses = async () => {
      const { data, error } = await supabase.from("expenses").select("*");
      setExpenses(data);
    };
    fetchExpenses();
  }, []);

  // 여기서 필터링 한 후에 ExpenseList 컴포넌트에 넘겨줘야 함
  const filteredExpenses = expenses.filter((expense) => {
    const month = new Date(expense.date).getMonth() + 1;
    return month === selectedMonth;
  });

  console.log(filteredExpenses);

  return (
    <Section>
      <Main>
        <MonthNavigation
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <CreateExpense expenses={expenses} setExpenses={setExpenses} />
        <ExpenseList expenses={filteredExpenses} />
      </Main>
    </Section>
  );
};

export default Home;
