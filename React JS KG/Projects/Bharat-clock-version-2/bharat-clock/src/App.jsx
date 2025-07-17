import AppName from "./component/AppName";
import AppContent from "./component/AppContent";
import AppClock from "./component/CurrentTime";

function App() {
  return (
    <div className="main-container">
      <div className="appName">
        <AppName />
      </div>
      <div className="Content">
        <AppContent />
      </div>
      <div className="Content">
        <AppClock />
      </div>
    </div>
  );
}
export default App;
