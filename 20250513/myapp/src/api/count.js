import axios from 'axios';

const getCount = async () => {
    const {data} = await axios.get('http://localhost:4000/getCount');
    return data;
}

const setCount = async (_incrementValue) => {
    const {data} = await axios.post('http://localhost:4000/setCount', {incrementCount : _incrementValue})
    return data;
}

export {getCount, setCount}