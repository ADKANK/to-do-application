import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, toggleTaskCompletion } from "../state/index"

const Task = () => {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const task = useSelector((state) => state.tasks);

    useEffect(() => {
        try {
            setTasks(task);
        } catch (error) {
            console.log(error);
        }
    }
        , [task]);

    const handleAddTask = () => {
        dispatch(addTask({ id: Math.random(), text: input }));
        setInput("");
    }

    const handleDeleteTask = (id) => {
        dispatch(removeTask(id));
    }

    const handleToggleCompletion = (id) => {
        dispatch(toggleTaskCompletion(id));
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddTask();
        }
    }

    return (
        <div className="max-w-md mx-auto mt-4">
            <div className="bg-gray-800 text-white rounded-t-md p-4">
                <h2 className="text-2xl font-bold">Task Manager</h2>
            </div>
            <div className="bg-gray-200 p-4 rounded-b-md">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter task"
                    className="border border-gray-400 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500 mb-4"
                />
                <button
                    onClick={handleAddTask}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                    Add Task
                </button>
                <div className="overflow-y-auto max-h-64 mt-4">
                    <ul>
                        {tasks?.length === 0 ? <li className="text-gray-500">No tasks</li> : (
                            tasks.map((item) => (
                                <li key={item.id} className="flex items-center justify-between bg-white rounded-md p-4 mb-2">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={item.completed}
                                            onChange={() => handleToggleCompletion(item.id)}
                                            className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 focus:outline-none"
                                        />
                                        <span className={item.completed ? 'line-through' : ''}>{item.text || "No task"}</span>
                                    </div>
                                    <button
                                        onClick={() => handleDeleteTask(item.id)}
                                        className="text-red-500 hover:text-red-600 focus:outline-none"
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Task;