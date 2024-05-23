import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo_items_store";
import TodoItemsContextProvider from "./store/todo_items_store";
import "./App.css";
import {  useReducer } from "react";


function App() {
  return (
    <>
        
  <center className='todo-container'>
  <TodoItemsContextProvider>
    <AppName/>
    <AddTodo />
    <WelcomeMessage />
    <TodoItems />
    </TodoItemsContextProvider>
     </center>
    </>
  );
}

export default App;
