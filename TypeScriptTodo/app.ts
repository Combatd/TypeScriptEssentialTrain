interface Todo {
    name: string;
    completed?: boolean; // completed property is optional, but when it exists, always a boolean
}

interface ITodoService {
    add(todo: Todo): Todo;
    delete(todoId: number): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
}

let todo: Todo = {
    name: 'PIck up drycleaning'
};