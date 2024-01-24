let func = "Math.pow(x, 2)";
const x = 6;
const min = x * -1;
const max = x;
let matrix: string[][] = [];
const highestPoint = calculatePoint(max).val;
const schritt = 1;
const viewDistanceInX = 14;
const identifier = "##";

function initalizeMatrix() {
    for (let i = 0; i <= highestPoint; i += schritt) {
        matrix[i] = Array(max + (Math.abs(min))).fill(" ".repeat(viewDistanceInX));
    }
}

function calculatePoint(x: number): { newFunc: string; val: number } {
    const newFunc = func.replace("x", x.toString())
    const val: number = eval(newFunc);
    return { newFunc, val };
}

function main() {
    initalizeMatrix();

    for (let i = 0; i <= max + (Math.abs(min)); i += schritt) {
        const res = calculatePoint(i - (Math.abs(min)));
        matrix[res.val][i] = identifier;
    }

    for (let i = highestPoint; i > 0; i -= schritt) {
        console.log((matrix[i].join(" ")) + "\n");
    }

	const placement = matrix[0].indexOf(identifier);
	matrix[0][placement] = " ".repeat(viewDistanceInX);
	matrix[0][placement-1] = identifier;
	matrix[0][placement-2] = " ".repeat(viewDistanceInX + Math.round(viewDistanceInX / 2) + 1);
	console.log(matrix[0].join(" "));
}

main()