import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: false,
  taskList: JSON.parse(localStorage.getItem("taskList")) || [],
  selectedId: null,
  filter: "Hepsi",
  priorityFilter: "Öncelik",
  categoryFilter: "Kategori",
  dateSort: "Tarihe Göre Sırala",
};

export const todoSlice = createSlice({
  name: "todo-app",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskList.push(action.payload);
      localStorage.setItem("taskList", JSON.stringify(state.taskList));
    },

    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("taskList", JSON.stringify(state.taskList));
    },

    openEditMenu: (state, action) => {
      state.selectedId = action.payload;
      state.menuOpen = true;
    },

    closeEditMenu: (state, action) => {
      state.menuOpen = false;
      state.selectedId = null;
    },

    editTask: (state, action) => {
      const { id, text, priority, category, deadline } = action.payload;
      const task = state.taskList.find((item) => item.id === id);

      if (task) {
        if (text) task.text = text;
        if (priority) task.priority = priority;
        if (category) task.category = category;
        if (deadline) task.deadline = deadline;
      }

      localStorage.setItem("taskList", JSON.stringify(state.taskList));
    },

    addCompletedTask: (state, action) => {
      const completedTask = state.taskList.find(
        (item) => item.id === action.payload
      );

      if (completedTask) {
        completedTask.completed = !completedTask.completed;

        localStorage.setItem("taskList", JSON.stringify(state.taskList));
      }
    },

    setFilter: (state, action) => {
      state.filter = state.filter === action.payload ? "Hepsi" : action.payload;
    },

    setPriorityFilter: (state, action) => {
      state.priorityFilter =
        state.priorityFilter === action.payload ? "Öncelik" : action.payload;
    },

    setCategoryFilter: (state, action) => {
      state.categoryFilter =
        state.categoryFilter === action.payload ? "Kategori" : action.payload;
    },

    setDateSort: (state, action) => {
      state.dateSort =
        state.dateSort === action.payload
          ? "Tarihe Göre Sırala"
          : action.payload;

      if (state.dateSort === "Yaklaşandan Uzağa") {
        let sorted_date = state.taskList.sort(
          (a, b) => new Date(a.deadline) - new Date(b.deadline)
        );
        console.log(sorted_date);
      } else if (state.dateSort === "Uzaktan Yaklaşana") {
        let sorted_date = state.taskList.sort(
          (a, b) => new Date(b.deadline) - new Date(a.deadline)
        );
        console.log(sorted_date);
      }
    },
  },
});

export const {
  addTask,
  deleteTask,
  openEditMenu,
  closeEditMenu,
  editTask,
  addCompletedTask,
  setFilter,
  setPriorityFilter,
  setCategoryFilter,
  setDateSort,
} = todoSlice.actions;

export default todoSlice.reducer;
