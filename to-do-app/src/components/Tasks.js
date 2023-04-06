import React,{useEffect,useState} from 'react';
import store from '../store/configureStore';
import { loadTasks } from '../store/tasksReduxToolkit';
import { useDispatch,useSelector } from 'react-redux';

export default function Tasks() {

   
   const {tasks,loading}=useSelector(state => state.tasks)
   const dispatch = useDispatch()
   useEffect(()=>{
    dispatch(loadTasks())
   },[])
   console.log(tasks);
  return (
    <>
    {
        loading?(
            <p>Loading...</p>
        ):
        <div>
            {tasks?.map((task)=>{
              return(
                <p key={task.id}>
                {task.task}
                </p>

                 )
                 })}
             </div>
                }
    
             </>
  ) 
}
