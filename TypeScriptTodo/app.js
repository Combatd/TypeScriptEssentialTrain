// interface ITodoService {
//     add(todo: Todo): Todo;
//     delete(todoId: number): void;
//     getAll(): Todo[];
//     getById(todoId: number): Todo;
// }
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState || (TodoState = {}));
var todo = {
    name: 'PIck up drycleaning',
    state: TodoState.New
};
function deleteTodo(todo) {
    if (todo.state != TodoState.Complete) {
        throw "Can't delete incomplete task";
    }
}
