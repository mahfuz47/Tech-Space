import "./App.css";
import Header from "./components/Header/Header";
import Answers from "./components/Q-and-A/Answers";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Answers></Answers>
    </div>
  );
}

export default App;
