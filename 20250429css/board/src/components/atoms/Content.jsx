import React, { memo } from 'react'
import styled from 'styled-components';
import { useContext } from 'react';
import { DataStore } from '../Store/Store';

const Wrap = styled.div`
    width: ${({width}) => width ? width : '40px'};
    height: ${({height}) => height ? height : '30px'};
    display: flex;
    justify-content: ${({center}) => center ? center : 'none'};
    align-items: center;
    border: ${({border}) => border ? border : ''};
    /* border: 1px solid #CBD0D7; */
    /* background-color: #F2F5F9; */
    border-radius: 8px;
    padding: 4px 10px;
    margin:0 5px;
    box-sizing: border-box;
`


const Content = memo(({children, width, height, border, center}) => {
  // const {Contentname} = useContext(DataStore)
  console.log(children + "---------------------------------")
  return (
    <Wrap width={width} height={height} border={border} center={center}>
      {children}
    </Wrap>
  )
})

export default Content;
