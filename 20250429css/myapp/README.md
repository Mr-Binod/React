# css in javascript
> javascript 로 스타일 구문을 제어해서 사용한다

1. 웹은 정적 html css 를 사용해서 스타일과 레이아웃을 구성
2. html5 이후부터 파일 즉 html css 를 나눠서 협업과 유지보수가 좋게 작업을 할수 있게 되었다.

## 문제점 발생
> 대규모의 프로젝트를 진행하다보니 네이밍 켭치는 문제도 발생
> 전역적으로 css 를 다루다보니 충돌이 많이 발생하게 된다.
> 어떤 스타일의 저용이 필여한지 유추가 불가능 css 우선순웨 생각하면서 짜는것도 힘들어진다.

### SPA REACT, VUE etc

> 컴포넌트로 UI 를 구분해서 작업하고 있었고
> css 도 컴포넌트 단위로 구분하면 어떨따?
> css in javascript 로직으로 css 다뤄서 작업을 하는것이 탄탄생
> 스타일도 컴포넌트에 포함시켜서 작성을 하자

### css in js 란
> css 의 내용을 javascript 의 안에서 제어해서 사용하는 방법
> className id etc 사용하는 이름을 해시값으로 만들어서 독립넉인 css의 스타일을 갖게된다.
> 전역 스타일의 충돌을 방지 유지보수성 동일한 클래스명의 충돌을 방지했다
> 사용되지 않는 css는 제거 자바스크립트 로직으로 css 스타일을 적용하게 하기떄문에

### css in javascript 의 기본적인 라이브러리 styled-components
> css in javascirpt의 가장 기본적이 대표적인 라이브러릴중 하나.


## 문법

> npm i styled-components
``` js
import styled from 'styled-components';

// 컴포넌트 div 요소를 반환하는데
// font-size: 14px 의 스타일이 적용된 요소를 반환하는 컴포넌트
// 클래스의 이름을 해시 문자열로 만들어서 요소에 스타일을 적용
// 전달한 내용은 요소의 내용으로 전달해준다. children
// 자바스크립트의 변수동 자바스크립트 내용을 사용해야하는데 문자열로 만들어서 스타일 젃용을 해야하기 떄문에
// 트리거 템플릿 리터럴
// 함수의 `` 백틱 문자열을 붙이면 함수가 백틱을 태깅한다.
// 문자열로 변환하는것를 끝나는게 아니고 백틱의 내용을 문자열로 만든 뒤에 함수의 매개변수로 전달

const Popup = styled.div`
    font-size : 14px;
    color : ${props.color}
`

// styled.div 메서드가 호출되고 
// 백틱의 문자열이 전달 되고 
// 문자열을 받아서 고유한 클래스 이름 해시문자열로 스타일을 적용용

const App = () => {
    return (
        <Popup color={'red'}>안녕</Popup>
    )
}
```