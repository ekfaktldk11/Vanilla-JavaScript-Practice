/**
 * Number 객체는 숫자를 다룰 때 유용한 프로퍼티와 함수를 제공하는 래퍼(wrapper)객체
 * 래퍼객체란 이름처럼 원시 타입의 값을 감싸는 형태의 객체
 * JS에서는 정수와 실수를 따로 구분하지 않고, 모든 수를 실수 하나로 표현
 */

// 1. toString() : 숫자형 데이터를 문자형 데이터 반환
{
  let now = new Date();
  let year = now.getFullYear(); // 현재 년도
  let month = now.getMonth() + 1; // 0 : 1월 , 11 : 12월
  let day = now.getDate(); // 현재 일

  console.log(year + '-' + month + '-' + day); // 이미 여기서 문자열과 + 연산으로 인해 Number 타입이 string으로 변환하지만,
  // String 객체의 내자 함수인 padStart()를 사용하기 위해 .toString()으로 컴파일전 미리 타입을 변경
  console.log(year + '-' + month.toString().padStart(2,0) + '-' + day.toString().padStart(2,0));
}

// 2. toExponential(n) : 숫자를 지수형으로 (공학용 숫자) 소수점 (n + 1)째 자리에서 반올림 -> .(1)(2)(3번째) ,,,일 겨웅
{
  let x = 10.656;
  x.toExponential(2); // 10.66e+0
  x.toExponential(4); // 10.6560e+0
}

// 3. toFixed(n) : 소수점 몇 번째 자리까지 보여줄지를 결정. 소수점 n째 자리까지 보여주며, (n + 1)번째에서 반올림
{
  let x = 10.656;
  x.toFixed(0); // 11
  x.toFixed(2); // 10.66
}
// 달러나 유로 같이 금액을 표기할 때 소수점 이하가 존재하는 경우 budget.toFixed(2); 사용

// 4. toPrecision(n) : 정수와 소수를 포함해서 몇 번째 자리까지 보여줄지를 결정하는 함수

// 5. parseInt() : 전역 함수(어디서든 접근 가능)로서 정수로 반환
// **문자열의 시작이 숫자형** 이면 숫자형 데이터를 반환
{
  parseInt("-10"); //-10
  parseInt("-12.33"); // -12
  parseInt("10 20 30") // 10
  parseInt("10 years"); // 10
  parseInt("years 10"); // NaN
}
// parseInt(또는 parseFloat) 는 HTML의 폼 필드 중 하나인 <input type = "text" > 를 통해 받아온 문자열값을
// 정수나 부동소수점 형태로 타입변경을 해줄 때 자주 사용됨


// 6. parseFloat() : 리턴 값이 부동소수점인 것을 제외하고는 parseInt()와 동일
{
  parseFloat("12.33"); // 12
}