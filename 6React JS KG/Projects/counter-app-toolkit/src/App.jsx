import "./App.css";
import Container from "./components/Container";
import Controls from "./components/Controls";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";

function App() {
  return (
    <>
      <center>
        <Container>
          <Header />
          <DisplayCounter />
          <Controls />
        </Container>
      </center>
    </>
  );
}

export default App;
