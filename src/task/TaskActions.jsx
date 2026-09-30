

export default function TaskActions({onAddClick, onDeleteAllClick}) {
    return (
        <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Your Tasks</h2>
            <div className="flex gap-2">
                <button
                    className="bg-blue-500 text-white px-4 py-2"
                    onClick={onAddClick}>
                    Add Task
                </button>
                <button className="bg-red-500 text-white px-4 py-2"
                onClick={onDeleteAllClick}>
                    Delete All
                </button>
            </div>
        </div>
    );
}
