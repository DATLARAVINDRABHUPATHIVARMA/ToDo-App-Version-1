function ToDoItem({ todotask, todofrom, todoto }) {
  return (
    <div className="container">
      <div className="row td-row">
        <div className="col-2">{todofrom}</div>
        <div className="col-2">{todoto}</div>
        <div className="col">{todotask}</div>
        <div className="col-md-auto">
          <button type="button" className="btn btn-danger t-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
