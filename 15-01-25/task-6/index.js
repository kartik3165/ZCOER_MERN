function add_task() {
    const t_in = document.getElementById("t_in");
    const trimtext = t_in.value.trim();

    if (trimtext === "") {
        alert("Enter the detail");
        return;
    }

    const list = document.getElementById("list_id");

    // Create a new list item
    const L_task = document.createElement("li");

    // Create a radio button for selecting the task
    const deleteRadio = document.createElement("input");
    deleteRadio.type = "radio";
    deleteRadio.name = "task"; // Ensures only one radio button can be selected at a time

    // Append the radio button and task text to the list item
    L_task.append(deleteRadio);
    L_task.append(` ${trimtext}`);

    // Append the list item to the list
    list.appendChild(L_task);

    // Clear the input field
    t_in.value = "";
}

function delete_task() {
    const selectedTask = document.querySelector('input[name="task"]:checked');
    if (selectedTask) {
        // Remove the parent list item of the selected radio button
        selectedTask.parentElement.remove();
    } else {
        alert("Please select a task to delete.");
    }
}
