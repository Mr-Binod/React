import { useDispatch, useSelector } from "react-redux";
import Userinfo from "./components/atoms/Userinfo";
import Loginbtn from "./components/atoms/Loginbtn";
import Order from "./components/atoms/Order";

function App() {
  return (
    <div className="App">
      <Userinfo />
      <Loginbtn />
      <Order />
    </div>
  );
}

export default App;
