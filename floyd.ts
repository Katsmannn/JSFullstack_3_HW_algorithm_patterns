type Matrix = number[][];

let inf = Infinity;

let G = [
    [0, 7, inf, 10, inf, 3, inf, inf, inf, inf, inf, inf],
    [7, 0, inf, inf, inf, 1, 3, inf, inf, inf, inf, inf],
    [inf, inf, 0, 6, inf, inf, inf, 15, inf, inf, inf, inf],
    [10, inf, 6, 0, inf, inf, inf, inf, inf, inf, inf, inf],
    [inf, inf, inf, inf, 0, 5, inf, inf, 4, inf, inf, inf],
    [3, 1, inf, inf, 5, 0, inf, inf, 4, 1, inf, inf],
    [inf, 3, inf, inf, inf, inf, 0, 2, inf, 3, inf, inf],
    [inf, inf, 15, inf, inf, inf, 2, 0, inf, inf, 8, 2],
    [inf, inf, inf, inf, 4, 4, inf, inf, 0, inf, inf, inf],
    [inf, inf, inf, inf, inf, 1, 3, inf, inf, 0, 7, inf],
    [inf, inf, inf, inf, inf, inf, inf, 8, inf, 7, 0, inf],
    [inf, inf, inf, inf, inf, inf, inf, 2, inf, inf, inf, 0]
]


function floyd(graf: Matrix) {
    let nodeCount = graf.length;
    for (let v=0; v < nodeCount; v++) {
        for (let a=0; a < nodeCount; a++) {
			for (let b=0; b < nodeCount; b++) {
				if (graf[a][v] !== inf && graf[v][b] !== inf) {
					graf[a][b] = Math.min(graf[a][b], graf[a][v]+graf[v][b]);
				};
            };
        };
    };
	return graf;
};
