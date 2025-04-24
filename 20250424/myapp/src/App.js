import { Component } from "react";
import Bombgame from "./page/Bombgame.jsx";
import Button from "./components/Button.jsx";


export default class App extends Component {
  
  render() {
    return (
      <>
         안녕
         {/* <img src="https://ssl.pstatic.net/melona/libs/1525/1525467/0eb0c0077127b459a8b2_20250423150759052.jpg"/>
         <img src={hello}/> */}
      <Bombgame/>
      </>
    )
  }
}