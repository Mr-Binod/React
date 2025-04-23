import { Component } from "react";
import Title from "./components/title/title";
import Input from "./components/input/input";
import Button from "./components/button/button";


export default class App extends Component {
    constructor() {
        super()

    }
    render() {
        return(
            <>
                <h1>NAVER</h1>
                <div className="Contentwrap">
                    <div className="Titlecontent">
                        <Title content='ID/Phone number'/>
                        <Title content='QR code'/>

                    </div>
                    <div className="Inputcontent">
                        <Input content='ID or Phone number'/>
                        <Input content='Password'/>
                    </div>
                    <div className="Spancontent">
                        <span>stay signed in</span>
                        <span>IP Security</span>
                    </div>
                    <Button content='Sign in'/>
                </div>
            </>
        )
    }
}