const fiboSeq = {};

const Fibonaccify = n =>{
    if (n <= 1) return n;
    if (fiboSeq.hasOwnProperty(n)) return fiboSeq[n];
    fiboSeq[n] = Fibonaccify(n-2) + Fibonaccify(n-1)
    return fiboSeq[n];
}
module.exports = {Fibonaccify}