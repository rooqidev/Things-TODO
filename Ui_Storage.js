//using local storage for saving tasks
let task_list = JSON.parse(localStorage.getItem("task_list")) || {};

const body = document.body;
body.style.background = localStorage.getItem("bg");
body.style.transition = "all 0.1s";
// add btb
const appName = document.getElementById("Appname");

appName.style.color = localStorage.getItem("tg");
appName.style.marginLeft = "2rem";
const btn = document.getElementById("addbtn");

btn.style.border = `2px solid ${localStorage.getItem("tg")}`;
btn.style.backgroundColor = localStorage.getItem("bg")
btn.style.color = localStorage.getItem("tg");
btn.style.fontSize = "1.9rem";
btn.style.padding = "0.1rem 0.7rem";
btn.style.borderRadius = "0.6rem";
btn.style.boxShadow = "0 3px 5px rgba(0, 0, 0, 0.3)";
//input areq


// Dynamic Ui
const input = document.getElementById("input");
input.style.fontSize = "0.9rem";
input.style.marginLeft = "0.1rem";
input.style.boxShadow = "0 3px 5px rgba(0, 0, 0, 0.3)";
input.style.border = `2px solid ${localStorage.getItem("tg")}`;
input.style.backgroundColor = localStorage.getItem("bg");
input.style.color = localStorage.getItem("tg");
input.style.padding = "0.6rem 0.7rem";
input.style.borderRadius = "0.4rem";
const todo = document.getElementById("Todo-List");
let task_count = document.getElementById("count");
// hamburger manu
const manu = document.createElement("ul");
manu.style.width = "4px";
manu.style.height = "90px";
manu.style.position = "absolute";
manu.style.top = "60px";
manu.style.left = "20px";
manu.style.backgroundColor = localStorage.getItem("bg");
manu.style.border = `2px solid ${localStorage.getItem("tg")}`;
manu.style.color = localStorage.getItem("tg");
manu.style.zIndex = "9";
manu.style.display = "none";
manu.style.borderRadius = "0.9rem"
manu.style.boxShadow = "0 3px 5px rgba(0, 0, 0, 0.4)";
// dark mode button
const li1 = document.createElement("li");
li1.textContent = "🌙";
li1.style.listStyle = "none";
li1.style.listStyle = "none";
li1.style.position = "absolute";
li1.style.top = "9px"
li1.style.left = "15px";

// Task Filter system 
const tasks_filter = document.createElement("li");
tasks_filter.textContent = "≡";
tasks_filter.style.padding = "0.1rem 0.1rem"
tasks_filter.style.listStyle = "none";
tasks_filter.style.fontSize = "2.3rem"
tasks_filter.style.color = localStorage.getItem("tg");

tasks_filter.style.position = "absolute";
tasks_filter.style.top = "39px"
tasks_filter.style.left = "11px";

const filter_list = document.createElement("ul");
filter_list.style.width = "100px";
filter_list.style.height = "90px";
filter_list.style.position = "absolute";
filter_list.style.top = "90px";
filter_list.style.backgroundColor = localStorage.getItem("bg");
filter_list.style.color = localStorage.getItem("tg");
filter_list.style.border = `2px solid ${localStorage.getItem("tg")}`;
filter_list.style.left = "70px";
filter_list.style.zIndex = "9";
filter_list.style.display = "none";
filter_list.style.borderRadius = "0.9rem"
filter_list.style.boxShadow = "0 3px 5px rgba(0, 0, 0, 0.4)";
body.appendChild(filter_list);

const all = document.createElement("li");
all.textContent = "All";
all.style.listStyle = "none";
all.style.position = "absolute";
all.style.top = "9px"
all.style.left = "15px";
const incompleted = document.createElement("li");
incompleted.textContent = "Incompleted";
incompleted.style.listStyle = "none";
incompleted.style.position = "absolute";
incompleted.style.top = "35px"
incompleted.style.left = "15px";
const completed = document.createElement("li");
completed.textContent = "Completed";
completed.style.listStyle = "none";
completed.style.listStyle = "none";
completed.style.position = "absolute";
completed.style.top = "65px"
completed.style.left = "15px";

filter_list.append(all, completed, incompleted);


// Dark mode

tasks_filter.addEventListener("click", () => {
  if (filter_list.style.display === "none") {
    filter_list.style.display = "block";
    
  } else {
    filter_list.style.display = "none";
  }
  
});

document.body.appendChild(manu);
manu.append(li1, tasks_filter);
const manuBtn = document.createElement("button");
manuBtn.textContent = "≡";
manuBtn.style.fontSize = "2rem";
manuBtn.style.position = "absolute";
manuBtn.style.top = "25px";
manuBtn.style.left = "19px";
manuBtn.style.borderRadius = "0.9rem";
manuBtn.style.padding = "0.1rem 0.8rem";
manuBtn.style.backgroundColor = localStorage.getItem("bg");
manuBtn.style.border = `2px solid ${localStorage.getItem("tg")}`;
manuBtn.style.color = localStorage.getItem("tg");
manuBtn.style.boxShadow = "0 3px 5px rgba(0, 0, 0, 0.4)";
body.append(manuBtn);

// Dark Mode

li1.addEventListener("click", () => {
  if (localStorage.getItem("bg") === "white") {
    localStorage.setItem("bg", "black");
    localStorage.setItem("tg", "white");
    
    body.style.background = localStorage.getItem("bg");
    appName.style.color = localStorage.getItem("tg");
    btn.style.border = `2px solid ${localStorage.getItem("tg")}`;
    btn.style.backgroundColor = localStorage.getItem("bg")
    btn.style.color = localStorage.getItem("tg");
    input.style.border = `2px solid ${localStorage.getItem("tg")}`;
    input.style.backgroundColor = localStorage.getItem("bg");
    input.style.color = localStorage.getItem("tg");
    
    manu.style.backgroundColor = localStorage.getItem("bg");
    manu.style.border = `2px solid ${localStorage.getItem("tg")}`;
    manu.style.color = localStorage.getItem("tg");
    
    tasks_filter.style.color = localStorage.getItem("tg");
    
    filter_list.style.backgroundColor = localStorage.getItem("bg");
    filter_list.style.color = localStorage.getItem("tg");
    filter_list.style.border = `2px solid ${localStorage.getItem("tg")}`;
    
    manuBtn.style.backgroundColor = localStorage.getItem("bg");
    manuBtn.style.border = `2px solid ${localStorage.getItem("tg")}`;
    manuBtn.style.color = localStorage.getItem("tg");
    
    task.style.color = localStorage.getItem("tg");
    save_editing.style.backgroundColor = localStorage.getItem("bg");
    save_editing.style.border = `2px solid ${localStorage.getItem("tg")}`;
    save_editing.style.color = localStorage.getItem("tg");
    task_editing.style.backgroundColor = localStorage.getItem("bg");
    task_editing.style.border = `2px solid ${localStorage.getItem("tg")}`;
    task_editing.style.color = localStorage.getItem("tg");
    task_input.style.border = `2px solid ${localStorage.getItem("tg")}`;
    task_input.style.color = localStorage.getItem("tg");
    task_input.style.backgroundColor = localStorage.getItem("bg");
    
  } else {
    localStorage.setItem("bg", "white");
    localStorage.setItem("tg", "black");
    
    body.style.background = localStorage.getItem("bg");
    appName.style.color = localStorage.getItem("tg");
    btn.style.border = `2px solid ${localStorage.getItem("tg")}`;
    btn.style.backgroundColor = localStorage.getItem("bg")
    btn.style.color = localStorage.getItem("tg");
    input.style.border = `2px solid ${localStorage.getItem("tg")}`;
    input.style.backgroundColor = localStorage.getItem("bg");
    input.style.color = localStorage.getItem("tg");
    
    manu.style.backgroundColor = localStorage.getItem("bg");
    manu.style.border = `2px solid ${localStorage.getItem("tg")}`;
    manu.style.color = localStorage.getItem("tg");
    
    tasks_filter.style.color = localStorage.getItem("tg");
    
    filter_list.style.backgroundColor = localStorage.getItem("bg");
    filter_list.style.color = localStorage.getItem("tg");
    filter_list.style.border = `2px solid ${localStorage.getItem("tg")}`;
    
    manuBtn.style.backgroundColor = localStorage.getItem("bg");
    manuBtn.style.border = `2px solid ${localStorage.getItem("tg")}`;
    manuBtn.style.color = localStorage.getItem("tg");
    
    task.style.color = localStorage.getItem("tg");
    
    save_editing.style.backgroundColor = localStorage.getItem("bg");
    save_editing.style.border = `2px solid ${localStorage.getItem("tg")}`;
    save_editing.style.color = localStorage.getItem("tg");
    task_editing.style.backgroundColor = localStorage.getItem("bg");
    task_editing.style.border = `2px solid ${localStorage.getItem("tg")}`;
    task_editing.style.color = localStorage.getItem("tg");
    task_input.style.border = `2px solid ${localStorage.getItem("tg")}`;
    task_input.style.color = localStorage.getItem("tg");
    task_input.style.backgroundColor = localStorage.getItem("bg");
    
  }
});


manuBtn.addEventListener("click", () => {
  if (manu.style.display === "none") {
    manu.style.display = "block";
  } else {
    manu.style.display = "none";
    filter_list.style.display = "none";
  }
});
let count = 0;