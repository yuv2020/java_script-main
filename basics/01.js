Array.prototype.myase = function(){
    for(i = 0; i < this.length; i++){
        this[i] = this[i].toUpperCase();
    }
};

var fruits = ["banana", "orange", "opera", "donkeys"];
fruits.myase();