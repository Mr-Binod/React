import React from 'react'
import styled from 'styled-components'

const InputStyle = styled.input`
    padding : 3px 6px;
`

const Input = (inputprops) => {
  return (
    <InputStyle {...inputprops}/>
      
  )
}

export default Input
