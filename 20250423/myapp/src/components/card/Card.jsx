import { Component } from "react";

export default class Card extends Component {
    constructor(props) {
        // props 부모콤포넌트 
        super();
        this.state = {
            count : 0
        }
        console.log(props, 'props', this.state)
    }
    componentDidMount() {
        console.log(this.state.count)
        console.log('난 탄생했다')
    }
    componentDidUpdate(){
        console.log('내가 변화했어')
        console.log('카운트가 증가되었습니다: ', this.state.count)
        this.reward();
    }
    incrementCount = () => {
        this.setState({count : this.state.count + 1});
    }
    // 카운터가 10이 되면 보상을 주고싶어
    reward = (count) => {
        if(count >= 10){
            console.log('보상 당첨 추카추카')
        }
    }
    
    render() {
        console.log(`${this.props.content} 나 리렌더링 됬다`)
        return (
            <div className="card">
                <div>{this.state.count}</div>
                <div className="title"></div>
                <div className="content"></div>
                <div>{this.props.content}</div>
                <div>1233</div>
                <button onClick={this.incrementCount}>add</button>
            </div>
        ) 
    }
}