function addTask() {

    // Get the input box
    const input = document.getElementById("taskInput");

    // Get the task list
    const taskList = document.getElementById("taskList");

    // Get the text entered by the user
    const task = input.value.trim();

    // Check if the input is empty
    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    // Add task text
    li.innerHTML = `
        <span>${task}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    // Add task to the list
    taskList.appendChild(li);

    // Clear input box
    input.value = "";
}


function deleteTask(button) {

    // Remove the task
    button.parentElement.remove();

}
