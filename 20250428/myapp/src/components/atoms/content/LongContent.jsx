import React from 'react'

const LongContent = ({bodytext, children}) => {
  return (
    <div className='LongcontentWrap'>
        <div className='LongtitleContent'>{bodytext}</div>
        <div className='LongbodyContent'>{children}</div>
    </div>
  )
}

export default LongContent
