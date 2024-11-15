<template>
    <h1 class="text-2xl font-bold mb-4 text-center text-blue-500">To-Do List</h1>
    <div class="flex mb-4">
      <input v-model="newTask" type="text" placeholder="Add a new task"
        class="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
        @keyup.enter="addTask" />
      <button @click="addTask" class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
        Add
      </button>
    </div>
  
    <ul class="space-y-2">
  
  
  
      <li v-for="task in tasks" :key="task.id"
        class="flex items-center justify-between p-3 bg-gray-50 border rounded-md hover:shadow-md">
        <div class="flex items-center space-x-2">
          <input type="checkbox" :checked="task.completed" @change="toggleTask(task)" class="h-5 w-5 text-blue-500" />
          <span :class="{ 'line-through text-gray-400': task.completed }" class="text-gray-800">
            {{ task.title }}
          </span>
        </div>
        <button @click="deleteTask(task.id)" class="text-red-500 hover:text-red-700">
          &times;
        </button>
      </li>
    </ul>
    <fwb-dropdown text="Click me" placement="top">
      <fwb-list-group>
        <fwb-list-group-item>Item #1</fwb-list-group-item>
        <fwb-list-group-item>Item #2</fwb-list-group-item>
        <fwb-list-group-item>Item #3</fwb-list-group-item>
      </fwb-list-group>
    </fwb-dropdown>
  </template>
  
  <script >
  import axios from "axios";
  import { FwbDropdown, FwbListGroup, FwbListGroupItem } from 'flowbite-vue'
  
  export default {
    data() {
      return {
        tasks: [],
        newTask: "",
      };
    },
    methods: {
      async fetchTasks() {
        try {
          const res = await axios.get("http://localhost:3000/api/tasks");
  
          this.tasks = res.data.data.tasks;
  
        } catch (err) {
          console.error("Error fetching tasks:", err);
        }
      },
      async addTask() {
        if (this.newTask.trim()) {
          try {
            const res = await axios.post("http://localhost:3000/api/addtasks", {
              title: this.newTask,
              completed: false,
            });
            this.tasks.push(res.data.task);
            console.log(this.tasks);
  
            this.newTask = "";
          } catch (err) {
            console.error("Error adding task:", err);
          }
        }
      },
      async deleteTask(id) {
        try {
          await axios.delete(`http://localhost:3000/api/deletetasks/${id}`);
          this.tasks = this.tasks.filter((task) => task.id !== id);
        } catch (err) {
          console.error("Error deleting task:", err);
        }
      },
      async toggleTask(task) {
        try {
          const updatedTask = { ...task, completed: !task.completed };
          await axios.put(`http://localhost:3000/api/tasks/${task.id}`, updatedTask);
          task.completed = !task.completed;
        } catch (err) {
          console.error("Error toggling task:", err);
        }
      },
    },
    created() {
      this.fetchTasks();
    },
  };
  </script>
  
  <style>
  /* Add any custom styles if needed */
  </style>
  