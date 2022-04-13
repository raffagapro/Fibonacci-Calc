const Fibonaccify = n =>{
    if (n <= 1) return n;
    return Fibonaccify(n - 1) + Fibonaccify(n - 2);
}

module.exports = {Fibonaccify}