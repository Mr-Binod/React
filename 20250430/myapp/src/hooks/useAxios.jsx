import axios from 'axios';
import { useState } from 'react';


// 청을 보낼때 로직
// promise 처럼 상태를 가지고 있는 객채를 만들것
const useAxios = () => {
    const [res, setRes] = useState(null); 
    const [pending, setPending] = useState(null); 
    const [rej, setRej] = useState(null);

    // 요청을 보내고 상태에 따른 로직 처리
    const request = async (config) => {
        // 요청을 시작하면 pending
        setPending(true);
        try {
            // axios 함수에 전달하는 속성 값
            // 주요 속성
            // method : 요청 메서드
            // baseURL : http://scoop  기본 url
            // url : 요청 경로 /create/board 
            // headers : 요청 헤더의 내용
            // params : 쿼리 문자열 등을 요청 메시지에 전달  ?key=value
            // data : body에 전달하는 값
            
            const {data} = await axios({...config})
            setRes(data)

        } catch (error) {
            setRej(error)
        }
        setPending(false)
    }
    return {res, pending, rej, request}
}

export default useAxios

