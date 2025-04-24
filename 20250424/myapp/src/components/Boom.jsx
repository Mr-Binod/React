import { Component } from "react";
import {boom, bomb} from '../images'
// import Bombgame from "../page/Bombgame";

export default class Boom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // name : 'soon',
            isActive : false
        }
    }

    bombActiveHandler = () => {
        if(this.state.isActive) return;
        // will override so to maintain original state with name we use spread 
        this.setState({...this.state, isActive : true})
        this.props.setValue()
    }
    componentDidMount() {
        console.log('나 폭탄 생성되었어')
    }
    componentDidUpdate() {
        console.log('나 터진다')
        console.log(this.props.reset)
        if(this.props.reset){
            this.active();
            console.log("123123")
        }
    }
    active = () => {
        this.setState({isActive : false})
    }
    render() {
        return (
            <div className="bomb-wrap" onClick={this.bombActiveHandler}>
                <img src={this.state.isActive ? boom : bomb  } alt="bomb" />

            </div>
        )
    }
}