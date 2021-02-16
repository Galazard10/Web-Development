var newTask = document.getElementById('newTask');
var tasks = document.getElementById('tasks');

function addToList() {
	if(newTask.value !== ""){

		var row = document.createElement("tr");

		var td1 = document.createElement("td");
		var checkbox = document.createElement("input");
		checkbox.setAttribute("type", "checkbox");
		checkbox.setAttribute("onclick","checkbox(this)");
		var checkmark = document.createElement("span");
		checkmark.setAttribute("onclick","checkbox(this)");
		checkmark.classList.add("checkmark");

		td1.appendChild(checkbox);
		td1.appendChild(checkmark);
		row.appendChild(td1);

		var td2 = document.createElement("td");
		var paragraph = document.createElement("p");
		paragraph.innerHTML = newTask.value;
		td2.appendChild(paragraph);
		row.appendChild(td2);

		var td3 = document.createElement("td");
		var icon = document.createElement("i");
		icon.classList.add("fas");
		icon.classList.add("fa-trash-alt");
		icon.setAttribute("onclick","deleteRow(this)");
		td3.appendChild(icon);
		row.appendChild(td3);

		tasks.appendChild(row);
	}
	
}
function deleteRow(r) {
	var i = r.parentNode.parentNode.rowIndex;
	tasks.deleteRow(i);
}
function checkbox(r) {
	r.parentNode.parentNode.classList.toggle("checked");
}