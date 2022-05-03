/**
 * 내장 객체(Built-in Object)는 브라우저의 JS 엔진에 내장된 객체
 * Object 객체는 모든 JS 객체의 루트 객체
 * JS 에는 Object 객체 외에도, String 객체, Number 객체, Date 객체, Array 객체, Math 객체등의 객체가 존재
 */


// Object
{
  // 빈 객체 생성
  let person = new Object();

  // 멤버 설정
  person.firstName = "Kim";
  person.lastName = "JinSeok";
  person.age = "26";
  person.getFullName = function () {
    return this.firstName + " " +this.lastName;
  }

  console.log(person.getFullName());
}