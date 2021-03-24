// class TodoService {
//     private static _lastId: number = 0;
//     private get nextId() {
//         return TodoService.getNextId();
//     }
//     private set nextId(nextId) {
//         TodoService._lastId = nextId - 1;
//     }
//     constructor(private todos: Todo[]) {
//     }
//     add(todo: Todo) {
//         var newId = this.nextId;
//     }
//     private getAll() {
//         return this.todos;
//     }
//     static getNextId() {
//         return TodoService.lastId += 1;
//     }
// }
// interface Todo {
//     name: string;
//     state: TodoState;
// }
// enum TodoState {
//     New = 1,
//     Active,
//     Complete,
//     Deleted
// }
// class SmartTodo {
//     constructor(public name: string) {
//     }
// }
// abstract class TodoStateChanger {
//     constructor(private newState: TodoState) {
//     }
//     abstract canChangeState(todo: Todo): boolean;
//     changeState(todo: Todo): Todo {
//         if(this.canChangeState(todo)) {
//             todo.state = this.newState;
//         }
//         return todo;
//     }
// }
// class CompleteTodoStateChanger extends TodoStateChanger {
//     constructor() { // overriding the constructor
//         super(TodoState.Complete);
//     }
//     canChangeState(todo: Todo): boolean {
//         return !!todo &&
//             todo.state == TodoState.Active ||
//             todo.state == TodoState.Deleted;
//     }
// }
function clone(value) {
    var serialized = JSON.stringify(value);
    return JSON.parse(serialized);
}
clone('Hello!');
clone(123);
clone(true);
var array = [1, 2, 3];
var array2 = [1, 2, 3];
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    return KeyValuePair;
}());
var pair = new KeyValuePair(1, 'First');
var pair2 = new KeyValuePair('Second', new Date(Date.now()));
var pair3 = new KeyValuePair(3, "Third");
var KeyValuePairPrinter = /** @class */ (function () {
    function KeyValuePairPrinter(pairs) {
        this.pairs = pairs;
    }
    KeyValuePairPrinter.prototype.print = function () {
        for (var _i = 0, _a = this.pairs; _i < _a.length; _i++) {
            var p = _a[_i];
            console.log(p.key + ": " + p.value);
        }
    };
    return KeyValuePairPrinter;
}());
// pair2 doesn't share the same generic type parameters, so it is a different type of object
// let printer = new KeyValuePairPrinter([pair, pair2, pair3]);
