/**
 * Array 객체
 */

// 1. toString() : 배열 안의 모든 문자를 쉼표(,)를 이용해 모두 결합해서 하나의 문자열로 반환
{
  let fruits = ['Banana', 'Apple', 'Orange'];
  fruits.toString(); // 'Banana', 'Apple', 'Orange'
}

// 2. join(seperator) : 베열 안의 모든 문자를 파라미터로 지정한 문자를 이용해서 모두 결합하여 하나의 문자열로 반환
{
  let fruits = ['Banana', 'Apple', 'Orange'];
  fruits.join('-'); // Banana-Apple-Orange
}

// 3. pop() : 그래 니가 생각하는 그 pop 맞다
// 4. push(item) : 그래 니가 생각하는 그 push 맞다

// 5. shift() : 파이썬 deque lib 의 popleft()와 비슷한 기느
// 6. unshift(item) : 파이썬 insert(0, item) 맨앞에 추가
{
  let cities = [
    {
      ...`${'DB에서 가져온 데이터 목록'}`,
    },
  ];
  cities.unshift({ code: '', title: '지역을 선택하세요' }); // 배열의 첫 번째 요소로 추가
  let options = [];
  for (const city of cities) {
    options.push(
      '<option value="' + city.code + '">' + city.title + '</option>'
    );
  }
}
// HTML의 <select> 태그를 구현할 때, 이 태그 안에 <option> 태그로 선택할수 있는 목록을 생성
// 여기서 유저에게 제일 먼저 보이는 옵션은 '선택하세요' 라는 정보서 옵션을 구성하는 경우가 많음
// 이럴 때 위 처럼 unshift()를 사용

// 7. splice(appendFrom, numOfRemoval, ...newElements) : 새로운 요소를 특정 위치에 추가. 추가 시에는 기존 요소를 삭제할 수 도 있음
{
  let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
  fruits.splice(2, 0, 'Lemon', 'Kiwi'); // ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
}
// 화면에 있는 테이블 목록에 '행추가' 버튼을 클릭하여 행을 추가할 경우 테이블 목록의 정보를 담고있는 배열에 splice()로 데이터 추가

// 8. concat(arr1, arr2 ...) : 2개 이상의 배열을 하나의 배열로 결합
// 9. slice(startFrom, endBefore = -1) : 원본배열에서 잘라온 부분을 반환
{
  let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
  let citrus = fruits.slice(3); // [Apple, Mango]
  let citrus2 = fruits.slice(1, 3); // [Orange, Lemon]
}

// 10. sort() : 배열에 문자형 데이터가 있는 경우 오름차순으로 정렬
{
  let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
  fruits.sort();
}
// 배열에 숫자형 데이터가 있더라도 기본적으로는 문자로 인식해서 오름차순으로 정렬을 함
// 따라서 숫자 값으로 정렬하려면 sort(func()) 의 func()을 정의해서 사용
{
  let points = [40, 100, 1, 5, 25, 10];
  points.sort((a, b) => {
    return a - b;
  }); // 오름차순
  // points.sort((a, b) => {return b - a}); // 내림차순
}
// 과정
// [`40, `100, 1, 5, 25, 10] 40 - 100 = -60 -> 음수 이므로 두 요소의 위치를 변경 x
// [40, `100, `1, 5, 25, 10] 100 - 1 = 99 -> 양수 이므로 두 요소의 위치를 변경
// [40, 1, `100, `5, 25, 10] 100 - 5 = 95
// [40, 1, 5, `100, `25, 10] 100 - 25 = 75
// [40, 1, 5, 25, `100, `10] 100 - 10 = 90
// [40, 1, 5, 25, 10, 100] 이 상태에서 위 과정을 반복
// 배열의 모든 요소간의 위치 변경이 없을 때 까지 위 과정을 반복
// * Object의 특정 키를 기준으로 sort(func()) 형태의 sort함수를 사용하는 경우가 많음

// 11. filter(callback(element[, index[, array]]), [, thisArg]) : 배열에서 특정 조건을 만족하는 배열의 요소만을 찾아서 새로운 배열로 반환
// filter() 함수는 배열을 다룰 때 가장 많이 사용하게 되는 내장 함수
{
  let words = [
    'spray',
    'limit',
    'elite',
    'exuberant',
    'destruction',
    'present',
  ];
  let result = words.filter((word) => {
    return word.length > 6;
  });
}
// * Object의 특정 키를 기준으로 새로운 객체를 생성할 경우에도 filter() 많이 사용

// 12. map(callback(element)) : 배열의 데이터가 Object형태 일 경우, 배열에 담긴 Object를 새로운 형태의 Object로 변환해서 배열로 반환
{
  let userList = [
    {
      firstName: '재석',
      lastName: '유',
    },
    {
      firstName: '종국',
      lastName: '김'
    }
  ];

  let userList2 = userList.map((user) => {
    return{
      fullName: user.lastName + user.firstName,
      firstName: user.firstName,
      lastName: user.lastName
    }
  });
}
// DB에서 가져온 데이터는 key-value의 쌍이 많고, 이들 중 필요한 부분만을 가져오게 할 때 map()을 통해 가져온 데이터를 전처리함(->네트워크 트래픽 감소)
// 따라서 위의 에시처럼 DB에서 가져온 배열안의 객체 데이터멤버들을 확장시키거나 축소할 때 map() 자주사용

// 13. reduce(callback(element[, index[], arr], currentValue), initialValue) : 배열마다 요소를 돌면서 특정 값의 누적합을 계산하기 위한 내장함수.
// 누적 결과값은 숫자, 문자, 객체 모두 가능
// reduce() 함수의 주의할 점은 initialValue나 currentIndex 값이 없으면 0번째가 아닌 1번째 요소부터 누계산
{
  let points = [40, 100, 1, 5, 25, 10];
  let sum = points.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0);
}
// reduce()는 한번에 이해하기 어렵기에 많은 예제를 통해 숙달!