const addTask = document.querySelector('.add');
const deleteTask = document.querySelector('.delete');
const inputField = document.querySelector('.text');
const list = document.querySelector('.container');



function addToList(e, paragraph) {
    e.preventDefault();
    paragraph = document.createElement('p');
    paragraph.innerHTML = inputField.value;
    paragraph.classList.add('special');
    list.appendChild(paragraph);
    
    const newInput = document.createElement('div');
    newInput.innerHTML = `
    <label for="input">Enter Tasks Here:</label>
    <input type="text" class="text" name="text-box2" placeholder="make a list">
    <button class="add">Add Task</button>
    <button class="delete">Delete Task</button>
    `;
    list.appendChild(newInput);



}

    addTask.addEventListener('click', addToList);


    
    
    function deleteItem(removeItem) {
    removeItem = document.querySelector('p');
    removeItem.classList.remove('special');
    removeItem.remove();
    console.log('got clicked');
}

    deleteTask.addEventListener('click', deleteItem);



    
    
    
    
   
    

    
    
   

    


