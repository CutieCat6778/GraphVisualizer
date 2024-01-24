var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// index.ts
var require_GraphVisualizer = __commonJS((exports, module) => {
  var initalizeMatrix = function() {
    for (let i = 0;i <= highestPoint; i += schritt) {
      matrix[i] = Array(max + Math.abs(min)).fill(" ".repeat(viewDistanceInX));
    }
  };
  function calculatePoint(x) {
    const newFunc = func.replace("x", x.toString());
    const val = eval(newFunc);
    return { newFunc, val };
  }
  function main() {
    initalizeMatrix();
    for (let i = 0;i <= max + Math.abs(min); i += schritt) {
      const res = calculatePoint(i - Math.abs(min));
      matrix[res.val][i] = "#";
    }
    for (let i = highestPoint;i > 0; i -= schritt) {
      console.log(matrix[i].join(" ") + "\n");
    }
    const placement = matrix[0].indexOf("#");
    matrix[0][placement] = " ".repeat(viewDistanceInX);
    matrix[0][placement - 1] = "#";
    matrix[0][placement - 2] = " ".repeat(viewDistanceInX + Math.round(viewDistanceInX / 2) + 1);
    console.log(matrix[0].join(" "));
  }
  var func = "Math.pow(x, 2)";
  var x2 = 10;
  var min = x2 * -1;
  var max = x2;
  var matrix = [];
  var highestPoint = calculatePoint(max).val;
  var schritt = 1;
  var viewDistanceInX = 4;
  main();
});
export default require_GraphVisualizer();
