function fact(n) {
    var total = 1
    for (;n > 1; n--) {
        total += total * (n-1)
    }
    return total
}
console.log(fact(7))