/**
 * JavaScript의 전역과 지역 함수 및 변수
 * JS에는 전역 및 지역의 두 가지 범위가 있음
 * 함수 정의 외부에 선언된 변수는 전역 변수이며 프로그램 전체에서 이 값에 접근 및 수정 가능
 * 함수 정의의 내부에 선언된 변수는 지역 변수이며 이 변수는 함수가 실행될 때마다 만들어지고 소멸되므로 함수 외부에선 접근불가
 */

function func1() {
  var a = '0';

  console.log('func1(1):' + a); //0 

  function func2() {
    console.log('func2(1):' + a); //undefined 

    (function () {
      console.log('func2(2):' + a); //undefined 

      a = '55';
    })(); // 자동실행 함수

    var a; // 이놈으로 인해 func2() scope에서 호이스팅으로 a 에 undefined가 할당됨. 이거 없애주면 위 두개의 출력도 undefined가 아닌 0이됨

    console.log('func2(3):' + a); //55 - 코드 19번째 라인으로 인해 55할당
  }

  function func3() {
    console.log('func3(1):' + a); //0 

    a = '50';

    console.log('func3(2):' + a); //50

    //var a; -> func2와 다르게 여기는 주석처리를 해서 func3 scope에서는 a 에 호이스팅이 일어나지 않음
  }

  func2();

  func3();

  console.log('func1(2):' + a); //50
}

func1();
