import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItems from "./components/ToDoItems";

function App() {

  const todoItems = [
    { todotask: "Fitness Period", todofrom: "10/12/2025 07:00 AM", todoto: "10/12/2025 08:00 AM" },
    { todotask: "Ready and Refresh", todofrom: "10/12/2025 08:00 AM", todoto: "09/12/2025 09:00 AM" },
    { todotask: "Breakfast Time", todofrom: "10/12/2025 09:00 AM", todoto: "10/12/2025 09:30 AM" },
    { todotask: "Office Work", todofrom: "10/12/2025 09:30 AM", todoto: "10/12/2025 10:00 AM" },
  ]

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <ToDoItems todoItems={todoItems}></ToDoItems>
    </center>
  );
}

export default App;
