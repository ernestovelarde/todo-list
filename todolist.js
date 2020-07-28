var todoItems = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){
    //handle user input
    if(input === "list"){
        viewList();
    }else if(input === "new"){
        addToList();
    }else if(input === "delete"){
        deleteFromList();
    }   

    var input = prompt("What would you like to do?");
}
console.log("Application has Ended")

function viewList(){
    console.log("**********");
    todoItems.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    console.log("**********");
}

function addToList(){
    var addTodo = prompt("Enter new item to list");
    todoItems.push(addTodo);
    console.log("Iten has been added!");
}

function deleteFromList(){
    var index = prompt("Which item do you wish to remove?");
    todoItems.splice(index, 1);
    console.log("Item has been removed!");
}
