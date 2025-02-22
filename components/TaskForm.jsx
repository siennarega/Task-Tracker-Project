import React, {useState} from 'react';
import "./TaskForm.css";
import Tag from "./Tag.jsx";


//Setting up the form of each task
const TaskForm = ({setTasks}) => {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: [],
    });

    //boolean checking whether tag exists in task
    const checkTag = (tag) => {
        return taskData.tags.some(item => item===tag)
    };

    //Setting up dynamic tag selection 
    const selectTag = (tag) => {
        //if tag already exists on task, remove it
        if(taskData.tags.some(item => item===tag)) {
            const filterTags = taskData.tags.filter(item => item !==tag)
            setTaskData(prev => {
                return {...prev, tags: filterTags}
                })
            }
            //if tag does not exist, add it to the task
            else{
                setTaskData(prev => {
                    return {...prev, tags: [...prev.tags, tag]};
            });
        };
    };

    //handles change of task data
    const handleChange = (e) => {
        const {name, value} = e.target;

        setTaskData(prev => {
            return {...prev, [name]: value}
        });
    };

    //handles task data when submitted
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskData);
        setTasks(prev => {
            return [...prev, taskData]
        });
        setTaskData({
            task: "",
            status: "todo",
            tags: [],
        });
    };
    
    //returns taskform
    return (
        <header className = 'app_header'>
            <form onSubmit={handleSubmit}>
                <input 
                type = "text" 
                name = "task"
                value={taskData.task}
                className="task_input"
                placeholder="Enter your task" 
                onChange={handleChange}
                />

                <div className='task_from_botton_line'>

                    <div>
                        <Tag tagName='Studies' selectTag={selectTag} selected={checkTag("Studies")}/>
                        <Tag tagName='Work' selectTag={selectTag} selected={checkTag("Work")}/>
                        <Tag tagName='Admin' selectTag={selectTag} selected={checkTag("Admin")}/>
                        <Tag tagName='Other' selectTag={selectTag} selected={checkTag("Other")}/>
                    </div>

                    <div>
                        <select 
                            name="status"
                            value={taskData.status}
                            className='task_status'
                            onChange={handleChange}>
                            <option value='todo'>To Do</option>
                            <option value='in progress'>In Progress</option>
                            <option value='completed'>Completed</option>
                        </select>
                        <button type="submit" className='task_submit'>Add Task
                        </button>
                    </div>

                </div>
            </form>
        </header>
    )
};

export default TaskForm;
