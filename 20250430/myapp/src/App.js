import { useEffect } from "react";
import useAxios from "./hooks/useAxios";
import useCount from "./hooks/useCount";
import useInput from "./hooks/useInput";
import useLoading from "./hooks/useLoading";
import IdPw from "./components/molecules/IdPw";

import styled from "styled-components";

const App = () => {
  // jsx 문법의 이해도가 높다. html 에서는 불가느해
  // jsx 이기때문에 가능하다. 
  // react 객체를 생성을 할때 props라는 객체의 키값을 생성해서 구문을 추가한다
  // html 구조의 화면을 그려준다

//   const [count, setCount] = useCount();
//   const userId = useInput();
//   return (
//     <div className="App">
//       {count}
//       {userId.value}
//       <input {...userId}/>
//       <button onClick={() => setCount('increment')}>감소</button>
//       <button onClick={() => setCount('decrement')}>증가</button>
//     </div>
//   );




}

const Wrap = styled.div`
  width: 311px;
  margin: 0 auto;
`

const App2 = () => {

  const {request, res} = useAxios();
  const {loading, eventHandler} = useLoading(request);
  const userId = useInput();
  const userPw = useInput();

  useEffect(() => {
    if(res) console.log(res)
  }, [res])

  const loginHandler = async () => [
    await eventHandler({
      url : "http://localhost:4000/login",
      method : "POST",
      data : {uid : userId.value, password : userPw.value}

    })
  ]

  return (
    <Wrap>
      <IdPw userId={userId} userPw={userPw} loginHandler={loginHandler} loading={loading} />
      {/* <label>아이디</label>
      <input {...userId}/>

      <label>비밀번호</label>
      <input {...userPw}/>
      <button onClick={loginHandler} disabled={loading}>{loading ? '로딩중' : '로그인'}</button> */}
    </Wrap>
  )
}

export default App2;


// 기전 : mechanism , 시선 : gaze, 바닐라라

