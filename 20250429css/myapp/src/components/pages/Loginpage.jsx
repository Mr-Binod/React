import React from 'react'
import Header from '../molecules/layout/Header'
import styled from 'styled-components'
import Input from '../atoms/input/Input'
import Checkbox from '../atoms/checkbox/Checkbox'
import Loginwrap from '../templates/Loginwrap'


const Wrap = styled.div`
    background-color: #E7EEF8;
    min-height: 100vh;

`

const Loginpage = () => {
  return (
    <Wrap>
      <Header/>
      <Loginwrap/>
    </Wrap>
  )
}

export default Loginpage
