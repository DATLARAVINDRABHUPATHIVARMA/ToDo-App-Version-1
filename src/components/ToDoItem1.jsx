function ToDoItem1() {
  let todotask = "Buy New House ";
  let tododt = "09/01/2027 03:00 AM";

  return (
    <div class="container ">
      <div class="row td-row">
        <div class="col-2">{tododt}</div>
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

export default ToDoItem1;
