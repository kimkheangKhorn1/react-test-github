const TodoList = ({ todos }) => {
  return (
    <>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ol>
    </>
  );
};

export default TodoList;
