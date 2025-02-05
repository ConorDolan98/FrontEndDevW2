// Create an interface implementing methods from q1
interface theInterface{
    theArray:Array<string>;
    addTask(tasks:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;
}
//Must use this keyword to call the array 
class toDoList implements theInterface{
    //A) Create an array of strings
    theArray:Array<string>=[];

    //B) Create the addTask method
    addTask(task:string):number{
        this.theArray.push(task);
        console.log(task+" added to Tasks");
        return this.theArray.length
    }

    //C) Create the listAllTasks method
    listAllTasks():void{
        this.theArray.forEach(
        (element)=>{
            console.log(element+" is in the list of Tasks");
        }//drop function keyword for arrow
    );
}

    //D) Create the deleteTasks method
    deleteTask(task:string):number{
    let index:number = this.theArray.indexOf(task,0);

        if(index != -1){
            this.theArray.splice(index,1);//Splice is for deleting the element at that position in the array
            console.log(task+" removed from the Tasks list.");
        }else{
            console.log(task+" is not in the Tasks list")
         }
        return this.theArray.length;
    }
}

let myArray = new toDoList();
myArray.addTask("Work");
myArray.listAllTasks();
myArray.deleteTask("Sleep")