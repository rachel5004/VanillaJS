const form = document.querySelector("form"),
  input = document.querySelector("input"),
  pending = document.querySelector(".pending"),
  finished = document.querySelector(".finished");
let todos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  if (li.parentNode === pending) {
    pending.removeChild(li);
  } else finished.removeChild(li);
  const cleanTodos = todos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  todos = cleanTodos;
  saveToDos();
  console.log(todos);
}
function finishToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pending.removeChild(li);
  finished.appendChild(li);
  li.removeChild(btn);
  const undoBtn = document.createElement("button");
  undoBtn.innerText = "🔙";
  undoBtn.addEventListener("click", undoToDo);
  li.appendChild(undoBtn);
  saveToDos();
  console.log(todos);
}
function undoToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finished.removeChild(li);
  pending.appendChild(li);
  li.removeChild(btn);
  const finBtn = document.createElement("button");
  finBtn.innerText = "✅";
  finBtn.addEventListener("click", finishToDo);
  li.appendChild(finBtn);
  saveToDos();
  console.log(todos);
}

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(event) {
  event.preventDefault();
  const added = input.value;
  paintTodo(added);
  input.value = "";
}
function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const finBtn = document.createElement("button");
  const span = document.createElement("span");
  const newID = todos.length + 1;
  delBtn.innerText = "❌";
  finBtn.innerText = "✅";
  delBtn.addEventListener("click", deleteToDo);
  finBtn.addEventListener("click", finishToDo);
  span.innerText = text + " ";
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finBtn);

  li.id = newID;
  pending.appendChild(li);
  const toDoObj = {
    text: text,
    id: newID
  };
  todos.push(toDoObj);
  saveToDos();
  // console.log(text);
}
function loadTodos() {
  const loadedtoDos = localStorage.getItem("todos");
  if (loadedtoDos !== null) {
    const parseToDos = JSON.parse(loadedtoDos);
    parseToDos.forEach(function (todo) {
      paintTodo(todo.text);
    });
  }
}

function init() {
  loadTodos();
  form.addEventListener("submit", handleSubmit);
}
init();
