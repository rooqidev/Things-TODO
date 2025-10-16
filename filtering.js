function completed_list() {
  todo.innerHTML = "";
  count = 0;
  for (let key in task_list) {
    if (task_list[key] === "✓") {
      console.log(task_list[key]);
      count++;
      task_count.textContent = count + " ";
      // modal popup
      const askSure = document.createElement("div");
      askSure.style.height = "200px";
      askSure.style.width = "330px";
      askSure.style.border = "none";
      askSure.style.zIndex = "10";
      askSure.style.textAlign = "center";
      askSure.style.position = "absolute";
      askSure.style.backgroundColor = localStorage.getItem("tg");
      
      askSure.style.top = "300px";
      askSure.style.boxShadow = "0 3px 5px rgba(0, 0, 0, 0.4)";
      askSure.style.left = "4%";
      askSure.style.borderRadius = "0.9rem"
      
      askSure.style.display = "none";
      document.body.appendChild(askSure);
      
      const asking = document.createElement("b");
      asking.textContent = "Are you sure you're deleting this task? you haven't completed it right now.."
      asking.style.position = "absolute";
      asking.style.top = "50px";
      asking.style.left = "10px";
      asking.style.color = localStorage.getItem("tg");
      const dontdel = document.createElement("button");
      dontdel.style.position = "absolute";
      dontdel.style.top = "130px";
      dontdel.style.left = "40px";
      dontdel.textContent = "Keep it";
      dontdel.style.color = localStorage.getItem("tg")
      dontdel.style.border = `2px solid ${localStorage.getItem("tg")}`;
      dontdel.style.backgroundColor = `2px solid ${localStorage.getItem("bg")}`;
      dontdel.style.borderRadius = "0.2rem";
      dontdel.style.boxShadow = "0 3px 5px rgba(0, 0, 0, 0.4)";
      const delit = document.createElement("button");
      delit.style.position = "absolute";
      delit.style.top = "130px";
      delit.style.left = "200px";
      delit.style.border = `2px solid ${localStorage.getItem("tg")}`;
      delit.style.borderRadius = "0.2rem";
      delit.style.boxShadow = "0 3px 5px rgba(0, 0, 0, 0.4)";
      delit.textContent = "Delete it";
      askSure.append(asking, dontdel, delit);
      
      // modal
      dontdel.addEventListener("click", () => {
        askSure.style.display = "none";
      });
      
      // done or pending feature in task
      const task = document.createElement("li");
      task.style.listStyle = "none";
      task.style.marginBottom = "0.5rem";
      task.style.marginRight = "2rem";
      task.textContent = `${key}`;
      task.style.color = localStorage.getItem("tg");
      
      const checkBtn = document.createElement("button");
      checkBtn.textContent = task_list[key];
      checkBtn.style.marginLeft = "1rem";
      checkBtn.style.border = `2px solid ${localStorage.getItem("tg")}`;
      checkBtn.style.color = localStorage.getItem("tg")
      checkBtn.style.backgroundColor = localStorage.getItem("bg");
      checkBtn.style.borderRadius = "0.2rem";
      checkBtn.style.boxShadow = "0 3px 5px rgba(0, 0, 0, 0.4)";
      task.appendChild(checkBtn);
      checkBtn.addEventListener("click", () => {
        if (task_list[key] === "o") {
          task_list[key] = "✓";
          checkBtn.textContent = "✓";
          localStorage.setItem("task_list", JSON.stringify(task_list));
        } else {
          task_list[key] = "o";
          checkBtn.textContent = "o";
          localStorage.setItem("task_list", JSON.stringify(task_list));
        };
      })
      const delbtn = document.createElement("button");
      delbtn.textContent = "x";
      delbtn.style.marginLeft = "1rem";
      delbtn.style.border = `2px solid ${localStorage.getItem("tg")}`;
      delbtn.style.color = localStorage.getItem("tg")
      delbtn.style.backgroundColor = localStorage.getItem("bg");
      delbtn.style.borderRadius = "0.2rem";
      delbtn.style.boxShadow = "0 3px 5px rgba(0, 0, 0, 0.4)";
      
      task.appendChild(delbtn);
      todo.appendChild(task);
      delbtn.addEventListener("click", () => {
        if (task_list[key] === "o") {
          askSure.style.display = "block";
        } else {
          delete task_list[key];
          localStorage.setItem("task_list", JSON.stringify(task_list));
          count--;
          task_count.textContent = count + " ";
          todo.removeChild(task);
          askSure.style.display = "none";
        }
      });
      delit.addEventListener("click", () => {
        delete task_list[key];
        localStorage.setItem("task_list", JSON.stringify(task_list));
        count--;
        task_count.textContent = count + " ";
        todo.removeChild(task);
        askSure.style.display = "none";
      });
      // Dark Mode
      
      li1.addEventListener("click", () => {
        
        delbtn.style.border = `2px solid ${localStorage.getItem("tg")}`;
        delbtn.style.color = localStorage.getItem("tg")
        delbtn.style.backgroundColor = localStorage.getItem("bg");
        checkBtn.style.border = `2px solid ${localStorage.getItem("tg")}`;
        checkBtn.style.color = localStorage.getItem("tg")
        checkBtn.style.backgroundColor = localStorage.getItem("bg");
        
        delit.style.color = localStorage.getItem("tg")
        delit.style.border = `2px solid ${localStorage.getItem("tg")}`;
        delit.style.backgroundColor = localStorage.getItem("bg");
        
        dontdel.style.color = localStorage.getItem("tg");
        dontdel.style.border = `2px solid ${localStorage.getItem("tg")}`;
        dontdel.style.backgroundColor = localStorage.getItem("bg");
        
        askSure.style.border = `2px solid ${localStorage.getItem("tg")}`;
        askSure.style.color = localStorage.getItem("tg")
        askSure.style.backgroundColor = localStorage.getItem("bg");
        askSure.style.top = "300px";
        asking.style.color = localStorage.getItem("tg")
        
        task.style.color = localStorage.getItem("tg");
        
      });
      
    }
    
  }
};



function incompleted_list() {
  todo.innerHTML = "";
  count = 0;
  for (let key in task_list) {
    if (task_list[key] === "o") {
      console.log(task_list[key]);
      count++;
      task_count.textContent = count + " ";
      // modal popup
      const askSure = document.createElement("div");
      askSure.style.height = "200px";
      askSure.style.width = "330px";
      askSure.style.border = `2px solid ${localStorage.getItem("tg")}`;
      askSure.style.zIndex = "10";
      askSure.style.textAlign = "center";
      askSure.style.position = "absolute";
      askSure.style.border = `2px solid ${localStorage.getItem("tg")}`;
      askSure.style.color = localStorage.getItem("tg")
      askSure.style.backgroundColor = localStorage.getItem("bg");
      askSure.style.top = "300px";
      askSure.style.boxShadow = "0 3px 5px rgba(0, 0, 0, 0.4)";
      askSure.style.left = "4%";
      askSure.style.borderRadius = "0.9rem"
      
      askSure.style.display = "none";
      document.body.appendChild(askSure);
      
      const asking = document.createElement("b");
      asking.textContent = "Are you sure you're deleting this task? you haven't completed it right now.."
      asking.style.position = "absolute";
      asking.style.top = "50px";
      asking.style.left = "10px";
      asking.style.color = localStorage.getItem("tg");
      const dontdel = document.createElement("button");
      dontdel.style.position = "absolute";
      dontdel.style.top = "130px";
      dontdel.style.left = "40px";
      dontdel.textContent = "Keep it";
      dontdel.style.color = localStorage.getItem("tg")
      dontdel.style.border = `2px solid ${localStorage.getItem("tg")}`;
      dontdel.style.backgroundColor = localStorage.getItem("bg");
      dontdel.style.borderRadius = "0.2rem";
      dontdel.style.boxShadow = "0 3px 5px rgba(0, 0, 0, 0.4)";
      const delit = document.createElement("button");
      delit.style.position = "absolute";
      delit.style.top = "130px";
      delit.style.left = "200px";
      delit.style.color = localStorage.getItem("tg")
      delit.style.border = `2px solid ${localStorage.getItem("tg")}`;
      delit.style.backgroundColor = localStorage.getItem("bg");
      delit.style.borderRadius = "0.2rem";
      delit.style.boxShadow = "0 3px 5px rgba(0, 0, 0, 0.4)";
      delit.textContent = "Delete it";
      askSure.append(asking, dontdel, delit);
      
      // modal
      dontdel.addEventListener("click", () => {
        askSure.style.display = "none";
      });
      
      // done or pending feature in task
      const task = document.createElement("li");
      task.style.listStyle = "none";
      task.style.marginBottom = "0.5rem";
      task.style.marginRight = "2rem";
      task.textContent = `${key}`;
      task.style.color = localStorage.getItem("tg");
      const checkBtn = document.createElement("button");
      checkBtn.textContent = task_list[key];
      checkBtn.style.marginLeft = "1rem";
      checkBtn.style.border = `2px solid ${localStorage.getItem("tg")}`;
      checkBtn.style.color = localStorage.getItem("tg")
      checkBtn.style.backgroundColor = localStorage.getItem("bg");
      checkBtn.style.borderRadius = "0.2rem";
      checkBtn.style.boxShadow = "0 3px 5px rgba(0, 0, 0, 0.4)";
      task.appendChild(checkBtn);
      checkBtn.addEventListener("click", () => {
        if (task_list[key] === "o") {
          task_list[key] = "✓";
          checkBtn.textContent = "✓";
          localStorage.setItem("task_list", JSON.stringify(task_list));
        } else {
          task_list[key] = "o";
          checkBtn.textContent = "o";
          localStorage.setItem("task_list", JSON.stringify(task_list));
        };
      })
      const delbtn = document.createElement("button");
      delbtn.textContent = "x";
      delbtn.style.marginLeft = "1rem";
      delbtn.style.border = `2px solid ${localStorage.getItem("tg")}`;
      delbtn.style.color = localStorage.getItem("tg")
      delbtn.style.backgroundColor = localStorage.getItem("bg");
      delbtn.style.borderRadius = "0.2rem";
      delbtn.style.boxShadow = "0 3px 5px rgba(0, 0, 0, 0.4)";
      
      task.appendChild(delbtn);
      todo.appendChild(task);
      delbtn.addEventListener("click", () => {
        if (task_list[key] === "o") {
          askSure.style.display = "block";
          
        } else {
          delete task_list[key];
          localStorage.setItem("task_list", JSON.stringify(task_list));
          count--;
          task_count.textContent = count + " ";
          todo.removeChild(task);
          askSure.style.display = "none";
        }
      });
      delit.addEventListener("click", () => {
        delete task_list[key];
        localStorage.setItem("task_list", JSON.stringify(task_list));
        count--;
        task_count.textContent = count + " ";
        todo.removeChild(task);
        askSure.style.display = "none";
      });
      
      
      // Dark Mode
      
      
      li1.addEventListener("click", () => {
        delbtn.style.border = `2px solid ${localStorage.getItem("tg")}`;
        delbtn.style.color = localStorage.getItem("tg")
        delbtn.style.backgroundColor = localStorage.getItem("bg");
        checkBtn.style.border = `2px solid ${localStorage.getItem("tg")}`;
        checkBtn.style.color = localStorage.getItem("tg")
        checkBtn.style.backgroundColor = localStorage.getItem("bg");
        
        delit.style.color = localStorage.getItem("tg")
        delit.style.border = `2px solid ${localStorage.getItem("tg")}`;
        delit.style.backgroundColor = localStorage.getItem("bg");
        
        dontdel.style.color = localStorage.getItem("tg")
        dontdel.style.border = `2px solid ${localStorage.getItem("tg")}`;
        dontdel.style.backgroundColor = localStorage.getItem("bg");
        
        askSure.style.border = `2px solid ${localStorage.getItem("tg")}`;
        askSure.style.color = localStorage.getItem("tg")
        askSure.style.backgroundColor = localStorage.getItem("bg");
        askSure.style.top = "300px";
        asking.style.color = localStorage.getItem("tg")
        task.style.color = localStorage.getItem("tg");
      });
      
    }
    
  }
};