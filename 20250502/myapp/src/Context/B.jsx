import React, { useContext } from 'react'
import A from './A'
import { LoginStore } from './Store/Store'
import Layout from './Content.styled'

const B = () => {
    const {setName} = useContext(LoginStore)
    const submitHandler = (e) =>  {
        e.preventDefault();
        // name 가지고 요펑 객체로 파싱하는 작업을 우리가 직접 만들수는 있을건데
        // name 의 값을 전달ㄹ을 해서 요청 form 객체를 생성 

        console.log(e.target[0].value)

        // for of Formndata to check the datas in formdata
        // const formdata = new FormData(e.target);
        // axios.post({url : '', method : 'POST', data : formdata})

        setName (e.target[0].value)
     }
  return (
    <Layout>
        <form action="" onSubmit={submitHandler}>
            <label htmlFor="">이름름</label>
            <input type="text" name='nickname'/>
            <button>이럼 수정</button>
        </form>
      <A />
    </Layout>
  )
}

export default B
