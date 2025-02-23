Array.prototype.arr = function(){
    for(i=0;i<this.length; i++){
        this[i] = this[i].toUpperCase();
    }
}

var fruits = ["banana", "orange", "apple", "fruit"];
fruits.arr()