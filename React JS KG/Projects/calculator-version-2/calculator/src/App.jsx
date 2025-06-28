import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/buttonsContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setcalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}> </ButtonsContainer>
      </div>
    </>
  );
}
export default App;
