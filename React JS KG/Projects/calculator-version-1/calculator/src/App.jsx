import styles from "./App.module.css";
import ButtonsContainer from "./components/buttonsContainer";
import Display from "./components/Display";

function App() {
  return (
    <>
      <div className={styles.calculator}>
        <Display />
        <ButtonsContainer />
      </div>
    </>
  );
}
export default App;
