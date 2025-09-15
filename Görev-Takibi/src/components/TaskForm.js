import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addTask } from "../todoSlice";
import { v4 as uuid } from "uuid";
import { taskValidationSchema } from "../validationSchema";

function TaskForm() {
  const dispatch = useDispatch();

  const { values, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      taskName: "",
      taskPriority: "",
      taskCategory: "",
      taskDeadline: "",
    },
    validationSchema: taskValidationSchema, // 🔹 burada kullanıyoruz
    onSubmit: (values, action) => {
      const newTask = {
        id: uuid(),
        text: values.taskName,
        completed: false,
        priority: values.taskPriority,
        category: values.taskCategory,
        deadline: values.taskDeadline,
      };
      dispatch(addTask(newTask));
      action.resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit} className="w-full lg:w-1/2 space-y-4">
      {/* Görev adı */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-600">Görev Adı</label>
        <input
          onChange={handleChange}
          name="taskName"
          value={values.taskName}
          placeholder="Görev giriniz..."
          className="w-full outline-none px-4 py-2 text-[#3AB0FF] font-semibold rounded-lg shadow-sm transition duration-300 hover:shadow-md border border-gray-200 focus:border-[#3AB0FF]"
        />
        {errors.taskName && touched.taskName && (
          <span className="text-red-500 text-sm">{errors.taskName}</span>
        )}
      </div>

      {/* Öncelik */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-600">Öncelik</label>
        <select
          name="taskPriority"
          value={values.taskPriority}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#3AB0FF] outline-none shadow-sm"
        >
          <option value="">Seçiniz</option>
          <option value="Düşük">Düşük</option>
          <option value="Orta">Orta</option>
          <option value="Yüksek">Yüksek</option>
        </select>
        {errors.taskPriority && touched.taskPriority && (
          <span className="text-red-500 text-sm">{errors.taskPriority}</span>
        )}
      </div>

      {/* Kategori */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-600">Kategori</label>
        <select
          name="taskCategory"
          value={values.taskCategory}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#3AB0FF] outline-none shadow-sm"
        >
          <option value="">Seçiniz</option>
          <option value="İş">İş</option>
          <option value="Kişisel">Kişisel</option>
          <option value="Ders">Ders</option>
        </select>
        {errors.taskCategory && touched.taskCategory && (
          <span className="text-red-500 text-sm">{errors.taskCategory}</span>
        )}
      </div>

      {/* Teslim tarihi */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-600">
          Teslim Tarihi
        </label>
        <input
          type="date"
          name="taskDeadline"
          value={values.taskDeadline}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#3AB0FF] outline-none shadow-sm"
        />
        {errors.taskDeadline && touched.taskDeadline && (
          <span className="text-red-500 text-sm">{errors.taskDeadline}</span>
        )}
      </div>

      {/* Buton */}
      <div className="text-center">
        <button
          type="submit"
          className="px-4 py-2  bg-[#1E93AB] w-1/2 lg:w-full text-lg text-[#F3F2EC] rounded-lg transition duration-300 hover:bg-[#093FB4] outline-none shadow-md"
        >
          Ekle
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
