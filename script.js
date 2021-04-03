var showing = document.querySelector("h3");
var firstColor = document.querySelector(".color1");
var secondColor = document.querySelector(".color2");
var body = document.getElementById("gradient");
let showingGen = document.getElementById("R1");
let showingGen2 = document.getElementById("R2");
let showingGen3 = document.getElementById("G1");
let showingGen4 = document.getElementById("G2");
let showingGen5 = document.getElementById("B1");
let showingGen6 = document.getElementById("B2");
let button = document.querySelector("button");

function setGradient(colorValue1, colorValue2) {
	firstColor.value = colorValue1;
	secondColor.value = colorValue2;
	body.style.background =
		`linear-gradient(45deg, `
		+ colorValue1
		+ ", "
		+ colorValue2
		+ ")";
		showing.textContent = `First Color: ` + colorValue1 + ` Second Color: ` + colorValue2;
}
function getInputColorValues() {
	setGradient(firstColor.value, secondColor.value);
}

function generator() {
	let numberList = [];
	for (i=0; i < 6; i++) {
		numberList.push(getRandomNumber());
	}
	showingGen.textContent = `R ` + numberList[0];
	showingGen2.textContent = `R ` + numberList[1];
	showingGen3.textContent = `G ` + numberList[2];
	showingGen4.textContent = `G ` + numberList[3];
	showingGen5.textContent = `B ` + numberList[4];
	showingGen6.textContent = `B ` + numberList[5];
	let joinedNumberList = numberList.join(``)
	setGradient(`#` + joinedNumberList.slice(0, 6), `#` + joinedNumberList.slice(6, 12));
	button.style.backgroundColor = "rgba(" + 255 + "," +  255 + "," + 255 + "," + 0.3 + ")";
}

function formatNumber(num) {
 return num < 10 ? `0` + num : num;
}

function getRandomNumber() {
	return formatNumber(Math.floor(Math.random() * 99));
}

window.onload = getInputColorValues();

firstColor.addEventListener("input", getInputColorValues);

secondColor.addEventListener("input", getInputColorValues);