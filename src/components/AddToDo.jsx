function AddToDo() {
  return (
    <div class="container">
      <div class="row td-row">
        <div class="col-2">
          <h4>From</h4>
          <input type="datetime-local" />
        </div>
        <div class="col-2">
          <h4>To</h4>
          <input type="datetime-local" />
        </div>
        <div class="col">
          <h4>To-Do Task</h4>
          <input type="text" placeholder="Enter the To-Do text here" />
        </div>
        <div class="col-md-auto">
          <button type="button" class="p-4 btn btn-success t-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
