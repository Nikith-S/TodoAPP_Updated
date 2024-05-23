import { useContext, useRef } from "react";
import { TodoItemsContext } from "../store/todo_items_store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoName=useRef('');
  const dueDateItems=useRef('');

  const handleAddButtonClicked = () => {
    const newTodoItem=todoName.current.value;
    const newDueDate=dueDateItems.current.value;
    addNewItem(newTodoItem,newDueDate)
    dueDateItems.current.value=''
    todoName.current.value=''
     

  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoName}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateItems} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;