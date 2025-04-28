import Button from "./components/atoms/button/Button";
import Trainingfooter from "./components/molecules/Trainingfooter";
import Personalinfo from "./components/molecules/Personalinfo";
import Student from "./components/templates/Student";


const App = () => {
  return (
    <div className="App">
      {/* <Button isIcon={true}>레벨</Button> */}
      <Student />
      {/* <Trainingfooter/> */}
    </div>
  );
}

export default App;
