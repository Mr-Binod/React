// rafc, rafce, rcc

import {useState, useEffect} from 'react'
import { rockImg,paperImg,scissorImg } from '../images';
import Player from '../components/Player';


console.dir(useState,'asdfasdf', useEffect)
const Game = () => {
    // 플레이어의 선택의 값을 담을 상태변수
    const [playerSelect, setPlayerSelect] = useState(null);
    const [comSelect, setComSelect] = useState(null);
    const [result, setResult] = useState('대기')

    const select = {
        scissors : {
            name : '가위',
            img : scissorImg
        },
        rock : {
            name : '바위',
            img : rockImg
        },
        paper : {
            name : '보',
            img : paperImg
        }
    }
    const playerSelectHandler = (_select) => {
        setPlayerSelect(select[_select])
        
        // 컴퓨터 선택
        // keys객체안에 있는 키를 반환 배열 타입으로
        const selectkey = Object.keys(select)
        // ['sicssors', 'rock', 'paper']
        const randomindex = Math.floor(Math.random() * 3);
        const selectContent = selectkey[randomindex] // scissors or rock or paper

        setComSelect(select[selectContent]);
    }
    const resultHandler = () => {
        console.dir(useState,'asdfasdf', useEffect)
        // 무승부 부터 걸어
        if(playerSelect.name === comSelect.name) {
            setResult('무승부');
        }
        else if (playerSelect.name === '가위'){
            const result = comSelect.name === '보' ? '이겼어' : '졌어'
            setResult(result)
        }
        else if (playerSelect.name === '바위'){
            const result = comSelect.name === '가위' ? '이겼어' : '졌어'
            setResult(result)
            
        }
        else if (playerSelect.name === '보'){
            const result = comSelect.name === '바위' ? '이겼어' : '졌어'
            setResult(result)

        }
    }
    useEffect(() => {
        if(playerSelect === null) return
        resultHandler();
    }, [playerSelect])

    return (
        <>
            <div className='playerwrap'>
                <Player name={'플레이어'} selectImg={playerSelect} resultText={result}/>
                <Player name={'컴퓨터'} selectImg={comSelect} resultText={result}/>
            </div>
            <div>
                <button onClick={() => playerSelectHandler('scissors')}>가위</button>
                <button onClick={() => playerSelectHandler('rock')}>바위</button>
                <button onClick={() => playerSelectHandler('paper')}>보</button>
            </div>
        </>
    )
    }

export default Game
