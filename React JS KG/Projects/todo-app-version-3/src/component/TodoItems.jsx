import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
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
