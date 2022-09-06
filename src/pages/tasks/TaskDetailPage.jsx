import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetailPage = ({ tasks }) => {

    const { taskId } = useParams();
    console.log(tasks)

    return (
        <div>
            <h1>Task Detail | Task { taskId } </h1>
            <p>Task ID: { taskId }</p>

                {/* 
                    COGEMOS EL ID DEL TASK VIA USEPARAMS, LUEGO UTILIZAMOS ESE ID PARA 
                    MAPEAR LOS ELEMENTOS DENTRO DEL ARRAY DONDE ESTÁN SITUADAS LAS 
                    DIFERENTES TASKS, Y LE RESTAMOS UNO, PUESTO QUE LOS ARRAYS EMPIEZAN
                    EN [0] Y NUESTRA LISTA EN POSICION [0], LA ID = 1 
                */}

            <p>Task name: { tasks[taskId - 1].name }</p> 
            <p>Task description: { tasks[taskId - 1].description }</p>

        </div>
    );
}

export default TaskDetailPage;
 