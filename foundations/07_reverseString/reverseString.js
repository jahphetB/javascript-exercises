const reverseString = function(string) {
    let reversed = "";
    for (let index = string.length - 1; index >= 0; index--) {
        const element = string[index];
        reversed += element;
    }
    return reversed; 
};

// Do not edit below this line
module.exports = reverseString;
