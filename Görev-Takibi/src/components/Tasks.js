import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaRegEdit, FaCheck } from "react-icons/fa";
import { addCompletedTask, deleteTask, openEditMenu } from "../todoSlice";

function Tasks() {
  let { taskList, filter, priorityFilter, categoryFilter } = useSelector(
    (store) => store.todos
  );

  const dispatch = useDispatch();

  const filteredTasks = taskList.filter((task) => {
    if (filter === "Aktif") return !task.completed;
    if (filter === "Tamamlanmış") return task.completed;

    if (priorityFilter === "Düşük") {
      return task.priority === "Düşük";
    } else if (priorityFilter === "Orta") {
      return task.priority === "Orta";
    } else if (priorityFilter === "Yüksek") {
      return task.priority === "Yüksek";
    }

    if (categoryFilter === "İş") {
      return task.category === "İş";
    } else if (categoryFilter === "Kişisel") {
      return task.category === "Kişisel";
    } else if (categoryFilter === "Ders") {
      return task.category === "Ders";
    }

    return true; // "All"
  });

  return (
    <div
      className={`mt-5 w-full h-[14em]  ${
        taskList.length > 3 ? "overflow-y-scroll" : ""
      }  rounded-lg`}
    >
      {/* Responsive container */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Görev Adı
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Öncelik
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Kategori
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Teslim tarihi
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                Tamamlanma Durumu
              </th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-600 uppercase tracking-wider">
                İşlemler
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {filteredTasks.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-4 py-3  w-3/4 whitespace-normal align-top">
                  <div className="text-[#0EA5E9] font-semibold text-sm">
                    {item.text}
                  </div>
                </td>

                <td className="px-4 py-3 align-top">
                  {/* Priority badge */}
                  <span
                    className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full ${
                      item.priority === "Yüksek"
                        ? "bg-red-100 text-red-800"
                        : item.priority === "Orta"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {item.priority}
                  </span>
                </td>

                <td className="px-4 py-3 align-top">
                  <span className="inline-block text-sm text-gray-700 bg-gray-50 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </td>

                <td className="px-4 w-[15%] py-3 align-top text-sm text-gray-600">
                  <div>{item.deadline}</div>
                </td>

                <td className="px-4  py-3 align-top text-sm">
                  {item.completed ? (
                    <span className="text-sm text-gray-500">Tamamlandı</span>
                  ) : (
                    <span className="text-sm text-gray-500">Beklemede</span>
                  )}
                </td>

                <td className="px-4 py-3 align-top flex text-right space-x-2">
                  <button
                    className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition"
                    title="Düzenle"
                    onClick={() => dispatch(openEditMenu(item.id))}
                  >
                    <FaRegEdit className="text-[#FFB562] text-lg" />
                  </button>

                  <button
                    onClick={() => dispatch(deleteTask(item.id))}
                    className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition"
                    title="Sil"
                  >
                    <MdDelete className="text-[#f00] text-lg" />
                  </button>

                  <button
                    className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition"
                    title="Tamamlandı olarak işaretle"
                    onClick={() => dispatch(addCompletedTask(item.id))}
                  >
                    <FaCheck className="text-green-500 text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* boş liste için hoş bir mesaj */}
        {filteredTasks.length === 0 && (
          <div className="p-6 text-center text-gray-500">Görev bulunamadı.</div>
        )}
      </div>
    </div>
  );
}

export default Tasks;
