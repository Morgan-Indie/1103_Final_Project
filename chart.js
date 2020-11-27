class Chart{
    constructor(pos, size, data){
        this.pos = createVector(pos.x, pos.y);
        this.size = createVector(size.x, size.y);
        this.data = data;
        this.cells = [];
        this.backgroundColor = color(143, 199, 227);
        this.highlightColor = color(200, 100, 100);
        this.borderColor = color(0, 0, 0);
        this.init();
    }

    init(){
        for (let y=0; y<this.data.length; y++){
            let holdData = [];
            for (let x=0; x<this.data[0].length; x++){
                let pos = createVector(
                    this.pos.x + this.size.x * x,
                    this.pos.y + this.size.y * y
                );
                holdData.push(new Cell(
                    pos, 
                    this.size, 
                    this.data[y][x], 
                    this.backgroundColor,
                    this.borderColor
                ));
            }
            this.cells.push(holdData);
        }
    }

    show(){
        this.cells.forEach(cellArr => {
            cellArr.forEach(cell => {
                cell.show();
            });
        });
    }

    clearHighlights(){
        this.cells.forEach(cellArr => {
            cellArr.forEach(cell => {
                cell.color = this.backgroundColor;
            });
        });
    }

    highlightRow(row){
        this.clearHighlights();
        for (let i=0; i<this.cells[row].length; i++){
            this.cells[row][i].color = this.highlightColor;
        }
    }

    findRowToHighlight(a,b,c){
        //ABC passed as bool, row determined from chart in 1103 final project
        let row = 1;
        if (c){row += 1;}
        if (b){row += 2;}
        if (a){row += 4;}
        this.highlightRow(row);
    }
}

class Cell{
    constructor(pos, size, data, mainColor, borderColor){
        this.pos = createVector(pos.x, pos.y);
        this.size = size;
        this.data = data;
        this.color = mainColor;
        this.borderColor = borderColor;
    }

    show(){
        fill(this.color);
        stroke(this.borderColor);
        strokeWeight(2);
        rect(this.pos.x, this.pos.y, this.size.x, this.size.y);

        fill(this.borderColor);
        textAlign(CENTER, CENTER);
        let tSize = this.size.x > this.size.y ? this.size.y : this.size.x;
        textSize(tSize * 0.7);
        text(this.data, 
            this.pos.x + this.size.x / 2, 
            this.pos.y + this.size.y / 2
        );
    }
}