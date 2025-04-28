import React from 'react'
import Header from "../molecules/Header";
import Personalinfo from '../molecules/Personalinfo';
import { profilepic } from '../../images';
import Trainingfooter from '../molecules/Trainingfooter';

const Student = () => {
  return (
    <div className='templateWrap'>
      <Header/>
      <span className='line'></span>
      <div className='templateBody'>
        <ul>
            <li>
                <img src={profilepic} alt="" />
            </li>
            <li>
                비노드
            </li>
        </ul>
        <div >
            
            <Personalinfo/>

        </div>
      </div> <br />
      <Trainingfooter/>
    </div>
  )
}

export default Student
