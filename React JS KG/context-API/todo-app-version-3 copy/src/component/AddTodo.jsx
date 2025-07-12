import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    console.log(event);
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container ">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-sm-6">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-sm-4">
          <input
            type="date"
            name=""
            id=""
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-sm-2">
          <button className="btn btn-success kg-button">
            <IoMdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
