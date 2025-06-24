import MyComponent from "./HelloWorld";
import { AnotherComp, MultiComp } from "./MultiComp";
import KgButton from "./KgButton";
import Navbar from "./Nav";
import Random from "./Random";
function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <MyComponent />
      <MultiComp />
      <AnotherComp />
      <KgButton />
      <KgButton />
      <KgButton />
      <Navbar />
      <Random />
    </div>
  );
}
export default App;
