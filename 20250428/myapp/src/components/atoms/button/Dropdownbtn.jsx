import React, { useState } from 'react'

const Dropdownbtn = () => {
    const [active, setActive] = useState(false)
    const [value, setValue] = useState('훈련중');
    const setValueHandler = (e) => {
        setValue(e.target.innerHTML);
        setActiveHandler();
    }
    const setActiveHandler = () => {
        setActive((prev) => !prev)
    }
    return ( 
        <div className={`wrap ${active ? 'active' : ''}`}>
            <div className={`dropboxwrap ` } onClick={setActiveHandler}>{value}</div>
            <ul className='dropboxcontent'>
                <li><span onClick={setValueHandler}>훈련중</span></li>
                <li><span onClick={setValueHandler}>훈련 완료</span></li>
            </ul>
        </div>
    )
}

export default Dropdownbtn
