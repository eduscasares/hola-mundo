import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/level.enum';
import TaskComponent from '../pure/TaskComponent';
import '../../styles/task.scss'
import TaskForm from '../pure/forms/TaskForm';

 
const TaskListComponent = () => {

    const defaultTask1 = new Task( 'Example 1', 'Description 1', false, LEVELS.NORMAL );
    const defaultTask2 = new Task( 'Example 2', 'Description 2', true, LEVELS.URGENT );
    const defaultTask3 = new Task( 'Example 2', 'Description 3', false, LEVELS.BLOCKING );
    
    
    // Estado inicial del componente
    const [tasks, setTasks] = useState( [defaultTask1, defaultTask2, defaultTask3] );
    const [loading, setLoading] = useState(true);


    // Control del cicle de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        
        setLoading(false);

        return () => {
            console.log('TaskListcomponent is going to unmount');
        };
    }, [tasks]);

    function completeTask(task) {
        console.log('Complete this task: ', task);

        // Buscamos el índice del elemento que hemos tocado
        const index = tasks.indexOf(task)

        // Usamos una variable temporal para traernos todos los datos
        const tempTask = [...tasks];

        // Generamos el toggle con el que controlaremos el estado
        tempTask[index].completed = !tempTask[index].completed;

        // Actualizamos el estado con la nueva lista de tareas
        setTasks(tempTask);
    }

    function deleteTask(task) {
        console.log('Delete this task: ', task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);
    }

    function addTask(task) {
        console.log('Added this task: ', task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.push(task)
        setTasks(tempTask);
    }

    return (
        <div>
            <div className='col-12'>
                <div className="card">
                    <div className="card-header p-3">
                        <h5>
                            Your tasks:
                        </h5>
                    </div>

                    <div className="card-body" data-mbd-perfect-scrollbar='true'  style={ { position: 'relative', height: '400px' } }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/**
                                 * TODO: Iterar sobre una lista de tareas para poder mostrar varias filas
                                 */}

                                { tasks.map((task, index) => {
                                    return(
                                        <TaskComponent 
                                            task={ task } 
                                            key={ index } 
                                            complete={ completeTask }
                                            remove={ deleteTask } >
                                        </TaskComponent>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>

                    <TaskForm add = { addTask }></TaskForm>
                </div>
            </div>
        </div>
    );
};

export default TaskListComponent;