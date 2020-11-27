let andColor, orColor, xorColor, notColor, pointColor, nodecolor, adderColor, subtr, aluColor, clockColor, pauseColor;
let points = [];
let gates = [];
let pointSize = 20;
let spaceBetween = 10;

let offset;
let mainChart;
let charts = [];
let chartA, chartB, chartC;

function setup() {
	createCanvas(windowWidth, windowHeight);

	colorInner = color(0, 255, 0);
	colorActive = color(200, 0, 0);
	colorLineActive = color(120, 0, 0);
	colorOuter = color(0, 0, 255);
	colorLineInActive = color(75, 75, 75);
	andColor = color(200, 100, 100);
	orColor = color(200, 200, 100);
	xorColor = color(100, 200, 200);
	notColor = color(100, 100, 200);
	pointColor = color(50);
	nodeColor = color(255, 255, 255);

	charts.push(new Chart(
		createVector(50, 50),
		createVector(420, 35),
		[["Press a black circle to toggle that BIT"]]
	));

	offset = createVector(0,0);
	let size = createVector(pointSize + spaceBetween * 2 * 2, 25);

	let pos = createVector(200, 150);
	buildXColumn(pos);
	pos = createVector(200, 300);
	buildYColumn(pos);

	pos = createVector(200, 100);
	addLetterLabels(pos, "X");
	pos = createVector(200, 250);
	addLetterLabels(pos, "Y");

	pos = createVector(500, 200);
	buildFullAdder(pos);

	pos = createVector(500 - (spaceBetween + pointSize), 225);
	let data = [
		["A", "B", "C", "X", "Y"],
		[0,0,0,0,0],
		[0,0,1,0,1],
		[0,1,0,0,1],
		[0,1,1,1,0],
		[1,0,0,0,1],
		[1,0,1,1,0],
		[1,1,0,1,0],
		[1,1,1,1,1],
	];

	mainChart = new Chart(
		pos,
		size,
		data
	);
	charts.push(mainChart);
	mainChart.findRowToHighlight(chartA.active, chartB.active, chartC.active);
}

function draw() {
	background(100);

	gates.forEach(gate => {
		gate.update();
		gate.drawInputLines();
	});

	points.forEach(point => {
		point.update();
		point.show()
	});
	gates.forEach(gate =>{
		gate.show();
	});

	charts.forEach(chart => {
		chart.show();
	});
}

function mousePressed(){
	checkCollisions();

	mainChart.findRowToHighlight(chartA.active, chartB.active, chartC.active);
}

function checkCollisions(){
	let ob;
	ob = checkPointCollision();
	if (ob != null){ob.toggle();}

	return ob != null;
}

function checkPointCollision(){
	for (let point of points){
		let d = dist(point.pos.x-offset.x, point.pos.y-offset.y, mouseX, mouseY);
		if (d < pointSize/2){
			return point;
		}
	}
}

function addLetterLabels(pos, label){
	let size = createVector(100, 25);
	let labelSize = createVector(20, 20);

	charts.push(new Chart(pos, size, [[label + " Column"]]));
	pos = createVector(pos.x - 40, pos.y + 40);
	charts.push(new Chart(pos, labelSize, [["A"]]));
	pos = createVector(pos.x, pos.y + 30);
	charts.push(new Chart(pos, labelSize, [["B"]]));
	pos = createVector(pos.x, pos.y + 30);
	charts.push(new Chart(pos, labelSize, [["C"]]));
}