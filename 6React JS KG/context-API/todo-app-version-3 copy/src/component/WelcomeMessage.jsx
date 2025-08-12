import { useContext } from "react";
import { TodoitemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const todoItems = useContext(TodoitemsContext);

  return (
    todoItems.length === 0 && <p className="text-center">Enjoy Your Day!</p>
  );
};
export default WelcomeMessage;
