import { useEffect, useState } from "react";
import TodoList from "./components/Todolist"; // Correct import path
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async () => {
    setLoading(true);
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setLoading(false);
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <h1>Todos</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <TodoList todos = {todos} />
      )}
    </>
  );
};

export default App;
