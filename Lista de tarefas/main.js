function addNewTask() {
    var list = document.getElementById("list");
    var text = document.getElementById("task_name").value;
    var listItem = document.createElement("li");
    listItem.className = "listItem";

    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement);
    list.appendChild(listItem);
}