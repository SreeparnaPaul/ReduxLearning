 import { getTasks } from "./store/tasksReduxToolkit";
import store from "./store/configureStore";
import axios from 'axios'
import { fetchTasks } from "./store/tasksReduxToolkit";

//1.simple function method
const gettingTasks = async() =>{
    try {
       //calling an api
    const response =await axios.get("http://localhost:5000/api/tasks");
    console.log(response);
    //dispatch action
    store.dispatch(getTasks({tasks: response.data})) ;
    } catch (error) {
        store.dispatch({
            type:"SHOW_ERROR",
            payload:{error:error.message},
        })
    }
    
}

gettingTasks();

//2.createAsyncThunk()

// store.dispatch(fetchTasks());

store.dispatch({
    type:"apiRequest",
    payload:{
        url:"/tasks",
        onSuccess:"tasks/getTasks",
        onError:"SHOW_ERROR"
    }
})

