import React from 'react'
import Game from './page/Game'

const App = () => {
  return (
    <>
      <Game />
    </>
  )
}

export default App









// export const App = () => {

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log('app 컴포넌트가 생서되었어')
//   },[])

//   useEffect(() => {
//     if(count === 0) return // 마운트 속성 재회회
//     console.log(count)
//   },[count])

//   return (
//     <>
//     <div>{count}</div>
//       화면이 출력
//       <button onClick={() => setCount((prev) => prev + 1)}>증가</button>
//     </>
//   )
// }

// exports.App = () => {

// }

// export default App