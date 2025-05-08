import React from 'react'
import styled from 'styled-components'
import Input from '../atoms/input/Input'
import Checkbox from '../atoms/checkbox/Checkbox'


const Wrap = styled.div`
    width: 600px;
    min-height: 340px;
    background-color: #fff;
    padding: 45px 0 18px 0;
    border-radius: 15px;
    margin: 30px auto 0 auto;
    box-sizing: border-box;
    box-shadow: 0 0 18px -16px;

    .logininputWrap {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin: 0 auto;
        margin-bottom: 24px;
        width: max-content;
    }

    .informationWrap {
        width: 500px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        div {
            display: flex;
            gap: 3px;
            align-items: center;
        }

        .content {
            margin: 10px;
        }
    }
    span {
        display: inline-block;
        width: 100%;
        height: 1px;
        background-color: #E8EAEE;
        margin: 30px 0 20px 0;
    }
    button {
        width: 100px;
        height: 40px;
        background-color: #5569ff;
        border-radius: 6px;
        margin: 0 auto;
        color: white;
        border: none;
        outline: none;
        margin: 0 auto;
        font-size: 14px;
        font-weight: bold;
        /* line-height:  */
        display: block;
    }
`

const Loginwrap = () => {
  return (
    <Wrap>
        <div className='logininputWrap'>

            <Input label={'아이디'} width={'500px'} placeholder={'아이디를 입력해주세요'}/>
            <Input label={'비밀번호'} width={'500px'} placeholder={'비밀번호를 입력해주세요'}/>
        </div>
        <div className='informationWrap'>
            <div><Checkbox />로그인 정보 저장</div>
            <div>
                <div className='content'>
                    <Checkbox type='radio' inputName={'Userselect'}/> 운영자자
                </div>
                <div className='content'>
                    <Checkbox type='radio' inputName={'Userselect'}/> 교강사
                </div>
            </div>
        </div>
        <span></span>
        <button>로그인</button>
    </Wrap>
  )
}

export default Loginwrap
