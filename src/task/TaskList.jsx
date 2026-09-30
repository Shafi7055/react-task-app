import { FaStar } from "react-icons/fa";

export default function TaskList({ tasks, onEdit, onDelete, onFav }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2"></th>
            <th className="p-2">Title</th>
            <th className="p-2">Description</th>
            <th className="p-2">Tags</th>
            <th className="p-2">Priority</th>
            <th className="p-2">Options</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-b">
              <td className="p-2">
                <button onClick={() => onFav(task.id)}>
                  {task.isFavorite ? (
                    <FaStar color="gold" />
                  ) : (
                    <FaStar color="gray" />
                  )}
                </button>
              </td>
              <td className="p-2">{task.title}</td>

              <td className="p-2">{task.description}</td>
              <td className="p-2">
                <ul className="flex gap-1 flex-wrap">
                  {task.tags.map((tag) => (
                    <li
                      key={tag}
                      className="bg-gray-200 px-2 py-1 text-sm rounded"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </td>
              <td className="p-2">{task.priority}</td>
              <td className="p-2">
                <div className="flex gap-2">
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => onDelete(task.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => onEdit(task)}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
