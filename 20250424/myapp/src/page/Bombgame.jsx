import { Component } from "react";
import Boom from "../components/Boom";

export default class Bombgame extends Component {
    constructor(props) {
        super();
        this.state = {
            Over : false,
            Count : 0,
            bomb : Math.floor(Math.random() * 12),
            bombCount : 12,
            reset : false
        }
    }
    componentDidUpdate() {
        if(this.state.reset) {
            this.setState({
                ...this.state,
                reset : false
            })
        }
    }
    setCount = () => {
        this.setState({...this.state, Count : this.state.Count + 1})
    }
    setGameOver = () => {
        this.setState({...this.state, Over : true});
    }
    reset = () => {
        this.setState({
            Over : false,
            Count : 0,
            bomb : Math.floor(Math.random() * 12),
            bombCount : 12,
            reset : true
        })
        console.log(this.state)
    }
    setBomb = () => {
        const {bombCount} = this.state
        // let a = {name : 'soon'}
        // fill 배열안에 값을 채우는 메서드
        // 9의 자리를 가비도있는 배열에 0 의 값이 모두 할당
        // Array(9).fill(0) 주소를 할당하면 안됨 새로운 주소를 만들어서 할당 해줘야한다다
        return (Array(bombCount).fill(0).map((el, index) => 
            <Boom key={"bomb" + index} setValue={index === this.state.bomb ? this.setGameOver : this.setCount} reset={this.state.reset}/>))
    }

    render() {
        // let arr = [0,0,0,0,0,0,0,0,0]
        if(this.state.Over) return <div><div>{this.state.Count}</div>게임 오버 ㅠㅠ<button onClick={this.reset}>다시 시작</button></div>
        return (
            <div className="Boomgamewrap">
                {/* {arr.map((el) => <Boom />)} */}
                <this.setBomb />
                <button onClick={this.reset}>다시 시작</button>
            </div>
        )
    }
}