const fibonacci = function(n) {
    const num = Number(n);
    let fib = [0, 1];
    if (num === 0){
        return 0;
    } else if (num === 1) {
        return 1;
    } else if (num < 0) {
        return "OOPS";
    } else {
        for (let i = 2; i <= num; i++) {
            fib.push(fib[i - 1] + fib[i - 2])
        }
        return fib[fib.length -1];
    }

};

// Do not edit below this line
module.exports = fibonacci;
