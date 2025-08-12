function AddTodo() {
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-sm-6">
          <input type="text" name="" id="" placeholder="Enter Todo Here" />
        </div>
        <div className="col-sm-4">
          <input type="date" name="" id="" />
        </div>
        <div className="col-sm-2">
          <button className="btn btn-success kg-button">Add</button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
