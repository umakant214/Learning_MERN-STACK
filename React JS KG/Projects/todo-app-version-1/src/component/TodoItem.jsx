function TodoItem() {
  let todoName = "Buy Milk";
  let todoDate = "04/06/2023";
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-sm-6">{todoName}</div>
        <div className="col-sm-4">{todoDate}</div>
        <div className="col-sm-2">
          <button className="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
