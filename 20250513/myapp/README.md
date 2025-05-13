# tanstack Query(v5 react Query)
> 비동기 관련 서버 상태를 관리하는 라이브러리

## 특징
- 백그라운드 동기화 
- 쿼리 무요화
- 쿼리의 로딩 상태 관리
- 캐싱
- 리패치

### 서버 상태
- api 에서 가져오는 데이터를 관리하는 상태 값
- 데이터를 가져오는 시기를 결정하고 캐시의 상태를 관리해서 업데이트
- 좋은 점은 개싱으로 로드 속도를 향상 로징으 로직 처리과 데이터 갱신(renewal) 처리
- 자주 갱신되거나 조회되는 데이터

> fresh 한 생태와 stale 상태는 tanstack query 에서 staleTime 과 CacheTime으로 표현된다. (v4 이전에서 gcTime 으로 표현)
> 요청 이후에는 fresh 상태 데이터가 생기고 staleTime 데이터가 시긴이 지나가면 stale 상태가 된다. 이후에 refetch 를 할수있는 데이터의 상태 

### tanstack query를 만든 목적
> 서버의 상태를 redux를 사용하고 thunk와 saga 등을 사용하면서 작성하니 로직이 복잡해서
> 서버의 상태를 자동화시켜서 관리하는 라이브러리를 만들고 싶다
> 캐싱 : 특정 데이터의 내용을 메모리에 저장해서 동일한 내용의 접근의 속도를 높여준다다


### tanstack query의 목차

1. Cache : 메모리 저장소 동일한 값을 요청을 하지않고 같은 내용이면 데이터를 반화해서 사용
2. refetch : 자동으로 데이터를 다시 요청할것인지? 혹은 내사 호출해서 사용을 할것인지.
3. query Key : 캐시 데이터의 식별자 
4. Invalidation : 캐시 무효화 시키고 새로운 데이터를 refetch


## 캐시 
> 캐시 데이터는 자주 사용되는 데이터 즉 이미지 혹은 api 응답 데이터 임시로 저장해두는 메모리 공간
> 최적화 (optimization): 느린 연산을 반복하지 않기 위해서 시간이 오래걸리는 연산작업의 데이터를 메모리에 저장해옿고 효휼성을 증가시킨다


### 캐시의 동작 
1. 연산을(calculation) 동작하면 캐시데이터를 저장
2. 이후부터는 캐시데이터가 있으면 재연산을 하지않고 캐시 데이터 반환(캐시 적중) 원하는 캐시데이터를 가져오지 못했으면 (캐시 미적중)
3. 캐시 데이터가 없다면 혹은 미적중이면 캐시데이터를 다시 재 업데이터 즉 요청을 다시 보낸다. (캐시 적중률 공식)


## 캐시를 사용하는 목적
> 빠른 로딩 속도 개선
> 연산 부하 절약
> 오래된 썩은 데이터가 반환될수도 있다.


### tanstack Query 문법


```sh 
npm i @tanstack/react-query

```


## 초기화 

```js
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions : {
        queries : { // 캐시를 관리할때 속성
            staleTime : 0, // 밀리 세컨드 데이터가 생신을 해야할때까지 걸리는 시간이 0
            retry : 0   // 만약에 요청을 보냈는데 요청 실패시 재요청할 횟수
        }
    }
}); 
// 시스템 객체 // react query를 사용할때 필요한 내용이 할당되어있는 객체가 생생된다



const App = () => {
    return(
        <QueryClientProvider client={queryClient}>
            <Components />
        </QueryClientProvider>
    )
}


```

### react-query 강점 강력한 개발툴 제공


```sh   
--save-dev
npm i -D @tanstack/react-query-devtools

```
> 개발할때만 사용하는 라이브러리 실제 빌드에서는 포함되지 않게 설치
> 캐시데이터의 동향을 확인 할수 있다 요청에 대한 서버상태 또한

> nitialIsOpen === 판낼이 열려있을지 초기에
> 개발 의존성으로 설치 해야한다.

``` js
import {reactQueryDevtools} from '@tanstack/react-query-devtools'



const App = () => {
    return(
        <QueryClientProvider client={queryClient}>
            <Components />
            <reactQueryDevtools initialIsOpen={true} buttonPosition={'buttom-right'}/>
        </QueryClientProvider>
    )
}

```

### 카운트
> 카운트 api 만들기 
> todo list
> 무한 스크롤
 

백엔드 구성
``` sh
npm init -y
npm i express cors

```