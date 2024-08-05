let todoArr =[
  {
    item:'buy milk',
    dueDate:'4/10/2023',
  },
  {
    item:'study',
    dueDate:'4/10/2023',
  }
];
displayList();

function todoOption(){
  let todoItem = document.querySelector('#textChoice');
  let dateElement = document.querySelector('#todo-date');
  let todoList = todoItem.value;
  let todoDate = dateElement.value;
  todoArr.push({item:todoList,dueDate:todoDate});
  todoItem.value='';
  dateElement.value='';
  displayList();
}


function displayList(){
  let containerElement = document.querySelector('#todo-container');
  let newHtml='';
  for(let i=0;i<todoArr.length;i++){
    let item = todoArr[i].item;
    let dueDate = todoArr[i].dueDate;

   newHtml += `
    
     <span>${item}</span>
     <span>${dueDate}</span>
     <button id="btn-delete" onclick="todoArr.splice(${i},1);displayList();">Delete</button>
    
   `;
  containerElement.innerHTML= newHtml;
  }
}