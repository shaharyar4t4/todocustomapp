import { create } from 'zustand';
import { Todo } from '../type/todoType';

const dummyTodos: Todo[] = [
    {
        id: '1',
        title: 'Complete React Native UI',
        description: 'Finish the login and dashboard screens.',
        completed: true,
    },
    {
        id: '2',
        title: 'Add todo functionality',
        description: 'Create, update and delete todo items.',
        completed: false,
    },
    {
        id: '3',
        title: 'Connect authentication API',
        description: 'Connect the login form with the backend API.',
        completed: false,
    },
    {
        id: '4',
        title: 'Write application tests',
        description: 'Add tests for authentication and todo flows.',
        completed: false,
    },
];

interface TodoStore {
    todos: Todo[];
    toggleTodo: (id: string) => void;
}

export const useTodoStore = create<TodoStore>(set => ({
    todos: dummyTodos,
    toggleTodo: id =>
        set(state => ({
            todos: state.todos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo,
            ),
        })),
}));

export { dummyTodos };
export type { TodoStore };
