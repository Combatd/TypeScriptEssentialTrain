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












// function clone<T>(value: T): T {
//     let serialized = JSON.stringify(value);
//     return JSON.parse(serialized);
// }

// clone('Hello!');
// clone(123);


// clone(true);

// const array: number[] = [1, 2, 3];
// const array2: Array<number> = [1, 2, 3];

// class KeyValuePair<TKey, TValue> {
//     constructor(public key: TKey, public value: TValue) {

//     }
// }

// let pair = new KeyValuePair<number, string>(1, 'First');
// let pair2 = new KeyValuePair<string, Date>('Second', new Date(Date.now()));
// let pair3 = new KeyValuePair<number, string>(3, "Third");

// class KeyValuePairPrinter <T, U> {
//     constructor(private pairs: KeyValuePair<T, U>[]) {

//     }

//     print() {
//         for (let p of this.pairs) {
//             console.log(`${p.key}: ${p.value}`);
//         }
//     }
// }

// // pair2 doesn't share the same generic type parameters, so it is a different type of object
// // let printer = new KeyValuePairPrinter([pair, pair2, pair3]);

// interface IHaveALength {
//     length: number;
// }

// function totalLength<T extends IHaveALength>(x: T, y: T) {
//     var total: number = x.length + y.length;
//     return total;
// }

// class CustomArray<T> extends Array<T> {}

// var length = totalLength([1, 2, 3], new CustomArray<number>())



// var jQuery = {
//     version: 1.10,
//     fn: {}
// };

// (function defineType($) {

//     if( $.version < 1.15 ) {
//         throw 'Plugin requires jQuery version 1.15+';
//     }

//     $.fn.myPlugin = function() {
//         // my plugin code
//     }
// })(jQuery)



import { Todo as TodoTask, TodoState } from './model';
import './jQuery'

let todo: TodoTask;