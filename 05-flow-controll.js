// 연습문제

// 1. 2단~9단까지 구구단 출력
for(let i = 2; i < 10; i++){
    for(let j = 1; j < 10; j++){
        console.log(i, "x", j, "=", i*j);
    }
}

// 2. 역삼각형 그리기
// for문 버젼, while문 버젼

for(let i = 2; i < 10; i++){
    for(let j = 1; j < 10; j++){
        console.log("*");
    }
}