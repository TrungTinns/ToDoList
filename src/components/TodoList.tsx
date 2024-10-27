import { TodoType } from '../App';
import { ToDo } from './ToDo';

export const TodoList = ({
    todoList,
    updateIsCompleted }: {
        todoList: TodoType[];
        updateIsCompleted: (todoId: string) => void;
    }) => {
    return (
        <div>
            {todoList.map((todo) => {
                return <ToDo
                    todoId={todo.id}
                    key={todo.id}
                    name={todo.name}
                    isCompleted={todo.isCompleted}
                    updateIsCompleted={updateIsCompleted} />;
            })}
        </div>
    )
}
