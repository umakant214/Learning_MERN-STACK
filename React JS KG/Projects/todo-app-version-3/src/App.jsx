import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import "./app.css";
import TodoItems from "./component/TodoItems"; // Capital T

function App() {
  const todos = [
    {
      name: "Buy Milk",
      Duedate: "04/06/2023",
    },
    {
      name: "Go to College",
      Duedate: "04/06/2023",
    },
    {
      name: "Book Now",
      Duedate: "04/06/2023",
    },
  ];

  return (
    <div className="border-container">
      <div className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todos} />
      </div>
    </div>
  );
}

export default App;
