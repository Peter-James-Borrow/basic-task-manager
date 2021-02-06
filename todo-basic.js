const addTask = document.querySelectorAll('.add');
const inputField = document.querySelector('text');
const deleteTask = document.querySelectorAll('.delete');
const list = document.querySelector('.container');



function addToList(e) {
    e.preventDefault();
    

    console.log('HELLO');
}

addTask.forEach(function(additem) {
    additem.addEventListener('click', addToList);
});

function deleteItem(e) {
    e.preventDefault();
    console.log('got clicked');
}

deleteTask.forEach(button => {
    button.addEventListener('click', deleteItem);
})