import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [count, setCount] = useState(0);
    const [open, setOpen] = useState(0);
    // 연산을 메모이제이션
    // 갱신을 하는 구간을 정의
    // 연산된 값은 연향을 안주고 어느 순간 값의 갱신이 일어나게
    const increment = () => {
        setCount((prev) => prev + 1);
    }
    // 지하철에 문이 열리기 전에 사람들이 대기중
    // 지하철 문이 열리면 미하철에 탑승한 사람등의 인원을 갱신

    const value = useMemo(() => {
        return count;
    }, [open]) // 최초에 한변변 값이 없으면 최초에 한번 [주시할  변수] 의존성 배열에 주시하는 값이 있는경우 변할때마다
        // 주시하는 의존성의 값이 변화하면 재 캐싱
    return (
        <div>
            <div>줄서 있는 사람들 : {count}명</div>
            <button onClick={increment}>지하철 대기중 인원 증가</button>
            <button onClick={() => setOpen(prev => !prev)}>지하철 문 열기기</button>
            <div>지하철에 탑승할 사람들: {value}명</div>
        </div>
    )
}

export default Memo
