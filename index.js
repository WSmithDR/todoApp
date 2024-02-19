
let todoItems = []

class ToDo{
  constructor(description){
    this.description = description
    this.complete = false
  }
  completeToDo(){
    this.complete = !this.complete
  }
}

const buildToDo = (todo, index) =>{
  let toDoShell = document.createElement("div")
  toDoShell.className = "toDoShell"

  let toDoText = document.createElement("span")
  toDoText.innerHTML = todo.description
  toDoText.id = index

  if(todo.complete) toDoText.className = "completeText"

  toDoShell.appendChild(toDoText)

  toDoText.addEventListener("click", completeToDo)
  return toDoShell
}

const buildToDos = (toDos) =>{
  return toDos.map(buildToDo)
}

const displayToDos = () =>{
  let toDoContainer = document.querySelector("#toDoContainer")
  toDoContainer.innerHTML = ""
  const tasks = buildToDos(todoItems)
  tasks.forEach(task=>toDoContainer.appendChild(task))
}

const addToDo = () =>{
  let input = document.querySelector("#toDoInput")
  if(input.value !==""){
    const task = new ToDo(input.value)
    todoItems.push(task)
    input.value = ""
    displayToDos()
  }
}

const addButton = document.querySelector("#addButton")
addButton.addEventListener("click",addToDo)


const completeToDo =(event) =>{
  const index = event.target.id
  todoItems[index].completeToDo()
  displayToDos()
}


