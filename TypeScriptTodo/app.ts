class TodoService {

    private static _lastId: number = 0;

    private get nextId() {
        return TodoService.getNextId();
    }

    private set nextId(nextId) {
        TodoService._lastId = nextId - 1;
    }

    constructor(private todos: Todo[]) {
    }

    add(todo: Todo) {
        var newId = this.nextId;
    }

    private getAll() {
        return this.todos;
    }

    static getNextId() {
        return TodoService.lastId += 1;
    }
}

interface Todo {
    name: string;
    state: TodoState;
}

enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}

class SmartTodo {
    
    _state: TodoState;
    
    name: string;
    
    get state() {
        return this._state;
    }
    
    set state(newState) {
        
        if(newState == TodoState.Complete) {
            
            var canBeCompleted = 
                this.state == TodoState.Active
                || this.state == TodoState.Deleted;
                
            if(!canBeCompleted) {
                throw "Todo must be Active or Deleted in order to be marked Completed"
            }
        }
        
        this._state = newState;
    }
    
    constructor(name: string) {
        this.name = name;
    }
}

var todo = new SmartTodo("Pick up drycleaning");

todo.state = TodoState.Complete;

todo.state

abstract class TodoStateChanger {
    
    constructor(private newState: TodoState) {
    }
    
    abstract canChangeState(todo: Todo): boolean;
    
    changeState(todo: Todo): Todo {
        if(this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        
        return todo;
    }
    
}

class CompleteTodoStateChanger extends TodoStateChanger {
    
    constructor() { // overriding the constructor
        super(TodoState.Complete);
    }

    canChangeState(todo: Todo): boolean {
        return !!todo &&
            todo.state == TodoState.Active ||
            todo.state == TodoState.Deleted;
    }

}