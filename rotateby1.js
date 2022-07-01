// var n = 4;

// if (n > 1) {
// 	var temp;
// 	for (var i = 0; i < n / 2; i++) {
// 		var prev = arr[1][0];
// 		for (let j = 0; j < n - 1 - i; j++) {
// 			temp = arr[i][j];
// 			arr[i][j] = prev;
// 			prev = temp;
// 		}

// 		for (let j = i + 1; j < n - 2 - i; j++) {
// 			temp = arr[i][n - 1 - i];
// 			arr[i][j] = prev;
// 			prev = temp;
// 		}

// 		for (let j = n - 1 - i; j >= i; j--) {
// 			temp = arr[n - 1 - i][n - 1 - j];
// 			arr[n - 1 - i][n - 1 - j] = prev;
// 			prev = temp;
// 		}

// 		for (let j = n - 2 - i; j >= i + 1; j--) {
// 			temp = arr[j][i];
// 			arr[j][i] = prev;
// 			prev = temp;
// 		}
// 	}
// }

// console.log(matrix);

var str = "abc";
var n = str.length;
for (var i = 0; i < n; i++) {
	out = "";
	for (var j = i; j < n; j++) {
		out = out + str[j];
		console.log(out);
	}
}

