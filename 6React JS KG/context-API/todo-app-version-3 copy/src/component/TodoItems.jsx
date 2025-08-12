import { useContext } from "react";
import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";
import { TodoitemsContext } from "../store/todo-items-store";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  const todoItems = useContext(TodoitemsContext);

  return (
    <div className={style.todoitems}>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoDate={item.Duedate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};
export default TodoItems;
