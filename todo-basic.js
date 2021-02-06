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
}
addTask.forEach(function(additem) {
    additem.addEventListener('click', addToList);
    
    
    function deleteItem(removeItem) {
    removeItem = document.querySelector('p');
    removeItem.classList.remove('special');
    removeItem.remove();
    console.log('got clicked');
}
   
deleteTask.forEach(button => {
    button.addEventListener('click', deleteItem);
})
});



    
    
    
    
   
    

    
    
   

    


