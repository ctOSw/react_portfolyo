import React from "react";
import { useFormik } from "formik";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { closeEditMenu, editTask } from "../todoSlice";

function EditPopup() {
  const { menuOpen, selectedId } = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      taskName: "",
      taskPriority: "",
      taskCategory: "",
      taskDeadline: "",
    },
    onSubmit: (values, action) => {
      const updatedTask = {
        id: selectedId,
        text: values.taskName,
        priority: values.taskPriority,
        category: values.taskCategory,
        deadline: values.taskDeadline,
      };
      dispatch(editTask(updatedTask));
      action.resetForm();
      dispatch(closeEditMenu());
    },
  });

  return (
    <div
      className={`${
        menuOpen ? "flex" : "hidden"
      } absolute left-0 top-0 bg-[#000]/20 w-full h-screen items-center justify-center`}
      onClick={() => dispatch(closeEditMenu())}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-1/2 relative  bg-[#F9F2ED] p-6 rounded-xl shadow-lg"
      >
        <div
          className="absolute right-5 top-2 cursor-pointer text-2xl mb-4"
          onClick={() => dispatch(closeEditMenu())}
        >
          <IoMdClose />
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {/* Görev adı */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">
              Görev Adı
            </label>
            <input
              type="text"
              name="taskName"
              onChange={handleChange}
              value={values.taskName}
              className="w-full p-3 outline-none rounded-lg border"
              placeholder="Yeni görev gir."
            />
          </div>

          {/* Öncelik */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">Öncelik</label>
            <select
              name="taskPriority"
              value={values.taskPriority}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border"
            >
              <option value="">Seçiniz</option>
              <option value="Düşük">Düşük</option>
              <option value="Orta">Orta</option>
              <option value="Yüksek">Yüksek</option>
            </select>
          </div>

          {/* Kategori */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-600">
              Kategori
            </label>
            <select
              name="taskCategory"
              value={values.taskCategory}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border"
            >
              <option value="">Seçiniz</option>
              <option value="İş">İş</option>
              <option value="Kişisel">Kişisel</option>
              <option value="Ders">Ders</option>
            </select>
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
              className="w-full p-3 rounded-lg border"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#3AB0FF] w-1/2 py-3 px-4 rounded-lg text-white font-semibold transition duration-500 hover:bg-[#4E71FF]  "
            >
              Onayla
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPopup;
