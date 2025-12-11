function AddToDo() {
  return (
    <div className="container">
      <div className="row td-row">
        <div className="col-2">
          <h4>From</h4>
          <input type="datetime-local" />
        </div>
        <div className="col-2">
          <h4>To</h4>
          <input type="datetime-local" />
        </div>
        <div className="col">
          <h4>To-Do Task</h4>
          <input type="text" placeholder="Enter the To-Do text here" />
        </div>
        <div className="col-md-auto">
          <button type="button" className="p-4 btn btn-success t-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
