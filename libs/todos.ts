export type Todo = {
  id: string;
  description: string;
  completed: boolean;
};

const todos: Todo[] = [
  {
    id: "test-todo-123",
    description: "testing",
    completed: false,
  },
];

export const createTodo = (todo: Todo): Todo => {
  todos.push(todo);

  console.log(todos);

  return todo;
};

export const getTodos = (): Todo[] => {
  return todos;
};

export const editTodo = (
  id: string,
  editableFields: { description?: string; completed?: boolean }
): Todo => {
  const indexToEdit = todos.findIndex((todo) => todo.id === id);

  todos[indexToEdit] = {
    ...todos[indexToEdit],
    ...editableFields,
  };

  return todos[indexToEdit];
};

export const findOneTodo = (id: string): Todo => {
  const todo = todos.find((todo) => todo.id === id);

  if (!todo) throw new Error("Todo Not Found");

  return todo;
};

export const deleteTodo = (id: string): Todo => {
  const indexToDelete = todos.findIndex((todo) => todo.id === id);
  const deletedTodo = todos[indexToDelete];

  delete todos[indexToDelete];

  return deletedTodo;
};
