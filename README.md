트러블 슈팅

1. 링크를 주었지만 내가 페이지가 나오지 않았음
- 링크의 주소와 라우트 패스의 주소를 일치 시킬 것

2. css문제 상위에서부터 전체적인 틀을 잡아놨는데 특정 태그?에서만 내가 원하는 css구현이 되지 않음
가운데 정렬을 하기 위해서 너비를 100%를 줘봤지만 그럼에도 되지 않았고 display: flex 로 만져봐도 구현이 안됨
- 상위 div 태그를 하나 더 만들어서 거기에 justify-content와 align-items를 center를 주고 높이를 줘서 가운데 정렬함

3. 발제에 있는 supabase와 튜터님이 라이브코딩으로 알려준 supabase의 차이점이 궁금함
- 내가 발제에 있는걸 보고 검색한 supabase는 처음 연결할 때 supabase이고 튜터님이 라이브코딩으로 알려준 supabase는 연결이 되었음을 가정하고 난 이후의 과정이다.
- 첫날에 설정한 걸 까먹고 연결하는 로직을 또 만들었음... 바보인 듯;;

4. input 에 데이터를 넣는데 4개의 input 값이 동일하게 쳐짐 따로따로 넣지 않고 한번에 할려고 해서 그런가???

5. 튜터님 코드를 보니 각 컴포넌트 별로 상위 태그에 Section을 주고 시작하시던데 이걸로 그 페이지의 전체적인 css를 잡는건가요?

6. ExpenseList 페이지에서 map에서 에러가 발생 > expenses를 props로 받아왔는데 이 데이터 값이 없는 경우가 있음. 데이터가 없는데 map을 어떻게 돌리지? 라는 에러임
ExpenseList.jsx:100 Uncaught TypeError: Cannot read properties of undefined (reading 'map')
- 이 에러를 해결하기 위해서 expenses에 물음표(?)를 달아주면 됨. 데이터가 있을 때만 뒤에 함수를 실행해줘 라는 뜻임

7. 월별 버튼을 누르면 해당 월에 사용했던 지출 내역이 나오는게 아니라 빈 배열만 나오고 있음
- 우선 튜터님의 코드를 보면 map에서 element를 사용했는데 난 MONTHS 에서 MONTH로 주었는데 이게 잘못된 건가???이게 아닌가???
- 튜터님은 월을 1, 2, 3, ... 12 으로 number로 주었는데 난 JAN, FEB, MAR, ... DEC 으로 string 으로 줘서 불러오는 과정에서 일치하지 않아서 일어난 오류.
-   const filteredExpenses = expenses.filter((expense) => {
    const month = new Date(expense.date).getMonth() + 1;
    return month === selectedMonth;
  });
- month는 숫자로 정의되어 있어서 사이트에 처음 들어갔을 때는 잘 뜨지만 월 버튼을 누른 순간부터는 문자로 되어 찾지 못했던 것.
- 여기서도 month와 selectedMonth를 비교하는데 selectedMonth 초기값을 보면 (1)로 숫자이다.
- map에서 사용한 MONTH는 단순 이름이기에 아무 상관이 없었다...