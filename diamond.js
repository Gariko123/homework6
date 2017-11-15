

	 /*

const Diamond = function(length,char){
	if(length % 2 === 0) {
		length = length + 1;
	}
const drow = function(n, char){
if(n<=0){
	return "";
}
return char + drow(n-1,char);
	};
	const recur = function(spaceN, lineN, line){
			if (line >length){
				return "";
			}
			console.log(drow(spaceN, " " )+drow(lineN,char));
			if(line<=length/2){
				recur(spaceN+ -1, lineN+2, line+1);
			} else {
				recur(spaceN +1, lineN-2,line+1);
			}
	};
	recur(length-1/2,1,1);
};
Diamond(6,"*");


const printDimond = function(length, char) {
	if(length % 2 === 0) {
		length = length + 1;
	}
	const drow = function(n, char) {
		let m = '';
		for(let i = 0; i < n; i++) {
			m = m + char;
		}
		return m;
	};
	let spaceN = (length-1)/2;
	let lineN = 1;
	for(let i = 1; i <= length; i++){
		console.log(drow(spaceN, ' ') + drow(lineN, char));
		if(i <= length/2) {
			spaceN = spaceN -1;
			lineN = lineN + 2;
		} else {
			spaceN = spaceN + 1;
			lineN = lineN-2;
		}
	}
};
printDimond(6,"*");*/