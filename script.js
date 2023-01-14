const inputElement = document.querySelector('.new-task-input');
const addTaskButton = document.querySelector('.new-task-button');

const validateInput = () => inputElement.value.trim().length > 0;

addTaskButton.addEventListener('click', () => handleAddTask());
