
import './App.css';
import ReactState from './ReactState';
import FuncReactState from "./FuncReactState";

function App() {
  return (
    <div>
      <h1> React State Test </h1>
      {/* <ReactState reactString={"react"}/> */}
      <FuncReactState reactString={"초깃값"}/> 
    </div>
  );
}

export default App;
