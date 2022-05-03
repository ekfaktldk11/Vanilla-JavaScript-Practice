/**
 * 내장 객체(Built-in Object)는 브라우저의 JS 엔진에 내장된 객체
 * String 객체는 JS 에서 문자열을 다룰 때 사용
 */


// 1. length
{
  let txt = "abcdefghijklmnopqrstuvwxyz";
  console.log(`txt.length = ${txt.length}`);
}
// 전화번호 또는 비밀번호 길이 check 등에 자주 사용

// 2. indexOf(string, start)
// if 특정문자열이 존재? return 해당 문자열이 시작되는 idx / else return -1
// start에 대한 정의가 없으면 target : 찾은 첫번째 문자열
// 있으면 start idx 부터 찾기 시작
{
  let str = "i love u";
  console.log(str.indexOf("love")); // 2
}
// - 전화번호데이터 저장시 주로 하이픈(-)없이 저장하는데 이를 체크할 때

// 3. lastIndexOf(string, start)
// indexOf()와 다르게 target : 마지막으로 찾은 문자열

// 4. slice(start, end)
// 시작 위치와 종료 위치(생략가능)를 주면, 문자열에서 해당 부분을 잘라내서 반환
{
  let str = "Apple, Banana, Kiwi";
  console.log(str.slice(7, 13)) // Banana
}
// - 주민등록번호 뒷자리의 첫번째 숫자를 추출(slice(6,7))하여 성별 및 외국인 구별

// 5. substring(start, end)
// slice() 와 동일한 기능 but 파라미터값으로 음수를 허용하지 않음

// 6. substr(start, length)
// slice() 와 유사한 기능 but 파라미터로 종료 위치 대신 길이(생략가능)를 받아서 시작 위치를 받아 길이만큼 리턴
// substring() 과는 다르게 시작 위치값 에 음수 허용

// 7. replace(origin, new)
// 특정 문자열을 지정한 문자열로 변환
// target : first item
// 대소문자를 구별, 구별하지 않기위해선 정규표현식인 /origin/i 를 사용 without "" or ''
{
  let str = "Please visit Seoul and Seoul!";
  console.log(str.replace("Seoul", "Jeju")); // Please visit Jeju and Seoul!
  console.log(str.replace("SEOUL", "Jeju")); // Please visit Seoul and Seoul!
  console.log(str.replace(/SEOUL/i, "Jeju")); // Please visit Jeju and Seoul!
  console.log(str.replace(/Seoul/g, "Jeju")); // Please visit Jeju and Jeju!
}
// - 메일 발송시 유저네임만을 다르게 적용할 경우 replace(/userName/g, {userName})
// - 날짜 데이터가 "년도-월-일" 형식인데, "년도/월/일" 로 바꿔주고 싶을 경우 replace(/-/g, "/") 로

// 8. toUpperCase(), toLowerCase() : alphabet 모두 대문자로, 모두 소문자로
// - 여권, 항공권, 신용카드 등의 영문이름은 모두 대문자로 관리 -> toUpperCase() 사용
// - 물품관련 데이터베이스에 대문자, 소문자 섞여서 저장되어있음
// 이때, 유저의 검색 입력키워드를 toUpper/LowerCase()로 변환화여 서버로 데이터를 보냄
// 서버에서도 데이터베이스 쿼리로 받아온 데이터들을 모두 대문자/소문자로 변환하여 유저 키워드와 비교

// 9. concat(str, str, str ...)
// 2개 이상의 문자열을 하나의 문자열로 합침
{
  let firstName = "Steve";
  let middleName = "Tom";
  let lastName = "Halland";
  console.log(firstName.concat(" ", middleName, " ", lastName)); // Steve Tom Halland
}
// - 위처럼 미국이나 유럽 같은 경우는 first, middle, last name 이 존재하는 경우

// 10. trim()
// 문자열의 앞, 뒤 공백을 모두 제거
// - 유저의 입력실수로 앞뒤에 공백이 생기는 경우

// 11. padStart(length, str or number), padEnd(length, str without "" or '')
// 여기서 pad는 padding의 의미 즉, 문자열의 앞(padStart) 또는 뒤(padEnd)에 인자로받은 문자를 인자로받은 길이만큼되도록 추가
{
  let str = "1";
  console.log(str.padStart(4, 'k')); // kkk1
  console.log(str.padEnd(4, 0)); // 1000
}
// - 대학 학번(입학년도 + 학과번호 + 개인번호(순번))
// 21년도 01번 학과에 입학한 개인번호 004번 학생이라면 '2101004' 가 학번으로 되어야함
// 이 때 개인번호(순번)는 실질적으로 4번인데 학번체계가 7자리라면 4 -> 004로 변경되어야함
// 이 경우 {개인번호(순번).padStart(3,0)} 을 사용
// - 년(4자리)-월(2자리)-일(2자리)의 날짜형식에도 월과 일에 padStart(2, 0) 을 사용

// 12. charAt(idx)
// idx에 해당하는 문자를 반환
// - 유저 아이디에 첫번째 문자로 알파벳 하나를 넣어 알파벳으로 유저 역할을 구분할 때
// A001, A002 ... M001 (A는 아처, M은 메이지)

// 13. charCodeAt(idx)
// idx에 해당하는 문자의 유니코드를 반환

// 14. split("classifier")
// 특정 구분자를 기준으로 문자열을 분리
// -인스타그램, 페이스북의 태그(#)를 전체태그문자열.split('#')으로 태그 목록들을 분리

// 15. startsWith(str), endsWith(str)
// 인자로받은 문자열로 시작하는지, 끝나는지 체크 후 return bool
{
  let url = "https://website.com";
  if(url.startsWith("http://") || url.startsWith("https://")){
    // 올바른 형식의 웹사이트 url
  } else {
    // 잘못된 형식의 웹사이트 url
  }

  let file = "abc.pdf";
  if(file.endsWith(".pdf")){
    // pdf 파일
  } else {
    // 다른 형식의 파일
  }
}
// - startsWith()은 올바른 형식의 웹사이트 url을 체크할 경우
// - endsWith()은 특정한 파일 형식을 체크할 경우