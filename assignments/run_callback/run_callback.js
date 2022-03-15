function RunCallback(a, b, cb) {
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
    let x=cb(a+b)
    return x;
}

module.exports = RunCallback;
