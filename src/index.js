import { addTask, removeTask } from "./action";
import store from "./store";


store.dispatch(addTask("Task 1"))
console.log(store.getState());

store.dispatch(removeTask(1))
console.log(store.getState());