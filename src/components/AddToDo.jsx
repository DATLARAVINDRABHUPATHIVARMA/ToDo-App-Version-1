function AddToDo() {
  return (
    <div class="container">
      <div class="row td-row">
        <div class="col-2">
          <input type="datetime-local" />
        </div>
        <div class="col">
          <input type="text" placeholder="Enter the To-Do text here" />
        </div>
        <div class="col-md-auto">
          <button type="button" class="btn btn-success t-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
