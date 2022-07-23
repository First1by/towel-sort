module.exports = function towelSort (matrix) {
const resultMatrix = [];
if (matrix) {
matrix.forEach((value, index) => {
if(index % 2 == 0) { resultMatrix.push(value)
    } else {
        resultMatrix.push(value.reverse())
    }
});
        return resultMatrix.flat();
} else {
return resultMatrix;
}
}
