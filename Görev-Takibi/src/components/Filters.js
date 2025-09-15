import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryFilter,
  setDateSort,
  setFilter,
  setPriorityFilter,
} from "../todoSlice";

function Filters() {
  const { filter } = useSelector((store) => store.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap mt-6 gap-4">
      {["Hepsi", "Aktif", "Tamamlanmış"].map((f) => (
        <button
          key={f}
          onClick={(e) => dispatch(setFilter(e.currentTarget.innerHTML))}
          className={`bg-[#F3F2EC] text-[#E62727] px-3 py-1 rounded-md
            transition duration-300 hover:bg-[#FFC300]
            ${filter === f ? "bg-[#ffc300]" : ""}`}
        >
          {f}
        </button>
      ))}
      <select
        onChange={(e) => dispatch(setPriorityFilter(e.currentTarget.value))}
        className="outline-none bg-[#F3F2EC] text-[#E62727] px-3 py-1 rounded-md cursor-pointer"
      >
        {["Öncelik", "Düşük", "Orta", "Yüksek"].map((item) => (
          <option key={item} value={item} className="cursor-pointer">
            {item}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => dispatch(setCategoryFilter(e.currentTarget.value))}
        className="outline-none bg-[#F3F2EC] text-[#E62727] px-3 py-1 rounded-md cursor-pointer"
      >
        {["Kategori", "İş", "Kişisel", "Ders"].map((item) => (
          <option key={item} value={item} className="cursor-pointer">
            {item}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => dispatch(setDateSort(e.currentTarget.value))}
        className="outline-none bg-[#F3F2EC] text-[#E62727] px-3 py-1 rounded-md cursor-pointer"
      >
        {["Tarihe Göre Sırala", "Yaklaşandan Uzağa", "Uzaktan Yaklaşana"].map(
          (item) => (
            <option key={item} value={item}>
              {item}
            </option>
          )
        )}
      </select>
    </div>
  );
}

export default Filters;
