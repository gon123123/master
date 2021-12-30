// bài tập viết lại hàm findIhndex
Array.prototype.findIndex2 = function (callback){
    for(let index in this){
        if(this.hasOwnProperty(index)){
            if(callback(this[index],index,this)){
                return index ;
            }
        }
    }
    return undefined;
}