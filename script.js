const inputBox= document.getElementById('input-box');
const listContainer= document.getElementById('list-container');

function addTask(){
    const taskText = inputBox.value.trim();
    if(taskText === ''){
        alert("You must write something");
    }
    else{
        const li=document.createElement("li");
        li.innerHTML=taskText;
        listContainer.appendChild(li);
        inputBox.value = "";
        // Add click event listener to each new task item
        li.addEventListener("click", function () {
            this.classList.toggle("checked");
            saveData();
        });
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        // Add click event listener to close button
        span.addEventListener("click", function (e) {
            e.stopPropagation(); // Prevent task item click event from being triggered
            li.remove();
            saveData();
        });
    }
    //inputBox.value="";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "li"){
        e.target.classList.toggle("checked");
        saveData();
    }
    /*else if(e.target.tagName == "span"){
        e.target.parentElement.remove();
        saveData();
    }*/
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
/*document.querySelector('#submit').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly enter task name!")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}*/
