// Set up the variables
const taskInput = document.getElementById('taskInput');
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('taskList');

// Add event listener for form submission
taskForm.addEventListener('submit', addTask);

// Function to add a task to the list
function addTask(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get the value of the task input and trim any extra spaces
    const taskText = taskInput.value.trim();

    if (taskText === '') return; // Do nothing if the input is empty

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        ${taskText}
        <button class="delete">Delete</button>
    `;

    // Add event listener to the delete button
    listItem.querySelector('.delete').addEventListener('click', function() {
        listItem.remove(); // Remove the task when delete button is clicked
    });

    // Append the new task to the task list
    taskList.appendChild(listItem);

    // Clear the input after adding the task
    taskInput.value = '';
}

    
