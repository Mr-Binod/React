import React from 'react'

const Content = ({bodytext,children}) => {
  return (
    <div className='contentWrap'>
      <div className='titleContent'>{bodytext}</div>
      <div className='bodyContent'>{children}</div>
    </div>
  )
}

export default Content
