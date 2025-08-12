import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NewList from "./NewList";
function App() {
  return (
    <React.Fragment>
      <NewList />
      <h1>Healdy Foods</h1>
      <ul class="list-group">
        <li class="list-group-item">Dal</li>
        <li class="list-group-item">Roti</li>
        <li class="list-group-item">Green Vegiterin</li>
        <li class="list-group-item">salad </li>
        <li class="list-group-item">Milk</li>
      </ul>
    </React.Fragment>
  );
}
export default App;
