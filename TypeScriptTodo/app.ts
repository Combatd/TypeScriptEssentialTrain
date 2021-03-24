class ToDoService {

    static lastId: number = 0;

    constructor(private todos: Todo[]) {
        this.todos = todos;
    }

    add(todo: Todo) {
        var newId = TodoService.getNextI();
    }

    getAll() {
        return this.todos;
    }

    static getNextId() {
        return ToDoService.lastId += 1;
    }
}


interface Todo {
    name: string;
    state: TodoState;
}

// interface ITodoService {
//     add(todo: Todo): Todo;
//     delete(todoId: number): void;
//     getAll(): Todo[];
//     getById(todoId: number): Todo;
// }

enum TodoState {
    New = 1,
    Active = 2,
    Complete = 3,
    Deleted = 4
}

let todo: Todo = {
    name: 'PIck up drycleaning',
    state: TodoState.New
};


function deleteTodo (todo: Todo) {
    if (todo.state != TodoState.Complete) {
        throw "Can't delete incomplete task"
    }
}