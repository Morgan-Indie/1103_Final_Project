class Gate {
    constructor(type, pos) {
        this.type = type;
        this.pos = createVector(pos.x, pos.y);
        this.active = false;
        this.inputs = [];
    }
    show() {
        let offsetPos = createVector(this.pos.x, this.pos.y);
        offsetPos.x -= offset.x;
        offsetPos.y -= offset.y;
        fill(colorOuter);
        if (this.active) {
            fill(colorActive);
        }
        noStroke();
        if (this.type == "and") {
            ellipse(offsetPos.x, offsetPos.y, pointSize, pointSize);
            rect(offsetPos.x - pointSize / 2, offsetPos.y - pointSize / 2, pointSize / 2, pointSize);
            fill(andColor);
            ellipse(offsetPos.x, offsetPos.y, pointSize * 2 / 3, pointSize * 2 / 3);
            rect(offsetPos.x - pointSize / 3, offsetPos.y - pointSize / 3, (pointSize * 2 / 3) / 2, pointSize * 2 / 3);
        } else if (this.type == "or") {
            ellipse(offsetPos.x, offsetPos.y, pointSize, pointSize);
            let ellipseSize = pointSize;
            beginShape();
            vertex(offsetPos.x, offsetPos.y - ellipseSize / 2);
            vertex(offsetPos.x - ellipseSize * 3 / 4, offsetPos.y - ellipseSize / 2);
            vertex(offsetPos.x - ellipseSize * 3 / 4 + ellipseSize / 8 * 1, offsetPos.y - ellipseSize / 2 + ellipseSize / 8 * 1);
            vertex(offsetPos.x - ellipseSize * 3 / 4 + ellipseSize / 8 * 1.5, offsetPos.y - ellipseSize / 2 + ellipseSize / 8 * 2);
            vertex(offsetPos.x - ellipseSize * 3 / 4 + ellipseSize / 8 * 1.8, offsetPos.y - ellipseSize / 2 + ellipseSize / 8 * 3);
            vertex(offsetPos.x - ellipseSize * 3 / 4 + ellipseSize / 8 * 2, offsetPos.y - ellipseSize / 2 + ellipseSize / 8 * 4);
            vertex(offsetPos.x - ellipseSize * 3 / 4 + ellipseSize / 8 * 1.8, offsetPos.y - ellipseSize / 2 + ellipseSize / 8 * 5);
            vertex(offsetPos.x - ellipseSize * 3 / 4 + ellipseSize / 8 * 1.5, offsetPos.y - ellipseSize / 2 + ellipseSize / 8 * 6);
            vertex(offsetPos.x - ellipseSize * 3 / 4 + ellipseSize / 8 * 1, offsetPos.y - ellipseSize / 2 + ellipseSize / 8 * 7);
            vertex(offsetPos.x - ellipseSize * 3 / 4, offsetPos.y - ellipseSize / 2 + ellipseSize / 8 * 8);
            vertex(offsetPos.x, offsetPos.y + ellipseSize / 2);
            endShape();
            ellipseSize *= 2 / 3;
            fill(orColor);
            ellipse(offsetPos.x, offsetPos.y, ellipseSize, ellipseSize);
            beginShape();
            vertex(offsetPos.x, offsetPos.y - ellipseSize / 2);
            vertex(offsetPos.x - ellipseSize * 3 / 4, offsetPos.y - ellipseSize / 2);
            vertex(offsetPos.x - ellipseSize * 3 / 4 + ellipseSize / 8 * 1, offsetPos.y - ellipseSize / 2 + ellipseSize / 8 * 1);
            vertex(offsetPos.x - ellipseSize * 3 / 4 + ellipseSize / 8 * 1.5, offsetPos.y - ellipseSize / 2 + ellipseSize / 8 * 2);
            vertex(offsetPos.x - ellipseSize * 3 / 4 + ellipseSize / 8 * 1.8, offsetPos.y - ellipseSize / 2 + ellipseSize / 8 * 3);
            vertex(offsetPos.x - ellipseSize * 3 / 4 + ellipseSize / 8 * 2, offsetPos.y - ellipseSize / 2 + ellipseSize / 8 * 4);
            vertex(offsetPos.x - ellipseSize * 3 / 4 + ellipseSize / 8 * 1.8, offsetPos.y - ellipseSize / 2 + ellipseSize / 8 * 5);
            vertex(offsetPos.x - ellipseSize * 3 / 4 + ellipseSize / 8 * 1.5, offsetPos.y - ellipseSize / 2 + ellipseSize / 8 * 6);
            vertex(offsetPos.x - ellipseSize * 3 / 4 + ellipseSize / 8 * 1, offsetPos.y - ellipseSize / 2 + ellipseSize / 8 * 7);
            vertex(offsetPos.x - ellipseSize * 3 / 4, offsetPos.y - ellipseSize / 2 + ellipseSize / 8 * 8);
            vertex(offsetPos.x, offsetPos.y + ellipseSize / 2);
            endShape();
        } else if (this.type == "xor") {
            ellipse(offsetPos.x, offsetPos.y, pointSize, pointSize);
            let ellipseSize = createVector(pointSize * 3 / 4, pointSize);
            beginShape();
            vertex(offsetPos.x, offsetPos.y - ellipseSize.y / 2);
            vertex(offsetPos.x - ellipseSize.x, offsetPos.y - ellipseSize.y / 2);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 1, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 1);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 1.5, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 2);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 1.8, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 3);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 2, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 4);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 1.8, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 5);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 1.5, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 6);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 1, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 7);
            vertex(offsetPos.x - ellipseSize.x, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 8);
            vertex(offsetPos.x, offsetPos.y + ellipseSize.y / 2);
            endShape();
            ellipseSize = createVector(ellipseSize.x * 2 / 3, ellipseSize.y * 2 / 3);
            fill(xorColor);
            ellipse(offsetPos.x, offsetPos.y, ellipseSize.y, ellipseSize.y);
            beginShape();
            vertex(offsetPos.x, offsetPos.y - ellipseSize.y / 2);
            vertex(offsetPos.x - ellipseSize.x, offsetPos.y - ellipseSize.y / 2);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 1, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 1);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 1.5, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 2);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 1.8, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 3);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 2, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 4);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 1.8, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 5);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 1.5, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 6);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 1, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 7);
            vertex(offsetPos.x - ellipseSize.x, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 8);
            vertex(offsetPos.x, offsetPos.y + ellipseSize.y / 2);
            endShape();
            stroke(xorColor);
            noFill();
            ellipseSize = createVector(ellipseSize.x * 1.5, ellipseSize.y);
            beginShape();
            vertex(offsetPos.x - ellipseSize.x, offsetPos.y - ellipseSize.y / 2);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 1, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 1);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 1.5, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 2);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 1.8, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 3);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 2, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 4);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 1.8, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 5);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 1.5, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 6);
            vertex(offsetPos.x - ellipseSize.x + ellipseSize.x / 8 * 1, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 7);
            vertex(offsetPos.x - ellipseSize.x, offsetPos.y - ellipseSize.y / 2 + ellipseSize.y / 8 * 8);
            endShape();
            noStroke();
        } else if (this.type == "not") {
            let triangleSize = pointSize / 2;
            beginShape();
            vertex(offsetPos.x - triangleSize, offsetPos.y - triangleSize);
            vertex(offsetPos.x - triangleSize, offsetPos.y + triangleSize);
            vertex(offsetPos.x + triangleSize, offsetPos.y);
            endShape();
            triangleSize *= 2 / 3;
            offsetPos.x = offsetPos.x - pointSize / 20;
            fill(notColor);
            beginShape();
            vertex(offsetPos.x - triangleSize, offsetPos.y - triangleSize);
            vertex(offsetPos.x - triangleSize, offsetPos.y + triangleSize);
            vertex(offsetPos.x + triangleSize, offsetPos.y);
            endShape();
        }
    }
    drawInputLines() {
        if (this.inputs.length > 0) {
            let offsetPos = createVector(this.pos.x, this.pos.y);
            offsetPos.x -= offset.x;
            offsetPos.y -= offset.y;
            for (let input of this.inputs) {
                if (input.active){stroke(colorLineActive);}
                else {stroke(colorLineInActive);}
                
                line(offsetPos.x, offsetPos.y, input.pos.x - offset.x, input.pos.y - offset.y);
            }
        }
    }
    update() {
        if (this.inputs.length > 0) {
            if (this.type == "and") {
                this.andLogic();
            } else if (this.type == "or") {
                this.orLogic();
            } else if (this.type == "xor") {
                this.xorLogic();
            } else if (this.type == "not") {
                this.active = !this.inputs[0].active;
            }
        }
    }
    andLogic() {
        this.active = false;
        let count = 0;
        for (let input of this.inputs) {
            if (input.active) {
                count++;
            }
        }
        if (count >= this.inputs.length) {
            this.active = true;
        }
    }
    orLogic() {
        this.active = false;
        for (let input of this.inputs) {
            if (input.active) {
                this.active = true;
            }
        }
    }
    xorLogic() {
        this.active = false;
        let count = 0;
        for (let input of this.inputs) {
            if (input.active) {
                this.active = true;
                count++;
            }
        }
        if (count >= this.inputs.length) {
            this.active = false;
        }
    }
}