import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItem from "./component/TodoItem";
import TodoItem2 from "./component/TodoItem2";
import "./app.css";

function App() {
  return (
    <div className="border-container">
      <div className="todo-container">
        <AppName />
        <AddTodo />
        <div className="todoitems">
          <TodoItem />
          <TodoItem2 />
        </div>
      </div>
    </div>
  );
}
export default App;
