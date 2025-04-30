import {useState} from 'react'

const useInput = () => {
    const [value, setValue] = useState('');

    // input 요쇼에 입력을 할때마다 상태변수로 저장하는 로직을 추상화
    // 요소선택자를 쓸 필요가 없다.

    const handlersetValue = (e) => {
        setValue(e.target.value)
    }

    const valueClear = (e) => {
        // setValue('');
        console.log(e)
    }
    return {value, onChange : handlersetValue, onKeyDown : valueClear}
}

export default useInput
