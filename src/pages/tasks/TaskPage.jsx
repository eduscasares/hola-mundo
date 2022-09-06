import React from 'react';
import { Outlet } from 'react-router-dom';
import TaskListComponent from '../../components/containers/Task_list'

const TaskPage = () => {
    return (
        <div>
            <TaskListComponent />
            <Outlet />
        </div>
    );
}

export default TaskPage;
 