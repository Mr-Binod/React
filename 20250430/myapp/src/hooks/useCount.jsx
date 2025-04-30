import {useState} from 'react'


const Increment = 'increment';
const Decrement = 'decrement';

const useCount = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount((prev => prev + 1))
    }
    const decrement = () => {
        setCount((prev => prev === 0 ? prev : prev - 1))
    }
    // useEffect 를 사용하는 로직이 필요하면
    // 모든 리액트 훅을 사용 가능
    // 리액트의 훅을 사용하는 기능을 추상화 시켜서 재사용성을 높여주는것

    const countHandler = (key) => {
        switch (key) {
            case Increment:
                increment();
                break;
        
            case Decrement:
                decrement();
                break;
        
            default:
                break;
        }
    }

    return [count, countHandler]
    // return {count, onclick : countHandler}
}

export default useCount
