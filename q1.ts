//A) Create an array of strings
let theArray:string[]=[];

//B) Create an addTask() function
function addTask(task:string):number{
    theArray.push(task);
    console.log(task+" added to Tasks");
    return theArray.length
}

//C) Create a listAllTasks() function
function listAllTasks():void{
    theArray.forEach(
        (element)=>{
            console.log(element+" is in the list of tasks");
        }//drop function keyword for arrow
    );
}

//D) Create a deleteTask function
function deleteTask(task:string):number{
    let index:number = theArray.indexOf(task,0);

    if(index != -1){
        theArray.splice(index,1);//Splice is for deleting the element at that position in the array
        console.log(task+" removed from the Tasks list.");
    }else{
        console.log(task+" is not in the Tasks list")
    }
    return theArray.length;
}

//addTasks functions add strings to the array theArray
addTask("Work");
addTask("Rest");
//listAllTasks displays the strings within the array
listAllTasks();

deleteTask("Work");
listAllTasks();