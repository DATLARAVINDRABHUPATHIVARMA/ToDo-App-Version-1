import ToDoItem from "./ToDoItem";

const ToDoItems = ({ todoItems }) => {
  return (
    <>
      <div className="list-container">
        {todoItems.map(item =><ToDoItem key={item.todofrom} todofrom={item.todofrom} todoto={item.todoto} todotask={item.todotask}></ToDoItem>)}
      </div>
    </>
  );
};

export default ToDoItems;
