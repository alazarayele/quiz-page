// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const resetButton = document.getElementById('resetButton');
const counterDisplay = document.getElementById('counter');

let taskCounter = 0;

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create task item
  const taskItem = document.createElement('li');
  taskItem.textContent = taskText;

  // Add "Mark as Done" button
  const doneButton = document.createElement('button');
  doneButton.textContent = 'Done';
  doneButton.className = 'doneButton';

  // Mark task as done and increment counter
  doneButton.addEventListener('click', () => {
    if (!taskItem.classList.contains('completed')) {
      taskItem.classList.add('completed');
      taskCounter++;
      counterDisplay.textContent = taskCounter;
    }
  });

  taskItem.appendChild(doneButton);
  taskList.appendChild(taskItem);

  // Clear input field
  taskInput.value = '';
}

// Function to reset the list
function resetList() {
  taskList.innerHTML = '';
  taskCounter = 0;
  counterDisplay.textContent = taskCounter;
}

// Event listeners
addTaskButton.addEventListener('click', addTask);
resetButton.addEventListener('click', resetList);

// Allow pressing Enter to add a task
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
