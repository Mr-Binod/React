import React from 'react'
import Button from '../atoms/button/Button'
import Dropdownbtn from '../atoms/button/Dropdownbtn'


const Trainingfooter = () => {
  return (
    <div className='trainingwrap'>
        <div className='trainingselectbox'>
            <Dropdownbtn />
            <Button>변경</Button>
        </div>
      <Button>정보 수정</Button>
    </div>
  )
}

export default Trainingfooter
