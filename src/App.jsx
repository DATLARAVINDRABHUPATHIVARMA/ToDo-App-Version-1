import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItem from "./components/ToDoItem";
import ToDoItem1 from "./components/ToDoItem1";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddToDo />
      <div class="list-container">
        <ToDoItem />
        <ToDoItem1 />
      </div>
    </center>
  );
}

export default App;
