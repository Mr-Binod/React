import { Component } from "react";


export default class Input extends Component {
    constructor(props) {
        super()
        
    }
    render() {
        return (
            <>
                <div className="Inputdiv ">
                    <label>{this.props.content}</label>
                    <input type="text" />
                </div>
            </>
        )
    }
}