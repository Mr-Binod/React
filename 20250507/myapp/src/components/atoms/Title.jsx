import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const TitleStyle = styled.li`
    position: relative;
    list-style: none;
    & * {
        margin: 0px;
        padding: 0px;
        text-decoration: none;
    }
    .link {
        color : #6e759f;
        font-size : 20px;
        line-height: 40px

    }

    &.tag::before {
        content : '';
        background-color: #5569ff;
        width: 24px;
        height: 4px;
        position: absolute;
        bottom:  0;
        left: 0;
        border-radius: 4px;
        transform: translateY(50%)
    }
`

const Title = ({tag = false, path, children}) => {
  return (
    <TitleStyle className={tag ? 'tag' : ''}>
        <Link to={path} className='link'>
        {children}
        </Link>
    </TitleStyle>
  )
}

export default Title
