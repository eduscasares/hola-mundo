import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/level.enum';
import TaskComponent from '../pure/TaskComponent';

 
const TaskListComponent = () => {

    const defaultTask = new Task( 'Example', 'Default description', false, LEVELS.NORMAL );

    const changeState = (id) => {
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