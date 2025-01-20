
function add_skill() {
    var name = prompt("Enter your Skill Name");
    var list = document.getElementById("content");
    var list_item = document.createElement("li");

    var deleteRadio = document.createElement("input");
    deleteRadio.type = "radio";
    deleteRadio.name = "Skill";

    list_item.append(deleteRadio);
    list_item.append(name);
    list.append(list_item);

}

function delete_task() {
    const selectedTask = document.querySelector('input[name="Skill"]:checked');
    if (selectedTask) {
        // Remove the parent list item of the selected radio button
        selectedTask.parentElement.remove();
    } else {
        alert("Please select a task to delete.");
    }
}


function checkAge() {
    const age = document.getElementById("age");
    if (age.value == "") {
        alert("Enter your age");
    } else {
        if (parseInt(age.value) >= 18) {
            alert("You can have an ID");
        } else {
            alert("Minimum age 18 required");
        }
    }
}


function addnews() {
    
}