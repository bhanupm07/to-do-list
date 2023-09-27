const input = document.querySelector(".input");
const container = document.querySelector(".container");
const deleteBtn = document.querySelector(".delete-btn");
const deleteAll = document.querySelector(".delete-all");
let arr = [];

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    if (input.value === "") {
      console.log("input is empty");
    } else {
      arr.push(input.value);
      input.value = "";
      show_list();
    }
    // console.log(arr);
  }
});

function show_list() {
  container.textContent = "";
  arr.forEach((input) => {
    container.innerHTML += `
        <div class="list">
            <h3 class="item">${input}</h3>
            <button class="delete-btn" data-name="${input}"><img class="del-btn" data-name="${input}" src="delete.png" alt="delete logo"/></button>
        </div>
    `;
  });
}

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("del-btn")) {
    // console.log("delete button");
    const list = e.target.dataset.name;
    const listIndex = arr.indexOf(list);
    if (listIndex > -1) {
      arr.splice(listIndex, 1);
      //   console.log(arr);
      show_list();
    }
  }
});

deleteAll.addEventListener("click", function () {
  container.textContent = "";
  arr = [];
});
