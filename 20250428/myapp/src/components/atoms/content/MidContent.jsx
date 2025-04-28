import React from 'react'

const MidContent = ({bodytext, children}) => {
  return (

    <div className='MidcontentWrap'>
        <div className='MidtitleContent'>{bodytext}</div>
        <div className='MidbodyContent'>{children}</div>
    </div>
  
  )
}

export default MidContent
