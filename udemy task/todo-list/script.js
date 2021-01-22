var addButton = document.getElementById("add");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var todolist=document.getElementById("todolist");

let tasks = [];


addButton.addEventListener("click", createListElement);

function displayListElement(){

	todolist.innerHTML="";

	tasks.forEach(function(task,i){

		todolist.innerHTML +="<li  onclick='strike("+i+")'>"+ task + "<a onclick='deleteItem("+i+")'>&times;</a><a onclick='update("+i+")'>update</a><a onclick='editItem("+i+")'>Edit</a></li>";
		
	});
}
function createListElement(){
	tasks.push(input.value);
	input.value="";
	displayListElement();
}



function deleteItem(i){
	tasks.splice(i,1);
	displayListElement();
}

function editItem(i){
	
	input.value=tasks[i];
	displayListElement();
	
}

function update(i){
	tasks.splice(i,1,input.value);
	input.value="";
	displayListElement();
}



	ul.addEventListener('click', function(ev) {
		if (ev.target.tagName === 'LI') {
		  ev.target.classList.toggle('checked');
		}
	  }, false);	





