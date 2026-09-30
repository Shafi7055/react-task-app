import { useState } from "react";

export default function AddTaskModal({onSave, taskToUpdate, onCloseClick}) {
    const [task, setTask] = useState(taskToUpdate || {
        id: crypto.randomUUID(),
        title: "",
        description: "",
        tags: [],
        priority: "",
        isFavorite: false,
    });

    const [isAdd, setIsAdd] = useState(Object.is(taskToUpdate, null))

    const handleChange = (evt) => {
        const name = evt.target.name;
        let value = evt.target.value;
        if (name === 'tags') {
            value = value.split(",");
        }
        setTask({
            ...task,
            [name]: value
        })
    }
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-10"></div>
            <form className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white p-6 border z-20">
                <h2 className="mb-4 text-center text-xl font-bold">
                    {isAdd ? "Add New Task" : "Edit Task" }
                </h2>

                <div className="space-y-4">
                    
                        <label htmlFor="title">Title</label>
                        <input
                            className="w-full border px-2 py-1"
                            type="text"
                            name="title"
                            id="title"
                            value={task.title}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="description">Description</label>
                        <textarea
                            className="w-full border px-2 py-1 min-h-[100px]"
                            name="description"
                            id="description"
                            value={task.description}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <label htmlFor="tags">Tags</label>
                        <input
                            className="w-full border px-2 py-1"
                            type="text"
                            name="tags"
                            id="tags"
                            value={task.tags}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="priority">Priority</label>
                        <select
                            className="w-full border px-2 py-1"
                            name="priority"
                            id="priority"
                            value={task.priority}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Priority</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                </div>

                <div className="mt-6 flex justify-between">
                    <button
                        type="button"
                        className="bg-yellow-200 px-4 py-2"
                        onClick={onCloseClick}
                    >
                        Close
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2"
                        onClick={(e) => { e.preventDefault(); onSave(task, isAdd); }}
                    >
                        Save
                    </button>
                </div>
            </form>
        </>
    );
}
