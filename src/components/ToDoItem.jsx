function ToDoItem() {
  let todotask = "Buy Car";
  let todofrom = "09/01/2025 06:00 PM";
  let todoto = "09/01/2025 07:00 PM";

  return (
    <div class="container">
      <div class="row td-row">
        <div class="col-2">{todofrom}</div>
        <div class="col-2">{todoto}</div>
        <div class="col">{todotask}</div>
        <div class="col-md-auto">
          <button type="button" class="btn btn-danger t-button">
            Delete 
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
