var toDoList = /** @class */ (function () {
    function toDoList() {
        this.theArray = [];
    }
    toDoList.prototype.addTask = function (task) {
        this.theArray.push(task);
        console.log(task + " added to Tasks");
        return this.theArray.length;
    };
    toDoList.prototype.listAllTasks = function () {
        this.theArray.forEach(function (element) {
            console.log(element + " is in the list of tasks");
        } //drop function keyword for arrow
        );
    };
    toDoList.prototype.deleteTask = function (task) {
        var index = this.theArray.indexOf(task, 0);
        if (index != -1) {
            this.theArray.splice(index, 1); //Splice is for deleting the element at that position in the array
            console.log(task + " removed from the Tasks list.");
        }
        else {
            console.log(task + " is not in the Tasks list");
        }
        return this.theArray.length;
    };
    return toDoList;
}());
var myArray = new toDoList();
myArray.addTask("Work");
myArray.listAllTasks();
myArray.deleteTask("Sleep");
