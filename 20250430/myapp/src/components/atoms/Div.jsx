import React from 'react'
import styled from 'styled-components'



const Wrap = styled.div`
    width: max-content;
    /* height: 14px; */
    font-size: 14px;
    color: #696969;
    margin: 0 10px;
`
const Div = ({children}) => {
  return (
    <Wrap>
      {children}
    </Wrap>
  )
}

export default Div
