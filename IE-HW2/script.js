const inputValue = document.getElementById("user-input");
const listC = document.getElementById("list");
let taskNum = 0;
let completed = 0;
let remaining = 0;

function addTask() {
    if (inputValue.value == '') {
        alert("Task can't be empty!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputValue.value;
        li.style.borderBottom = 'solid #CDFAD5 1px'
        listC.appendChild(li);
        taskNum++;

        let del = document.createElement("del");
        del.innerHTML = "\u00d7";
        li.appendChild(del);
    }
    inputValue.value = "";
    remaining = taskNum - completed;
    updateCounts();
    save();
}

let addBtn = document.getElementById("add-btn");
addBtn.addEventListener('click', addTask);

let searchInput = document.getElementById("search-input");
let searchButton = document.getElementById("search-button");

searchButton.addEventListener('click', searchTasks);


listC.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        completed = document.querySelectorAll("#list li.checked").length;
        remaining = taskNum - completed;
    } else if (e.target.tagName === "DEL") {
        e.target.parentElement.remove();
        taskNum--;
        completed = document.querySelectorAll("#list li.checked").length;
        remaining = taskNum - completed;
    }
    updateCounts();
    save();
}, false);


function updateCounts() {
    document.getElementById("task-num").innerHTML = taskNum;
    document.getElementById("cmp-num").innerHTML = completed;
    document.getElementById("rem-num").innerHTML = remaining;
}

function save() {
    localStorage.setItem("data", listC.innerHTML);
    localStorage.setItem("tasks", taskNum);
    localStorage.setItem("complect", completed);
    localStorage.setItem("remaining", remaining); // Change "remained" to "remaining"
}


function show() {
    listC.innerHTML = localStorage.getItem("data");
    taskNum = +localStorage.getItem("tasks") || 0;
    completed = +localStorage.getItem("complect") || 0;
    remaining = +localStorage.getItem("remaining") || 0; // Change "remained" to "remaining"

    updateCounts();
}

function searchTasks() {
    let searchTerm = searchInput.value.toLowerCase();
    let tasks = document.querySelectorAll("#list li");

    tasks.forEach(function(task) {
        let taskText = task.textContent.toLowerCase();
        if (taskText.includes(searchTerm)) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}

show();