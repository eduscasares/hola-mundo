import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/level.enum';
import TaskComponent from '../pure/TaskComponent';

 
const TaskListComponent = () => {

    const defaultTask = new Task( 'Example', 'Default description', false, LEVELS.NORMAL );
    
    
    // Estado inicial del componente
    const [tasks, setTasks] = useState( [defaultTask] );
    const [loading, setLoading] = useState(true);


    // Control del cicle de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        
        setLoading(false);

        return () => {
            console.log('TaskListcomponent is going to unmount');
        };
    }, [tasks]);


    
    const changeCompleted = (id) => {
        console.log('TODO: cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                <h1>Your tasks</h1>
            </div>
            
            {/* TODO: Aplicar un For/Map para renderizar una lista */}
            <TaskComponent task={ defaultTask }></TaskComponent>
        </div>
    );
};

export default TaskListComponent;