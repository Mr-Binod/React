import { Component } from "react";


export default class Button extends Component {
    constructor(props) {
        super();
    }

    render() {
        return(
            <div className="Btn">
                <button>{this.props.content}</button>
            </div>
        )
    }
}