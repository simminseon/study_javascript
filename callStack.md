# 자바스크립트 호출스택


## 자바스크립트 엔진
가장 대중쩍인 자바스크립트의 엔진은 구글의 V8이며, V8 엔진은 크롬과 노드 안에서 동작함

### 자바스크립트 엔진의 구성요소
1. 메모리 힙(Memory Heap) : 객체는 힙, 대부분의 구조화되지 않은 메모리 영역에 할당된다. 변수와 객체에 대한 모든 메모리 할당은 여기서 발생
2. 호출 스택(Call Stack) : 코드가 실행될 때 호출 스택이 쌓인다.


## 실행 환경(Runtime)
브라우저에는 자바스크립트 개발자가 사용하는 거의 모든 API가 있다.
브라우저는 DOM, AJAX, setTimeout 등의 Web API가 있으며, Web API의 호출을 통제하기 위한 Event Queue와 Event Loop도 존재한다.


## 호출 스택(Call Stack)
호출 스택이란 프로그램에서 우리가 어디에 있는지를 기본적으로 기록하는 데이터 구조이다.
자바스크립트는 단일 호출 스택이 있으며 하나의 일만 처리할 수 있다.

예제)
```
    function multiply(x, y) {
        return x * y;
    }
    function printSquare(x) {
        var s = multiply(x, x);
        console.log(s);
    }
    printSquare(5);
```
예제 실행 단계
Call Stack

*****

*step1*   
printSquare(5)

*****

*step2*   
multiply(x, x)
printSquare(5)

*****

*step3*   
console.log(s)
printSquare(5)

*****

*step4*   
printSquare(5)

*****

*step5*      

*****


## 비동기 콜백


