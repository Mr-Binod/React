import { Component } from "react";

export default class Button extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div>
                <button onClick={this.props.Retry()}>다시 시작</button>
            </div>
        )
    }
}