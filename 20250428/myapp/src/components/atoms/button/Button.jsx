    import React from 'react'

const Button = ({isIcon, onclick, children}) => {
  // console.log(props)
  // {children: '123'}
  return (
    <div className='mainBtn' onClick={onclick}>
        {isIcon ? <i>+ </i> : null}
        <div>{children}</div>
    </div>
  )
}

export default Button
