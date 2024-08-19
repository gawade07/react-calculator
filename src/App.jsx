import Display from "./components/Dispaly";
import Buttons from "./components/Buttons";
import style from "./App.module.css";
import { useState } from "react";

function App() {
  let [calValue, setcalValue] = useState("");

  let onCliked = (e) => {
    if(e==="c"){
      setcalValue("")
    }else if(e==="="){
      const result =eval(calValue);
      setcalValue(result)
    }else{
      const newCalvalue= calValue + e;
      setcalValue(newCalvalue)
    }
  };
  return (
    <>
      01-calculator-verson-02
      <center id={style.calculator} className="">
        <Display calValue={calValue}></Display>
        <Buttons onClickButton={(e) => onCliked(e)}></Buttons>
      </center>
    </>
  );
}

export default App;
