function ToDoItem2() {
  let todotask = "Fitness Time";
  let todofrom = "14/10/2025 06:00 AM";
  let todoto = "14/10/2025 07:00 AM";

  return (
    <div class="container">
      <div class="row td-row">
        <div class="col-2"> {todofrom} </div>
        <div class="col-2"> {todoto} </div>
        <div class="col"> {todotask} </div>
        <div class="col-md-auto">
          <button type="button" class="btn btn-danger t-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default ToDoItem2;
