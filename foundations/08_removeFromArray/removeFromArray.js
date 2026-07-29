const removeFromArray = function(array, ...extraItems) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        if (!extraItems.includes(array[index])){
            newArray.push(array[index]);
        }
    }
    return newArray; 
};

// Do not edit below this line
module.exports = removeFromArray;
