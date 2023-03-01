var todoList = document.querySelector(".list_container");
var todoInput = document.querySelector(".todo_input");

function addTodo() {
  var listItem = document.createElement("div");
  listItem.setAttribute("draggable", "true");
  listItem.classList.add("list_item");
  var p = document.createElement("p");
  var text = document.createTextNode(todoInput.value);
  p.appendChild(text);
  listItem.appendChild(p);
  todoList.appendChild(listItem);
  todoInput.value = "";
}
document.querySelector(".todo_button").addEventListener("click", function (e) {
  addTodo();
  reload();
});

const reload = () => {
  const listItems = document.querySelectorAll(".list_item");
  const containers = document.querySelectorAll(".list_container");

  listItems.forEach((item) => {
    item.addEventListener("dragstart", () => {
      item.classList.add("dragging");
    });
    item.addEventListener("dragend", () => {
      item.classList.remove("dragging");
    });
  });

  containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
      e.preventDefault();

      const draggable = document.querySelector(".dragging");
      container.appendChild(draggable);
    });
  });
};
reload();
