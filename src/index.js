import { addTask, removeTask,completedTask,fetchTodo } from "./store/tasksReduxToolkit";
import { addEmployee } from "./store/employees";
import store from "./store/configureStore";


// const unsubscribe=store.subscribe(()=>{
//     console.log("Updated",store.getState());
// })


// store.dispatch(addTask({task:"Task 1"}))
// store.dispatch(addTask({task:"Task 2"}))
// console.log(store.getState());

// store.dispatch(completedTask({id :2 }))

// // unsubscribe();

// store.dispatch(removeTask({id: 1}))
// // store.dispatch(fetchTodo())
// console.log(store.getState());

store.dispatch(addEmployee({name:"Riya"}))

// error middleware
// store.dispatch({type:"SHOW_ERROR",payload:"User not found"})
