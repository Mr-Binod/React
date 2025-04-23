import { Component } from "react";

export default class Title extends Component {
    constructor(props) {
        super();
    }
    render() {
        return(
            <div className="Titlediv">
                <span>{this.props.content}</span>
            </div>
        )
    }
}