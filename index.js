// index.js
const input = document.querySelector("input");
const list = document.querySelector("#todo-list");

class todos {
  constructor() {
    this.todos = [
      {
        title: "Jog around the park",
        completed: false,
        id: Date.now(),
      },
      {
        title: "10 minutes meditation",
        completed: false,
        id: 2,
      },
    ];
  }

  getAll() {
    return this.todos;
  }
  getCount() {
    return this.todos.length;
  }
  addTodo(title) {
    this.todos.push({ title, completed: false, id: Date.now() });
  }
  removeTodo(idToRemove) {
    this.todos = this.todos.filter((todo) => todo.id !== idToRemove);
  }
}

const todo = new todos();

const render = (title) => {
  const amount = document.querySelector("#item-count");
  title.map((todo) => {
    list.innerHTML += `<li
    class="border-b-2 border-slate-700 py-4 flex justify-around items-center" id=${
      todo.id
    }
  >
  ${
    todo.completed
      ? `<button><svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="25"
      class="bg-gradient-to-tr from-indigo-700 to-slate-800 rounded-full p-2 ml-2"
    >
      <path
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        d="M1 4.304L3.696 7l6-6"
        class="mx-auto"
      />
    </svg></button>`
      : `<button
      type="submit"
      class="submit-button text-4xl padding-4 text-slate-500"
    >
      O
    </button>`
  }
    <p>${todo.title}</p>
    <button class="delete" onClick=""><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
      <path
        fill="#494C6B"
        fill-rule="evenodd"
        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
      />
    </svg></button>
  </li>`;
    amount.innerHTML = `${title.length} items left`;
  });
};

render(todo.getAll());

document
  .querySelector(".submit-button")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the button
    try {
      list.innerHTML = "";
      todo.addTodo(input.value);
      input.value = "";
      render(todo.getAll(), todo.getCount());
    } catch {
      console.error(error);
    }
  });

const deleteBtn = document.querySelectorAll(".delete");

deleteBtn.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const parentId = event.target.parentNode.parentNode.id;
    todo.removeTodo(parseInt(parentId));
    list.innerHTML = "";
    render(todo.getAll(), todo.getCount());
  });
});

const toggleMode = document.querySelector(".dark-mode-btn");

toggleMode.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
