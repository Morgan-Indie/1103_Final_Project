function buildXColumn(pos){
    let a = buildPoint(pos, 0, 0);
    let b = buildPoint(pos, 0, 1);
    let c = buildPoint(pos, 0, 1);
    points.push(a, b, c);

    let and1 = buildGate("and", pos, a, b, 1, -2);
    let or1 = buildGate("or", pos, a, b, 0, 1);
    let and2 = buildGate("and", pos, or1, c, 1, 1);
    let or2 = buildGate("or", pos, and1, and2, 1, -1);

    gates.push(or1, or2);
    gates.push(and1, and2);
}

function buildYColumn(pos){
    let a = buildPoint(pos, 0, 0);
    let b = buildPoint(pos, 0, 1);
    let c = buildPoint(pos, 0, 1);
    points.push(a, b, c);

    let and1 = buildGate("and", pos, a, b, 1, -2);
    let or1 = buildGate("or", pos, a, b, 0, 1);
    let not1 = buildGate("not", pos, and1, null, 1, -1);
    let and2 = buildGate("and", pos, not1, or1, 1, 1);
    let and3 = buildGate("and", pos, and2, c, 1, 1);
    let or2 = buildGate("or", pos, and2, c, 0, 1);
    let not2 = buildGate("not", pos, and3, null, 1, -1);
    let and4 = buildGate("and", pos, not2, or2, 1, 1);

    gates.push(or1, or2);
    gates.push(and1, and2, and3, and4);
    gates.push(not1, not2);
}

function buildFullAdder(pos){
    let a = buildPoint(pos, 0, 0);
    let b = buildPoint(pos, 2, 0);
    let c = buildPoint(pos, 2, 0);
    let x = buildPoint(pos, 2, 0, "node");
    let y = buildPoint(pos, 2, 0, "node");

    points.push(a, b, c, x, y);
    chartA = a; chartB = b; chartC = c;

    let and1 = buildGate("and", pos, c, b, -4, -1);
    let or1 = buildGate("or", pos, c, b, -1, 0);
    let and2 = buildGate("and", pos, a, or1, 1, -1);
    let or2 = buildGate("or", pos, and1, and2, 1, 0);
    let not1 = buildGate("not", pos, and1, null, -3, 0);
    let and3 = buildGate("and", pos, not1, or1, -1, 0);
    let and4 = buildGate("and", pos, and3, a, 0, -1);
    let or3 = buildGate("or", pos, and3, a, -1, 0);
    let not2 = buildGate("not", pos, and4, null, 1, -1);
    let and5 = buildGate("and", pos, not2, or3, -1, -1);

    //connector just to make the gates look cleaner
    let connector = buildPoint(pos, 8, 0, "node");
    connector.inputs.push(and5);
    points.push(connector);

    x.inputs.push(or2);
    y.inputs.push(connector);

    gates.push(or1, or2, or3);
    gates.push(and1, and2, and3, and4, and5);
    gates.push(not1, not2);
}

function buildPoint(pos, posChangeX, posChangeY, type="point"){
    pos.x += posChangeX * (spaceBetween + pointSize);
    pos.y += posChangeY * (spaceBetween + pointSize);
    let point = new Point(pos, type);
    return point;
}

function buildGate(type, pos, input1, input2=null, posChangeX=0, posChangeY=0){
    pos.x += posChangeX * (spaceBetween + pointSize);
    pos.y += posChangeY * (spaceBetween + pointSize);
    let gate = new Gate(type, pos);
    gate.inputs.push(input1);
    if (type != "not"){gate.inputs.push(input2);}
    return gate;
}