const lightMode = document.getElementById("light-mode");
const darkMode = document.getElementById("dark-mode");
const addButton = document.getElementById("add-task");
const inputSpace = document.getElementById("input");
const inputContainer = document.getElementById("input-space");
const ulList = document.getElementById("list-ul");
const incomplete = document.getElementById("incomplete");
const complete = document.getElementById("completed-span");
const completedDiv = document.getElementById("completed");

// completedDiv.style.display = "none";

let checkTask = 0;
let count = 0;

addButton.addEventListener("click", () => {

    inputValue = inputSpace.value;
    let timer;
    if (inputValue === "") {
        let empty = document.createElement("p");
        inputContainer.appendChild(empty);
        empty.innerHTML = "Please enter a task!";
        timer = setTimeout(() => {
            empty.style.display = 'none';
        }, 2000);

    } else {
      //count todos
      count++;
      // create div to carry the contents of each todos
      let divContent = document.createElement("div");

      // create the checkbox first
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      divContent.appendChild(checkbox);

      // create the list then
      let todo = document.createElement("li");
      divContent.appendChild(todo);

      // create the delete button too
      let deleteBtn = document.createElement("span");
      deleteBtn.innerHTML = "Delete";
      divContent.appendChild(deleteBtn);

      // then add the div to the ul
      ulList.appendChild(divContent);
      todo.innerHTML = inputValue;

      // complete task
      checkbox.addEventListener("click", () => {
        if (checkbox.checked === true) {
            checkTask++;
            let count2 = count -= 1;
            incomplete.innerHTML = count2;
            todo.classList.add("active");
        } else if (checkbox.checked === false) {
          checkTask--;
          let count3 = count += 1;
          incomplete.innerHTML = count3;
          todo.classList.remove("active");
        }
        complete.innerHTML = checkTask;
      });

        //delete task;
        deleteBtn.addEventListener("click", () => {
            removeList = ulList.removeChild(divContent);
            if(checkbox.checked === true) {
                let checkTask1 = checkTask -= 1;
                complete.innerHTML = checkTask1;
            }else if(checkbox.checked === false) {
                let count5 = (count -= 1);
                incomplete.innerHTML = count5;
                if (count5 < 0) {
                  count = 0;
                  incomplete.innerHTML = "0";
                }
                return;
            }
        });

        incomplete.innerHTML = count;
        completedDiv.style.display = "block";
    }
    inputSpace.value = "";

    // window.onload = function () {
    //   localStorage.setItem("data", ulList.innerHTML);
    //   localStorage.setItem("incomplete", incomplete.innerHTML);
    //   localStorage.setItem("complete", complete.innerHTML);
    // };

    // var no = localStorage.getItem("incomplete");
    // var that = localStorage.getItem("complete");
    // var those = localStorage.getItem("data");

    // console.log(no);


});

// localStorage.setItem("text", incomplete.innerHTML);
// let dataX = localStorage.getItem("text");
// console.log(dataX);









