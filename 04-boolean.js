// Boolean : 논리 타입
// 비교/논리 연산의 결과
// 논리의 조합 : AND(&&), OR(||), NOT(!)을 조합하여 논리값 추출
let v1; // 선언하였으나 초기화 되지 않은 변수   ->  undefined (중요)
let v2 = null; // 선언하고 null로 초기화    ->  개발자가 설정한 것
console.log(typeof v1, typeof v2);

// 개발자가 임의로 undefined 상태를 만들 수도 있다.
v2 = undefined;
console.log(v2, typeof v2, v2 === undefined);

// == 타입과 무관, 값을 비교
// === 타입과 함께 값을 비교
console.log(123 == "123");      // 값을 비교
console.log(123 === "123");     // 값과 타입 비교

// Boolean 타입 함수로 논리값 반환
console.log(Boolean("String"), Boolean(""));
console.log(Boolean(2020), Boolean(0)); 

