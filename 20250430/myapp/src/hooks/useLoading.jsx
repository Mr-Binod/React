// 비동기 처리로직의 함수가 동작하는 동안 로딩이라는 상태를 표현할 hook

import { useState } from "react"

// 비동기 처리 로직을 전달하면 처리되는 동안 로딩 상태를 저장

const useLoading = (callback) => {
    const [loading, setLoading] = useState(false);

    const eventHandler = async (params) => {
        if(loading) return; // 중복으로 실행 처리 안되게
        setLoading(true); // 이벤트가 실행되면 로딩중
        try {
            await callback(params)  // callback 함수의 전달할 내용은 매개변수가 객체이러야한다는 전제로
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }
    return {eventHandler, loading}
}

export default useLoading;