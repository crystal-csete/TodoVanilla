/** @format */

// Select the elements here to use them:
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// use event listeners to use when an action happens:
document.addEventListener("DOMContentLoaded", getTodosForDelete);

todoButton.addEventListener("click", addTodo);

todoList.addEventListener("click", deleteCheck);

filterOption.addEventListener("click", filterTodo);

// make the functions to add todo's here:

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //   add newTodo to local storage:
  saveLocalTodos(todoInput.value);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;

    todo.classList.add("fall");
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(event) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "notcompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodosForDelete() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// monkey

const farmerGirl = document.querySelector(".closed");

const salad = document.querySelector(".open");

farmerGirl.addEventListener("click", () => {
  if (salad.classList.contains("open")) {
    salad.classList.add("active");
    farmerGirl.classList.remove("active");
  }
});

salad.addEventListener("click", () => {
  if (farmerGirl.classList.contains("closed")) {
    farmerGirl.classList.add("active");
    salad.classList.remove("active");
  }
});

const unicorn = document.querySelector(".closed2");

const rainbow = document.querySelector(".open2");

unicorn.addEventListener("click", () => {
  if (rainbow.classList.contains("open2")) {
    rainbow.classList.add("active2");
    unicorn.classList.remove("active2");
  }
});

rainbow.addEventListener("click", () => {
  if (unicorn.classList.contains("closed2")) {
    unicorn.classList.add("active2");
    rainbow.classList.remove("active2");
  }
});

const personWalking = document.querySelector(".closed3");

const zombie = document.querySelector(".open3");

personWalking.addEventListener("click", () => {
  if (zombie.classList.contains("open3")) {
    zombie.classList.add("active3");
    personWalking.classList.remove("active3");
  }
});

zombie.addEventListener("click", () => {
  if (personWalking.classList.contains("closed3")) {
    personWalking.classList.add("active3");
    zombie.classList.remove("active3");
  }
});
