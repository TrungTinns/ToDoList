import { ChangeEvent, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { CreateNewTodo } from "./components/CreateNewTodo";
import { TodoList } from "./components/TodoList";

export type TodoType = { id: string; name: string; isCompleted: boolean };

function App() {
  const [todoList, setTodoList] = useState<TodoType[]>(() => {
    const savedTodoList = JSON.parse(localStorage.getItem('todoList') ?? '[]')
    if (savedTodoList?.length) {
      return savedTodoList;
    }
    return [];
  });

  const [newTodoString, setNewTodoString] = useState('');

  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoString(e.target.value);
  };

  const updateIsCompleted = (todoId: string) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted }
        }
        return todo;
      })
    })
  }

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const onAddBtnClick = () => {
    const newTodoItem: TodoType = {
      id: uuidv4(),
      name: newTodoString,
      isCompleted: false,
    }
    setTodoList([newTodoItem, ...todoList])
    setNewTodoString('')
  }

  return (
    <>
      <p>ToDo App</p>
      <CreateNewTodo newTodoString={newTodoString} onNewTodoChange={onNewTodoChange} onAddBtnClick={onAddBtnClick} />
      <TodoList todoList={todoList} updateIsCompleted={updateIsCompleted} />
    </>
  )
}

export default App
