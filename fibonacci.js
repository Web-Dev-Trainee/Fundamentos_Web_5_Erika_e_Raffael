const fibonacci = function (n) {
    // if (n < 0) {
    //     return 'OOPS'
    // }else {
    //     return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
    // }
    if (n < 0) {
        return 'OOPS'
    } else {
        if (n < 1) {
            return 0
        } else if (n <= 2) {
            return 1
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2)
        }
    }
}

module.exports = fibonacci