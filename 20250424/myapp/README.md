# React 의 이미지 랜더링

> 리액트는 html 에서 이미지를 가져오는 방식과 조금 다르다 외냐하면 번들링되는 과정을 거치기떄문에

## 이미지를 사용하는 예


### 배포 되어있는 이미지지
```jsx
class App extends React.Component {
    render() {
        return <>
            <img src='https://ssl.pstatic.net/melona/libs/1527/1527242/8345644b51cf34939361_20250423161605596_1.jpg'>
        </>
    }
}
```

### import로 가져온 이미지를 가져와서 사용하는 방법
```jsx
import logoImg from './images/logo.png'

class App extends React.Component {
    render() {
        return <>
            <img src={logoImg}>
        </>
    }
}
```

> webpack 으로 이미지를 번들링하고 해시를 붙여서 관리한다 그래서 이미지를 변경하게 된경우 캐싱에서 좋다.

### 만약에 동적인 이미지의 이름이 있다 이때는 Public folder 사용해야 한다다

```jsx

class App extends React.Component {
    render() {
        return <>
            <img src={`/public/${this.state.props.imageName}.png`}>
        </>
    }
}
```

*** 번들링 과정에 src의 이미지를 import하지 않으면 번들링 폴더에 포함되지 않는다 ***



### 이미지를 사용해서 지뢰찾기기


1. 폭탄은 터지지않은 상태가 있고 터진 생태가 있다 ( 컴포넌트의 상태를 제어해서 이미지를 조건부 랜더링) (본인이 터진지 아닌지만 알면 된다 )
2. 폭탄은 9 개가 있다 (폭탄의  UI를 9 개 배치)
3. 폭탄은 본인이 정답인지 알고 있고 정답을 다 맞추면 게임 오버 조건을 만들자 지뢰를 찾으면 게임 오버


### 실습
> 게임 재시작 버튼을 눌러서 게임을 재시작 해주세요