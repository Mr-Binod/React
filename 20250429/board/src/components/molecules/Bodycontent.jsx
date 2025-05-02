import React from 'react';
import { useState, useContext } from 'react';
import { DataStore } from '../Store/Store';
import Content from '../atoms/Content'
import styled from 'styled-components'

const Wrap = styled.div`
    width: 1080px;
    height: ${({ height }) => height ? height : '40px'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ bcolor }) => bcolor ? bcolor : 'white'};
    border-radius: 5px;
    border-bottom: ${({ borderb }) => borderb ? borderb : '1px solid #E7F1FE'};
 
`

const Bodycontent = () => {
  const { contentList } = useContext(DataStore);
  console.log(contentList, 'bodd')
  // const CreateContname = (name) => {
  //   console.log(name, 'name')
  //     setContentname(name)
  // }
  if (contentList) {
    return (
      contentList.map((el) => <Wrap>
        <Content width={'40px'} height={'30px'}>{el.count}</Content>
        <Content width={'980px'} height={'30px'} border={'1px solid #CBD0D7'}>{el.inputvalue}</Content>
        <Content width={'60px'} height={'30px'} border={'1px solid #CBD0D7'}>10</Content>
      </Wrap>
      )
    )
  }
}

export default Bodycontent;
