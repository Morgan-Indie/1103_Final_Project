class Point {
    constructor(pos, type="point") {
        this.active = false;
        this.pos = createVector(pos.x, pos.y);
        this.type = type;
        this.inputs = [];
    }
    show() {
        let offsetPos = createVector(this.pos.x, this.pos.y);
        offsetPos.x -= offset.x;
        offsetPos.y -= offset.y;
        //draw line
        if (this.inputs.length > 0) {
            if (this.inputs[0].active){stroke(colorLineActive);}
            else {stroke(colorLineInActive);}
            line(offsetPos.x, offsetPos.y, this.inputs[0].pos.x - offset.x, this.inputs[0].pos.y - offset.y);
        }
        //draw point
        fill(colorOuter);
        if (this.active) {
            fill(colorActive);
        }
        noStroke();
        ellipse(offsetPos.x, offsetPos.y, pointSize, pointSize);
        if (this.type == "node") {
            fill(nodeColor);
        } else {
            fill(pointColor);
        }
        ellipse(offsetPos.x, offsetPos.y, pointSize * 2 / 3, pointSize * 2 / 3);

    }
    toggle() {
        if (this.type != "node") {
            this.active = !this.active;
        }
    }
    update() {
        if (this.type == "node") {
            this.active = false;
            for (let input of this.inputs) {
                if (input.active) {
                    this.active = true;
                }
            }
        }
    }
}