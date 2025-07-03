import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import "./app.css";
import TodoItems from "./component/TodoItems"; // Capital T
import { useState } from "react";
import WelcomeMessage from "./component/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, Duedate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (itemName) => {
    const newTodoItems = todoItems.filter((item) => item.name != itemName);
    setTodoItems(newTodoItems);
  };
  return (
    <div className="border-container">
      <div className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}

        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </div>
    </div>
  );
}

export default App;
