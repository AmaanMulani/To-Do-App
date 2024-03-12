const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if( inputBox.value===''){
        alert("No task added !"); //if input box is empty there wil be an alert
    }
    else{
        let li = document.createElement("li"); //if a task is written an li element will be created.
        li.innerHTML=inputBox.value; //the task will be stored in li element, i.e the value in the input box.
        listContainer.appendChild(li); //"where to display the value stored in li ?" listContainer tag will display the text stored in li.
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName==="LI") {
        e.target.classList.toggle("checked");//if a task is clicked then it will turn to checked
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove() //if span tag is clicked it will remove the task
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();