import { addTask, removeTask,completedTask } from "./store/action";
import store from "./store/store";

const unsubscribe=store.subscribe(()=>{
    console.log("Updated",store.getState());
})


store.dispatch(addTask("Task 1"))
console.log(store.getState());
store.dispatch(addTask("Task 2"))
console.log(store.getState());

unsubscribe();

store.dispatch(removeTask(1))
console.log(store.getState());

store.dispatch(completedTask(2))
console.log(store.getState());