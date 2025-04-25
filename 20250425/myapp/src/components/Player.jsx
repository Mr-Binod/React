import React, { useEffect } from 'react'

// props 객체
// const Player = (props) => {
const Player = ({name, selectImg, resultText}) => {
  useEffect(() => {
      console.log(name)
  })
  let tempResult = resultText;
  if(name === '컴퓨터') {
    tempResult = resultText === '무승부' ? '무승부' : resultText === '이겼다' ? '졌어' : '이겼어'
  }
  return (
    <div className='player'>
      <div>{name}</div>
      <img src={selectImg?.img} />
      <div className='resulttext'>{tempResult}</div>
    </div>
  )
}

export default Player
